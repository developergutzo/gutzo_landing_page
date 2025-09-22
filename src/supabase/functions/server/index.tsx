import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from 'npm:@supabase/supabase-js';
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8ccc8990/health", (c) => {
  return c.json({ status: "ok" });
});

// Email signup endpoint
app.post("/make-server-8ccc8990/email", async (c) => {
  try {
    // Create Supabase client with service role key for database access
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const body = await c.req.json();
    const { email, source = 'hero_signup', metadata = {} } = body;

    // Validate email
    if (!email || !email.trim()) {
      return c.json({ error: 'Email is required' }, 400);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return c.json({ error: 'Invalid email format' }, 400);
    }

    // Get client IP address
    const forwardedFor = c.req.header('x-forwarded-for');
    const realIP = c.req.header('x-real-ip');
    const ip_address = forwardedFor?.split(',')[0] || realIP || 'unknown';

    // Prepare data for insertion
    const emailData = {
      email: email.trim().toLowerCase(),
      source,
      ip_address,
      user_agent: c.req.header('user-agent') || null,
      metadata: {
        ...metadata,
        submitted_at: new Date().toISOString(),
        headers: {
          'user-agent': c.req.header('user-agent'),
          'referer': c.req.header('referer'),
        }
      }
    };

    // Insert email into database
    const { data, error } = await supabase
      .from('emails')
      .insert([emailData])
      .select();

    if (error) {
      console.error('Database error:', error);
      
      // Handle duplicate email constraint
      if (error.code === '23505' && error.message.includes('email')) {
        return c.json({ 
          error: 'Email already exists',
          message: 'This email is already registered for updates.'
        }, 409);
      }

      return c.json({ 
        error: 'Database error', 
        details: error.message 
      }, 500);
    }

    // Success response
    return c.json({ 
      success: true, 
      message: 'Email successfully registered!',
      data: data[0]
    });

  } catch (error) {
    console.error('Email signup error:', error);
    return c.json({ 
      error: 'Internal server error',
      details: error.message 
    }, 500);
  }
});

// Get email stats endpoint (optional)
app.get("/make-server-8ccc8990/email/stats", async (c) => {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { count } = await supabase
      .from('emails')
      .select('*', { count: 'exact', head: true });

    const { data } = await supabase
      .from('emails')
      .select('id, created_at, source')
      .order('created_at', { ascending: false })
      .limit(1);

    return c.json({ 
      status: 'healthy',
      total_emails: count,
      latest_signup: data?.[0]?.created_at || null
    });

  } catch (error) {
    console.error('Stats error:', error);
    return c.json({ error: 'Failed to get stats' }, 500);
  }
});

Deno.serve(app.fetch);