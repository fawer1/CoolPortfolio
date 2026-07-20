import type { Section } from './sections'
import tryImage from '../assets/tryimage.jpg'

export const cbrSections: Section[] = [
    {
        id: 'cbr-overview',
        steps: [
            {
                title: 'Partout | CBR practice app',
                text: 'Project made in collaboration with Partout, a company that provides CBR practice for students. The app is designed to help students practice CBR questions in a fun and engaging way.',
                media: (
                    <img
                        src={tryImage}
                        alt="CBR Learners preview"
                        className="h-full w-full object-cover"
                    />
                ),
                skillsTitle: 'Core Skills',
                skills: ['Figma', 'UX Research', 'UI Design', 'Design System', 'User Scenario Mapping', 'Scrum'],
            },
        ],
    },
    {
        id: 'cbr-details',
        steps: [
            {
                title: 'Design Notes',
                text: 'This page can now evolve independently from the main portfolio page.',
            },
        ],
    },
]

export default cbrSections