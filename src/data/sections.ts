import type { ReactNode } from "react";
import { createElement } from "react";

export type SectionStep = {
  title: string;
  text: string;
  media?: ReactNode;
};

export type Section = {
  id: string;
  steps: SectionStep[];
};

export const sections: Section[] = [
  {
    id: "about",
    steps: [
      {
        title: "Who am I?",
        text: "I am an enthusiastic digital designer..."
      }
    ]
  },
  {
    id: "projects",
    steps: [
      {
        title: "Project 1",
        text: "A very cool short introduction...",
        media: createElement("div", { className: "bg-neutral-700 w-full h-full" }) // change to actual media - images
      },
      {
        title: "Project 2",
        text: "Another project description",
        media: createElement("div", { className: "bg-neutral-600 w-full h-full" }) // change to actual media - images
      }
    ]
  },
];

export default sections;