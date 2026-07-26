import { createElement } from "react";
import AboutGallery from '../components/AboutGallery';
import type { Section } from './sections'

export const sakuraSections: Section[] = [
    {
        id: 'Overview & Brand Identity',
        steps: [
            {
                title: 'Branding Project: Sakura Creative',
                text: `As a branding project, I developed a comprehensive brand identity for Sakura Creative, a fictional creative agency. The project encompassed logo design, color palette selection, typography, and visual style guidelines. The goal was to create a cohesive and visually appealing brand that reflects the agency's values and mission.`,
                media: createElement(AboutGallery, {
                    images: [
                    ],
                    slideObjectFit: 'contain',
                    useMasks: false,
                    useFilters: false,
                }),
                skillsTitle: 'Core Skills',
                skills: ['Figma', 'Scrum', 'Branding', 'Logo Design', 'Typography', 'Color Theory', 'Visual Identity', 'Team Collaboration'],
            },
        ],
    },
    {
        id: 'Overview & The Challenge',
        steps: [
            {
                title: 'Building a Brand from the Ground Up',
                text: (
                    <>
                        <p><em className='text-white'>The Challenge:</em> To conceptualize, design, and develop a complete, cohesive brand identity and style guide from scratch.</p>
                        <p className="mt-4"><em className='text-white'>The Concept:</em> My team and I created "Sakura Creative," a brand symbolizing a fresh start anchored by a cherry blossom motif.</p>
                        <p className="mt-4"><em className='text-white'>Visual Philosophy:</em> The brand was designed to be a visual escape from daily chaos—evoking harmony and mindfulness through clean, minimalistic, and modern Japanese aesthetics.</p>
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
        id: 'Visual Research & Ideation',
        steps: [
            {
                title: 'Researching the Aesthetic',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Agile Workflow:</em> The team managed our design process using the Scrum methodology, operating in a rapid two-week sprint (the project was supposed to be completed in 14 days, to then apply to companies for the longer project throughout the semester).</li>
                            <li><em className='text-white'>Market Research:</em> I conducted deep-dive research into Japanese culture, analyzing their architecture, music, and digital interfaces</li>
                            <li><em className='text-white'>Key Insight:</em> I discovered that many native Japanese websites suffer from complex, cluttered navigation. To maintain our brand's "relaxing" goal, I pivoted our visual inspiration strictly toward the minimalist principles found in traditional Japanese architecture.</li>
                            <li><em className='text-white'>Rapid Sketching:</em> The logo and layouts began as rough pencil sketches, allowing the team to iterate quickly before committing to digital vectors.</li>
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
        id: 'Developing the Brand Book',
        steps: [
            {
                title: 'Structuring the Style Guide',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Execution:</em> I co-designed the comprehensive brand style guide, taking direct ownership of the layouts for title pages, color palettes, typography, and logo usage guidelines.</li>
                            <li><em className='text-white'>Wireframing Layouts:</em> After curating mood boards from Dribbble and Behance, I hand-drew structural wireframes for the book's pages to establish a cohesive grid before digitizing.</li>
                            <li><em className='text-white'>Design Synergy:</em> I worked closely with a co-designer, constantly communicating and exchanging feedback to ensure our individually designed pages merged into one seamless, professional product.</li>

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
    {
        id: 'Iteration & Stakeholder Defense',
        steps: [
            {
                title: 'Refining Through Feedback',
                text: (
                    <>
                        <ul className="mt-2 list-disc pl-6 space-y-4">
                            <li><em className='text-white'>Defending Design Decisions:</em> When experts challenged our minimalist approach and literal logo interpretation, I successfully defended our choices by tying every visual element back to our core brand identity and target audience.</li>
                            <li><em className='text-white'>Iterating for Contrast:</em> Based on peer feedback, we introduced a striking dark purple/pink palette exclusively for the title pages, creating a beautiful visual break from the otherwise minimalist book.</li>
                            <li><em className='text-white'>Improving Accessibility:</em> A mentor pointed out that our target audience might not understand the decorative Kanji. We iterated on the design to include English translations alongside the Japanese characters, ensuring the brand message was universally understood.</li>
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

export default sakuraSections