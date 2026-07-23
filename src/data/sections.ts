import type { ReactNode } from "react";
import { createElement } from "react";
import AboutGallery from "../components/AboutGallery";
import bike from "../assets/bike.JPEG";
import cringe from "../assets/cringe.JPEG";
import jacket from "../assets/jacket-nature-tunnel.JPEG";
import mono from "../assets/mono-car.JPEG";
import cbr from "../assets/Dashboard - ipad new.jpg";
import me1 from "../assets/me1.jpg";
import me2 from "../assets/me2.jpg";
import drvn from "../assets/drvn brand.jpg";
import drvnmobile from "../assets/drvn mobile.jpg";
import overall from "../assets/Overall.jpg";
import health from "../assets/Health.jpg";
import schedule from "../assets/Schedule.jpg";
import interactions from "../assets/interactions.jpg";

export type SectionStep = {
  title: string;
  text: ReactNode;
  media?: ReactNode;
  link?: {
    href: string;
    text: string;
  };
  skillsTitle?: string;
  skills?: string[];
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
        text: "I am Furkan, an enthusiastic digital designer and developer aiming to make an impact on my users’ lives. I strive to be a better professional and person with the sole goal of helping others. Oh, and I also love Korean quite a bit, hence the Korean text you see on this page (it's my Korean name).",
        // Replace `images` with your real assets. Using `noise.png` as a placeholder example.
        media: createElement(AboutGallery, {
          images: [
            { src: me1 },
            { src: bike },
            { src: me2 },
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
        title: "Consulink B.V Internship | React Native app",
        text: "I created a native mobile app from research, to design, till development for Consulink B.V. The app is built upon the already existing web platform and uses the backend that was previously created. My biggest and proudest project I've undertaken so far.",
        media: createElement(AboutGallery, {
          images: [
            { src: cbr },
            { src: drvn },
            { src: drvnmobile },
          ],
        }),
        link: {
          href: "./consulink.html",  //create it later
          text: "Open project page",
        }
      },
      {
        title: `"Sakura Creative" Branding`,
        text: "In a team setting I created a branding for a fictional company called Sakura Creative. The branding includes a logo, color palette, typography, brand book, brand identity, and brand guidelines. It was inspired by the Japanese culture and the cherry blossom flower.",
        media: createElement(AboutGallery, {
          images: [
            { src: overall },
            { src: health },
            { src: schedule },
            { src: interactions },
          ],
        }),
        link: {
          href: "./sakuraCreativePage.html", //create it later
          text: "Open project page",
        }
      },
      {
        title: "CBR Learners App",
        text: "I created a mobile app to help learners have an easier time learning theory and support their practical skills. The app allows users to learn theory and practice skills in a fun and interactive way.",
        media: createElement(AboutGallery, {
          images: [
            { src: cbr },
            { src: drvn },
            { src: drvnmobile },
          ],
        }),
        link: {
          href: "./cbr-learner.html",
          text: "Open project page",
        }
      },
      {
        title: "Equine Integration",
        text: "I created a desktop dashboard to help Equine Integration users manage their horses' health and well-being. The dashboard combines data coming from 3 other apps and allows users to view their horse's visualized data and receive alerts for health issues.",
        media: createElement(AboutGallery, {
          images: [
            { src: overall },
            { src: health },
            { src: schedule },
            { src: interactions },
          ],
        }),
        link: {
          href: "./equine.html",
          text: "Open project page",
        }
      },
      
    ]
  },
];

export default sections;