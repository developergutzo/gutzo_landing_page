import { motion } from 'motion/react';

export function StoryboardSection() {
  const storyboards = [
    {
      id: 1,
      title: "The Temptation Trap",
      subtitle: "Other food apps flood you with junk",
      description: "Endless notifications. Sugary treats. Fast food promotions. Your phone becomes a gateway to poor choices.",
      accentColor: "#C4583C", // Red for pain
      phase: "Pain"
    },
    {
      id: 2,
      title: "The Gutzo Difference", 
      subtitle: "We removed the distractions",
      description: "No junk food options. No tempting notifications. Just wholesome meals from trusted local kitchens.",
      accentColor: "#187D3B", // Green for solution
      phase: "Solution"
    },
    {
      id: 3,
      title: "Effortless Healthy Eating",
      subtitle: "Finally, a food app that works for you",
      description: "Eat healthy without fighting temptation. Build better habits. Feel confident in every food choice.",
      accentColor: "#187D3B", // Green for benefit
      phase: "Benefit"
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">

    </section>
  );
}