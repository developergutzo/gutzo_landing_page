import { motion } from 'motion/react';

interface StoryboardItem {
  id: number;
  title: string;
  caption: string;
}

const storyboardData: StoryboardItem[] = [
  {
    id: 1,
    title: "The Trap",
    caption: "Distraction vs Clarity"
  },
  {
    id: 2,
    title: "The Result", 
    caption: "Regret vs Relief"
  },
  {
    id: 3,
    title: "The Impact",
    caption: "Unfit vs Fit Life"
  }
];

export function NewStoryboard() {
  return (
    <section className="hidden">
      {/* Section completely removed */}
    </section>
  );
}