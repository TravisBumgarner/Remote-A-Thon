import React from 'react'
import styled from 'styled-components'

import {Header, Text} from 'shared'

const questions = [
    {
        question: "Foo",
        answer:  "Bar."
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
        <div>
            <Header size="large">Frequently Asked Questions</Header>
            {Questions}
        </div>
    )
}

export default Questions