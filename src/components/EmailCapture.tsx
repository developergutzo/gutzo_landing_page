import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function EmailCapture() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email capture logic here
    console.log("Email captured:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Scarcity Badge */}
        <div className="inline-flex mb-8">
          <Badge className="bg-[#EA580C] text-white px-4 py-2 text-sm font-medium rounded-full">
            Limited to first 1000 users
          </Badge>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to eat better without the junk?
        </h2>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 text-lg rounded-xl border-2 border-gray-200 focus:border-[#17833C] focus:ring-[#17833C]"
            />
            <Button 
              type="submit"
              className="bg-[#17833C] hover:bg-[#17833C]/90 text-white px-8 py-3 text-lg rounded-xl shadow-lg"
            >
              Join Early Access
            </Button>
          </div>
        </form>

        {/* Subtext */}
        <p className="text-muted-foreground">
          No spam. You'll only hear from us when we launch in your city.
        </p>
      </div>
    </section>
  );
}