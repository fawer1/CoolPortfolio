import { createElement } from "react";
import AboutGallery from '../components/AboutGallery';
import type { Section } from './sections'

export const equineSections: Section[] = [
    {
        id: 'equine-overview',
        steps: [
            {
                title: 'EI Potential web dashboard: A Centralized Dashboard',
                text: 'My project with Equine Integration (EI) involved designing a centralized web dashboard that consolidated data from multiple separate tracking applications (such as EI Potential, Sleip, and Feedwise). The goal was to create a unified platform that would allow equine professionals to access and analyze data related to horse well-being, while also providing a more user-friendly and intuitive interface.',
                media: createElement(AboutGallery, {
                    images: [
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                }),
                skillsTitle: 'Core Skills',
                skills: ['UX research', 'UI design', 'Figma', 'User Testing', 'Interactive Prototyping', 'Data Visualization', 'Information Architecture', 'Widget-based UI Systems',],
            },
        ],
    },
    {
        id: 'Unifying Fragmented Data for Equine Professionals',
        steps: [
            {
                title: 'From Web to Native: End-to-End App Development',
                text: (
                    <>
                        <p><em className='text-white'>The Challenge:</em> Equine Integration relied on multiple separate tracking applications (such as EI Potential, Sleip, and Feedwise), which resulted in fragmented data and miscommunication among professionals.</p>
                        <p className="mt-4"><em className='text-white'>The Goal:</em> We needed to design a centralized dashboard that consolidated this data around five core well-being pillars: training, nutrition, biomechanics, environment, and behavior.</p>
                        <p className="mt-4"><em className='text-white'>Target Audience:</em> The platform needed to serve multiple user types, including horse owners, trainers, riders, veterinarians, and administrators, while accommodating hybrid roles with overlapping responsibilities.</p>
                        <p className="mt-4"><em className='text-white'>My Role:</em> I was a UX and UI designer throughout the project, as well as the main and primary contact person managing stakeholder and cross-team communication.</p>
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
        id: 'Research & Key Insights',
        steps: [
            {
                title: 'Understanding the Users & The Market',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Methodology:</em> We utilized an iterative Design Thinking approach, allowing us to move flexibly between empathizing with users and defining the problem as new insights emerged.</li>
                            <li><em className='text-white'>Research Execution:</em> We conducted client briefings, interviewed trainers and vet assistants, and performed literature studies on pet monitoring apps and role-based dashboards.</li>
                            <li><em className='text-white'>Key Insight 1 - Context is Key:</em> Fragmented tools eliminated historical context, making it difficult for professionals to answer vital questions like, “How long has this health issue been going on?”.</li>
                            <li><em className='text-white'>Key Insight 2 - Technical Hesitation:</em> A large portion of the target audience consisted of older professionals with low technical literacy. This dictated a need for simple language, minimal UI complexity, and high-level summaries over dense data tables.</li>
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
        id: 'Ideation & Strategic Pivots',
        steps: [
            {
                title: 'Prioritization & Validating Assumptions',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Scoping the Product:</em> I utilized a MoSCoW table to prioritize dashboard features, categorizing elements like the five pillars and color-coded status indicators as absolute must-haves for the primary rider/trainer roles.</li>
                            <li><em className='text-white'>Managing Scope:</em> This strict prioritization prevented feature creep and ensured the interface remained approachable for our technically hesitant users.</li>
                            <li><em className='text-white'>Pivoting to Desktop:</em> While early user interviews suggested a mobile approach, subsequent stakeholder validation and expert feedback confirmed the necessity of a flexible, widget-based desktop dashboard.</li>
                            <li><em className='text-white'>Failing Fast:</em> Initial creative concepts, such as a 3D diorama stable, were tested but ultimately scrapped after client feedback confirmed the need for a strictly professional data visualization tool.</li>
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
        id: 'Prototyping & Developer Handoff',
        steps: [
            {
                title: 'Iteration, Testing, & Delivery',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Prototyping:</em> I translated our accumulated insights into a hi-fi, interactive Figma prototype featuring a modular, widget-based system tailored to individual user needs.</li>
                            <li><em className='text-white'>Usability Testing:</em> Testing the clickable prototype revealed interaction-level friction regarding widget placement and visual hierarchy, allowing us to implement evidence-based layout improvements.</li>
                            <li><em className='text-white'>Stakeholder Alignment:</em> I facilitated multiple verification sessions with the client and external software experts (EquineM) to ensure the prototype met strict industry standards.</li>
                            <li><em className='text-white'>Developer Handoff:</em> To ensure technical continuity, I bundled the interactive designs and produced a comprehensive Advice Report containing actionable implementation guidance for future front-end developers.</li>
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

export default equineSections