import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const questions = [
    {
        id: 1,
        title: 'Is this is the only sources I need to master coding ?',
        description:
            'Yes this is the only website which provides all the resources you need to refer and practice for your job/coding interviews.',
    },
    {
        id: 2,
        title: 'Is this is the only sources I need to master coding ?',
        description:
            'Yes this is the only website which provides all the resources you need to refer and practice for your job/coding interviews.',
    },
    {
        id: 3,
        title: 'Is this is the only sources I need to master coding ?',
        description:
            'Yes this is the only website which provides all the resources you need to refer and practice for your job/coding interviews.',
    },
]

const Faq = () => {
    return (
        <>
            <Accordion className='w-full' allowMultiple>
                {questions.map((question) => (
                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left font-bold text-navy-900 dark:text-white' flex='1' textAlign='left'>
                                    {question.title}
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
                            {question.description}
                        </AccordionPanel>
                    </AccordionItem>
                ))}

                {" "}
            </Accordion>
            <br />
            <br />
        </>
    )
}

export default Faq