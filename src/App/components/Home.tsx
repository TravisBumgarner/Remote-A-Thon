import React from 'react'
import styled from 'styled-components'

import { Header, Text, PageWrapper, Section } from 'shared'


const Home = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">Why?</Header>
                <Text>There's a lot going on in the world right now and many of us are facing challenges we've never experienced before. Employees and students are going completely remote. Social events are being canceled. Medical centers are being overwhelmed. These events are the motivation for Let's Pair Online. Many of us find ourselves stranded in our homes with diverse skill sets, hoping to help, but unsure of how to do so.</Text>
            </Section>
            <Section>
                <Header size="large">When?</Header>
                <Text>Tentatively March 27th, 2020 to March 29th, 2020.</Text>
            </Section>
            <Section>
                <Header size="large">Where?</Header>
                <Text>Remotely distributed throughout the world.</Text>
            </Section>
            <Section>
                <Header size="large">What are the Tracks?</Header>
                <Text>There will be several tracks that participants can join.</Text>

                <Header size="medium">Track 1: Remote Responsibilities</Header>
                <Text>Build tools to help those that find themselves working and studying remotely full time.</Text>

                <Header size="medium"> Track 2: Digital Diversion</Header>
                <Text>Create games and other activities to avoid going stir-crazy.</Text>

                <Header size="medium"> Track 3: Choose Your Own Adventure</Header>
                <Text>Tackle an issue not addressed in the above tracks.</Text>
            </Section>
            <Section>
                <Header size="large">What is the Format?</Header>
                <Text>TDB</Text>
            </Section>
            <Section>

            </Section>
        </PageWrapper>
    )
}

export default Home