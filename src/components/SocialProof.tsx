import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Persona {
  name: string;
  age: number;
  role: string;
  quote: string;
  image: string;
}

const personas: Persona[] = [
  {
    name: "Arun",
    age: 29,
    role: "Office Worker",
    quote: "Gutzo keeps me sharp at work.",
    image: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3JrZXJ8ZW58MXx8fHwxNzU4MTk3NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Priya",
    age: 25,
    role: "Student",
    quote: "I no longer give in to late-night cravings.",
    image: "https://images.unsplash.com/photo-1729101143873-d80050bae219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIweW91bmclMjB3b21hbnxlbnwxfHx8fDE3NTgxOTc0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Ravi",
    age: 40,
    role: "Parent",
    quote: "My family eats better without distractions.",
    image: "https://images.unsplash.com/photo-1665250855519-25e3f817a96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJlbnQlMjBmYW1pbHklMjBtYW58ZW58MXx8fHwxNzU4MTk3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function SocialProof() {
  return (
    <section className="hidden">
      {/* Section completely removed */}
    </section>
  );
}