import { createElement } from "react";
import AboutGallery from '../components/AboutGallery';
import type { Section } from './sections'

export const consulinkSections: Section[] = [
    {
        id: 'consulink-overview',
        steps: [
            {
                title: 'Internship project at Consulink B.V.',
                text: 'My first internship project at Consulink B.V. involved designing a native mobile application for the live users of the then existing web platform. The goal was to create a mobile app that would allow users to access the platform on-the-go, while also providing a more user-friendly and intuitive interface.',
                media: createElement(AboutGallery, {
                    images: [
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                }),
                skillsTitle: 'Core Skills',
                skills: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Figma', 'User Research', 'Prototyping', 'Scrum', 'Github', 'API Integration', 'Responsive Design', 'Accessibility', 'Debugging', 'Version Control',],
            },
        ],
    },
    {
        id: 'Overview & The Challenge',
        steps: [
            {
                title: 'From Web to Native: End-to-End App Development',
                text: (
                    <>
                        <p><em className='text-white'>The Challenge:</em> Consulink had an existing web-based solution but needed a dedicated cross-platform native mobile app.</p>
                        <p className="mt-4"><em className='text-white'>My Role:</em> As the sole designer and developer on this initiative, I was responsible for the entire product lifecycle - from initial UX research and wireframing to front-end development and API integration.</p>
                        <p className="mt-4"><em className='text-white'>The Goal:</em> To translate complex web functionalities into an intuitive, user-friendly mobile experience while maintaining a single, efficient codebase.</p>
                    </>
                ),
                media: (
                    <div className="flex h-full items-center justify-center">
                        <img
                            // src={}
                            className="max-h-full w-full object-contain"
                        />
                    </div>
                ),
            },
        ],
    },
    {
        id: 'Technical Research & UX Strategy',
        steps: [
            {
                title: 'Laying the Groundwork',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Technical Strategy:</em> I conducted extensive literature studies comparing cross-platform approaches (React Native vs. Flutter), ultimately choosing React Native and the Expo framework for optimal performance and codebase management.</li>
                            <li><em className='text-white'>Understanding the User:</em> To ensure the mobile transition was seamless, I interviewed stakeholders to identify specific pain points and requirements regarding customer service solutions and conversational AI.</li>
                            <li><em className='text-white'>Scoping the MVP:</em> I synthesized my research into User Journey Maps and a Site Map, utilizing a MoSCoW table to strictly define and prioritize the app's core functionalities.</li>
                        </ul>
                    </>
                ),
                media: createElement(AboutGallery, {
                    images: [
                        // { src:  },
                        // { src:  },
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                })
            },
        ],
    },
    {
        id: 'Agile Design & Iteration',
        steps: [
            {
                title: 'Iterative Prototyping in Figma',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Design Evolution:</em> I designed mid-fidelity and high-fidelity screens in Figma, pushing through four major iterations to ensure the UI met professional standards.</li>
                            <li><em className='text-white'>Testing & Validation:</em> Lacking direct end-users, I adapted by conducting A/B testing and gathering rigorous feedback from internal colleagues and mentors to validate my design choices.</li>
                            <li><em className='text-white'>Pivoting the Workflow:</em> Originally planning to design the entire app before coding, I pivoted to an Agile approach based on mentor feedback. I began designing and developing in smaller, feature-based sprint cycles to align with the company's continuous development environment.</li>
                        </ul>
                    </>
                ),
                media: createElement(AboutGallery, {
                    images: [
                        // { src: sketch1 },
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                })
            },
        ],
    },
    {
        id: 'Front-End Development & Execution',
        steps: [
            {
                title: 'Bringing the App to Life',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Front-End Development:</em> I built the app using React Native, Expo, and TypeScript, ensuring a smooth user experience across devices.</li>
                            <li><em className='text-white'>API Integration:</em> Working alongside the backend team, I successfully integrated the app with Consulink's existing APIs, placing a heavy emphasis on strict error handling for API calls.</li>
                            <li><em className='text-white'>Dynamic Features:</em> I developed the main inbox screen with dynamic conversation fetching, a fully functional chat interface, and data filtering.</li>
                            <li><em className='text-white'>Polishing the UI:</em> I implemented complex UI components and micro-interactions, including a custom BottomSheetModal and smooth conversation delete animations to enhance the native feel.</li>
                            <li><em className='text-white'>Advanced Capabilities:</em> I expanded the app's accessibility and utility by integrating translation features and an authentication portal.</li>
                        </ul>
                    </>
                ),
                media: (
                    <img
                        // src={cbrHifi}
                        className="max-h-full w-full object-contain"
                    />
                )
            },
        ],
    },
]

export default consulinkSections