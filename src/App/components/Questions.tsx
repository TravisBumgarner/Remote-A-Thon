import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {Header, Text, PageWrapper, Section} from 'shared'

const questions = [
    {
        question: "Will there be prizes?",
        answer: "The complete answer is to be determined. Travis Bumgarner will be donating $250 towards the prize pool. Click on the Sponsor link above to contribute!"
    }
]

const Questions = () => {
    const Questions = questions.map(({ question, answer }, index) => (
        <div key={index}>
            <Header size="medium">{question}</Header>
            <Text>{answer}</Text>
        </div>
    ))

    return (
        <PageWrapper>
            <Section>
            <Header size="large">Don't see an answer your question?</Header>
            <Text><Link to="/sponsor">Click here to submit a question.</Link></Text>
            </Section>

            <Section>
            <Header size="large">FAQ</Header>
            {Questions}
            </Section>
        </PageWrapper>
    )
}

export default Questions