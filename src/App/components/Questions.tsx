import React from 'react'
import styled from 'styled-components'

import {Header, Text, PageWrapper} from 'shared'

const questions = [
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
            <Header size="large">Frequently Asked Questions</Header>
            <Text>No questions yet. Feel free to visit our contact page to send a question.</Text>
            
            {Questions}
        </PageWrapper>
    )
}

export default Questions