import React from 'react'
import styled from 'styled-components'

import { Header, Text, PageWrapper, Section } from 'shared'


const Home = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">Details</Header>

                <Header size="medium">Why?</Header>
                <Text>There's a lot going on in the world right now and many of us are facing challeneges we've never experienced before. Employees and students are going completely remote. Social events are being canceled. Medical centers are being overwhelmed. These events are the motivation for Let's Pair Online. Many of us find ourselves stranded in our homes with diverse skillsets, hoping to help, but unsure of how to do so.</Text>

                <Header size="medium">When?</Header>
                <Text>Tentatively March 27th, 2020 to March 29th, 2020.</Text>

                <Header size="medium">Where?</Header>
                <Text>Remotely distributed throughout the world.</Text>
            </Section>
            <Section>
                <Header size="large">Tracks</Header>

                <Header size="medium">Assist Those in Need</Header>
                <Text>Description TBD</Text>

                <Header size="medium">Remote Work</Header>
                <Text>Description TBD</Text>

                <Header size="medium">COVID-19</Header>
                <Text>Description TBD</Text>

                <Header size="medium">Choose Your Own Adventure</Header>
                <Text>Description TBD</Text>
            </Section>
        </PageWrapper>
    )
}

export default Home