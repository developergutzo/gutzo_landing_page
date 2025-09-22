import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import gutzoLogo from 'figma:asset/a7377e50595011626fcf9c82794a77fa3761460f.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center">
        {/* Logo - Mobile Optimized */}
        <ImageWithFallback
          src={gutzoLogo}
          alt="Gutzo - Healthy Feels Good"
          className="h-12 sm:h-10 lg:h-12 w-auto"
        />
      </div>
    </header>
  );
}