import type { Section } from './sections'
import tryImage from '../assets/tryimage.jpg'

export const cbrSections: Section[] = [
    {
        id: 'cbr-overview',
        steps: [
            {
                title: 'CBR Learners',
                text: 'A focused project page for the CBR Learners app.',
                media: (
                    <img
                        src={tryImage}
                        alt="CBR Learners preview"
                        className="h-full w-full object-cover"
                    />
                ),
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