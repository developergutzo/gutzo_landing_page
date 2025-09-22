import image_bc3b48a5f7e624d1e5c7df565a7d1d1a613aa48e from 'figma:asset/bc3b48a5f7e624d1e5c7df565a7d1d1a613aa48e.png';
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from 'figma:asset/20ffce0bd7d23d8001aabf3714181cc8bb918dec.png';
import gutzoLogo from 'figma:asset/a7377e50595011626fcf9c82794a77fa3761460f.png';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    setMessage("");
    setIsSuccess(false);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-8ccc8990/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ 
          email: email.trim(),
          source: 'hero_signup',
          metadata: {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
          }
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage("🎉 You're in! We'll notify you when Gutzo launches.");
        setEmail("");
      } else {
        throw new Error(data.error || 'Failed to save email');
      }
    } catch (error) {
      console.error('Email signup error:', error);
      setIsSuccess(false);
      if (error instanceof Error && error.message.includes('already exists')) {
        setMessage("You're already on our list! We'll be in touch soon.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section style={{ backgroundColor: '#ffffff !important', colorScheme: 'light only' }} className="pt-6 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[800px] mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <ImageWithFallback
            src={gutzoLogo}
            alt="Gutzo - Healthy Feels Good"
            className="h-12 sm:h-10 lg:h-12 w-auto"
            style={{ filter: 'none !important' }}
          />
        </div>
        
        <div className="text-center px-2">
          {/* Main Headline - Swiggy/Zomato Typography */}
          <h1 
            className="main-headline"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(16px, 4.5vw, 48px)', 
              lineHeight: '1.3',
              fontWeight: '700',
              fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.01em',
              textAlign: 'center',
              marginBottom: '16px'
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Other apps tempt you with <span style={{ color: '#C4583C' }}>junk</span>.</span><br />
            <span style={{ color: '#0B7A36' }}>Gutzo</span> doesn't.
          </h1>

          {/* Image Section - Mobile Optimized */}
          <div className="w-full mb-6 sm:mb-10 mx-auto max-w-[600px]">
            <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={image_bc3b48a5f7e624d1e5c7df565a7d1d1a613aa48e}
                alt="Gutzo app comparison showing healthy vs unhealthy food choices"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Subline - Montserrat Body Text */}
          <p 
            className="body-text px-4 sm:px-0"
            style={{ 
              color: '#2D3748',
              fontSize: 'clamp(15px, 4vw, 18px)',
              fontWeight: '400',
              fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
              lineHeight: '1.6',
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px auto'
            }}
          >
            Healthy meals from <span style={{ color: '#0B7A36', fontWeight: '500' }}>trusted kitchens</span>, delivered across your city.
          </p>

          {/* CTA Form - Mobile Optimized */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 max-w-lg mx-auto px-4 sm:px-0">
            <Input
              type="email"
              placeholder="Enter your email to eat better"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              style={{ 
                backgroundColor: '#ffffff', 
                color: '#000000', 
                borderColor: '#d1d5db',
                fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400'
              }}
              className="w-full sm:flex-1 sm:min-w-[70%] h-12 px-[14px] rounded-lg border focus:border-[#0B7A36] focus:ring-[#0B7A36] shadow-sm"
            />
            <Button 
              type="submit"
              disabled={isLoading || !email.trim()}
              className="cta-button w-full sm:w-auto hover:opacity-90 px-4 sm:px-6 h-12 rounded-lg"
              style={{ 
                backgroundColor: isLoading ? '#6b7280' : '#0B7A36', 
                color: '#FFFFFF',
                fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
                fontWeight: '600',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                lineHeight: '1.2',
                opacity: isLoading || !email.trim() ? 0.7 : 1
              }}
            >
              {isLoading ? 'Saving...' : 'Reserve My Healthy Spot'}
            </Button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div 
              className="mb-4 px-4 py-2 rounded-lg mx-auto max-w-lg"
              style={{
                backgroundColor: isSuccess ? '#D1FAE5' : '#FEE2E2',
                color: isSuccess ? '#065F46' : '#DC2626',
                fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center'
              }}
            >
              {message}
            </div>
          )}

          {/* Trust Note - Montserrat Body Text */}
          <p 
            className="body-text px-6 sm:px-0"
            style={{ 
              color: '#2D3748', 
              fontSize: 'clamp(13px, 3vw, 15px)', 
              fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
              fontWeight: '400',
              lineHeight: '1.5',
              marginBottom: '16px',
              maxWidth: '400px',
              margin: '0 auto 16px auto'
            }}
          >
            We'll ping you when Gutzo is live.
          </p>

          {/* Urgency Banner - Poppins Bold */}
          <div 
            className="flex items-center justify-center px-4 py-2 rounded-full mx-auto w-fit" 
            style={{ 
              backgroundColor: '#E7600E !important', 
              color: '#FFFFFF !important',
              fontFamily: 'Poppins, system-ui, -apple-system, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(12px, 3vw, 14px)',
              letterSpacing: '0.2px',
              filter: 'none !important',
              whiteSpace: 'nowrap'
            }}
          >
            ⚡ 200+ already joined. Be part of the first 1000.
          </div>
        </div>
      </div>
    </section>
  );
}