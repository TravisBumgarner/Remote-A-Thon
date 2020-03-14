import React from 'react'
import styled from 'styled-components'

import {Header, Text, PageWrapper} from 'shared'

const detailsQuestions = [
    {
        question: "Why",
        answer:  "There's a lot going on in the world right now and many of us are facing challeneges we've never experienced before. Employees and students are going completely remote. Social events are being canceled. Medical centers are being overwhelmed. These events are the motivation for this remote-a-thon. Many of us find ourselves with stranded in our homes with diverse skillsets, hoping to help, but unsure of how to do so."
    },
    {  
        question: "When?",
        answer: "Tentatively March 27th, 2020 to March 29th, 2020."
    },
    {
        question: "Where?",
        answer: "Remotely distributed throughout the world."
    }
]

const Home = () => {
    const Details = detailsQuestions.map(({ question, answer }, index) => (
        <div key={index}>
            <Header size="medium">{question}</Header>
            <Text>{answer}</Text>
        </div>
    ))

    return (
        <PageWrapper>
            <Header size="large">Details</Header>
            {Questions}
        </PageWrapper>
    )
}

export default Home