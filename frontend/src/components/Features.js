import React from 'react'
import { ChatBubbleBottomCenterIcon, HandRaisedIcon, CubeTransparentIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Improve your skills up to date',
        description:
            'Due to advent of AI the skills can be achieved in no time, digitization of services and the economy can help in getting knowledge from foriegn sources as well.',
        icon: CalendarDaysIcon,
    },
    {
        name: 'Keep your fundamentals strong',
        description:
            'The base need to be as strong as any other skills, in order to get a good job, fundamentals should be strong.',
        icon: CubeTransparentIcon,
    },
    {
        name: 'Make helpful connections',
        description:
            'Connections and taking help from the experienced people is the best decision you can ever do.',
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        name: 'Improve your social profile',
        description:
            'Social Media platforms such as LinkedIn, Twitter, Medium, etc you can make a brand of yourself.',
        icon: HandRaisedIcon,
    },
]


const Features = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to get your dream job
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Market needs skills that can do work in the market in a more productive way and can keep up to the pace of the industry requirements. <br /> <br />
                        Steps needed to be taken as a job seeker
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features
