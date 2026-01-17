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
        })
      }
    ]
  },
  {
    id: "projects",
    steps: [
      {
        title: "CBR Learners App",
        text: "I created a mobile app to help learners have an easier time learning theory and support their practical skills. The app allows users to learn theory and practice skills in a fun and interactive way.",
        media: createElement("div", { className: "bg-neutral-700 w-full h-full" }) // change to actual media - images
      },
      {
        title: "Equine Integration",
        text: "I created a desktop dashboard to help Equine Integration users manage their horses' health and well-being. The dashboard combines data coming from 3 other apps and allows users to view their horse's visualized data and receive alerts for health issues.",
        media: createElement("div", { className: "bg-neutral-600 w-full h-full" }) // change to actual media - images
      }
    ]
  },
];

export default sections;