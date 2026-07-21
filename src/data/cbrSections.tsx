import { createElement } from "react";
import AboutGallery from '../components/AboutGallery';
import type { Section } from './sections'
import competAnalysis from '../assets/cbr-images/compet-analysis-cbr.png'
import lotusBlossom from '../assets/cbr-images/lotus-blossom-cbr.jpg'
import eisenhowerMatrix from '../assets/cbr-images/eisenhower-matrix-cbr.png'
import sketch1 from '../assets/cbr-images/sketch1-cbr.jpg'
import sketch2 from '../assets/cbr-images/sketch2-cbr.jpg'
import midfi1 from '../assets/cbr-images/mid-fi1.png'
import midfi2 from '../assets/cbr-images/mid-fi2.png'
import midfi3 from '../assets/cbr-images/mid-fi3.png'
import midfi4 from '../assets/cbr-images/mid-fi3.png'
import cbrHifi from '../assets/cbr-images/cbr-hifi.gif'
import drvn1 from '../assets/cbr-images/drvn1.png'
import drvn2 from '../assets/cbr-images/drvn2.png'
import drvn3 from '../assets/cbr-images/drvn3.png'
import drvn4 from '../assets/cbr-images/drvn4.png'
import drvn5 from '../assets/cbr-images/drvn5.png'

export const cbrSections: Section[] = [
    {
        id: 'cbr-overview',
        steps: [
            {
                title: 'Partout | CBR practice app',
                text: 'Project made in collaboration with Partout, a company that provides CBR practice for students. The app is designed to help students practice CBR questions in a fun and engaging way.',
                media: createElement(AboutGallery, {
                    images: [
                        { src: drvn1 },
                        { src: drvn2 },
                        { src: drvn3 },
                        { src: drvn4 },
                        { src: drvn5 },
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                }),
                skillsTitle: 'Core Skills',
                skills: ['Figma', 'UX Research', 'UI Design', 'Design System', 'User Scenario Mapping', 'Scrum'],
            },
        ],
    },
    {
        id: 'cbr-problem&research',
        steps: [
            {
                title: 'Discovering the Real Roadblocks (pun intended)',
                text: (
                    <>
                        <p><em className='underline'>The Challenge:</em> Teenagers are struggling to pass the CBR driving exams on their first try, resulting in long waiting times and less prepared drivers on the road.</p>
                        <p className="mt-4"><em className='underline'>Key Research Insights:</em></p>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li>Expert interviews with driving instructors</li>
                            <li>User interviews with recent exam takers</li>
                            <li>Competitive analysis of existing practice tools</li>
                        </ul>
                        <p className="mt-4"><em className='underline'>The Root Cause:</em> Discovered the primary culprit wasn't the lack of intelligence, but severe test anxiety and a lack of consistent practice.</p>
                        <p className="mt-4"><em className='underline'>Market Gap:</em> Competitors (like Theorie Toppers) offer good practice tools but lack the personalized, confidence-building touch needed to combat student stress.</p>
                    </>
                ),
                media: (
                    <div className="flex h-full items-center justify-center">
                        <img
                            src={competAnalysis}
                            alt="CBR Learners preview"
                            className="max-h-full w-full object-contain"
                        />
                    </div>
                ),
            },
        ],
    },
    {
        id: 'cbr-ideation&strategy',
        steps: [
            {
                title: 'Ideation & Prioritization',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='underline'>Brainstorming:</em> The team and I utilized the Lotus Blossom diagram to generate features focused on reducing anxiety and motivating users (e.g., gamification, bite-sized daily lessons).</li>
                            <li><em className='underline'>Adapting to Feedback:</em> We initially used a MoSCoW table to prioritize features. However, after constructive stakeholder feedback, we pivoted to an Eisenhower Matrix. This helped us effectively zero in on high-impact, feasible features.</li>
                        </ul>
                    </>
                ),
                media: createElement(AboutGallery, {
                    images: [
                        { src: lotusBlossom },
                        { src: eisenhowerMatrix },
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                })
            },
        ],
    },
    {
        id: 'cbr-wireframing&iteration',
        steps: [
            {
                title: 'From Sketches to High-Fidelity',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='underline'>Early concepts:</em> Each team member started with rapid lo-fi sketches, focusing heavily on layout and intuitive navigation for the gamified learning path.</li>
                            <li><em className='underline'>Continuous Iteration:</em> I took ownership of the gamified path, daily lessons, and quiz screens.</li>
                            <li><em className='underline'>User-Centric Refinements:</em> Through continuous peer feedback, we iterated heavily on cognitive load. We adjusted color palettes to be more calming, improved the flow of the roadmap, and repositioned quiz buttons to make the experience frictionless.</li>
                        </ul>
                    </>
                ),
                media: createElement(AboutGallery, {
                    images: [
                        { src: sketch1 },
                        { src: sketch2 },
                        { src: midfi1 },
                        { src: midfi2 },
                        { src: midfi3 },
                        { src: midfi4 },
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                })
            },
        ],
    },
    {
        id: 'cbr-final-solution',
        steps: [
            {
                title: 'The Final Prototype',
                text: 'An interactive learning platform that uses a gamified path to encourage consistent, daily study habits while implementing a calming UI to minimize exam anxiety.',
                media: (
                    <img
                        src={cbrHifi}
                        alt="CBR Learners preview"
                        className="max-h-full w-full object-contain"
                    />
                )
            },
        ],
    },
]

export default cbrSections