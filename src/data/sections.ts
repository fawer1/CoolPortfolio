import type { ReactNode } from "react";
import { createElement } from "react";
import AboutGallery from "../components/AboutGallery";
import airport from "../assets/airport.JPEG";
import bike from "../assets/bike.JPEG";
import cringe from "../assets/cringe.JPEG";
import jacket from "../assets/jacket-nature-tunnel.JPEG";
import mono from "../assets/mono-car.JPEG";

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
        text: "I am an enthusiastic digital designer and developer aiming to make an impact on my users’ lives. I strive to be a better professional and person with the sole goal of helping others",
        // Replace `images` with your real assets. Using `noise.png` as a placeholder example.
        media: createElement(AboutGallery, {
          images: [
            { src: airport },
            { src: bike },
            { src: cringe },
            { src: jacket },
            { src: mono },
          ],
          columns: 2,
          gap: 2,
        })
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