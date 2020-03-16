import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, Text, PageWrapper, Section } from 'shared'


const Home = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">Hey!</Header>
                <Text>This site is rapidly developing. Check back Often or join us on <a target="_blank" href="https://join.slack.com/t/lets-pair-online/shared_invite/zt-cmfomldv-F6mtvfedSVtYwlKusjIRaw">Slack</a> to keep up to date!</Text>
            </Section>
            <Section>
                <Header size="large">Motivation</Header>
                <Text>There's a lot going on in the world right now and many of us are facing challenges we've never experienced before. Employees and students are going completely remote. Social events are being canceled. Medical centers are being overwhelmed. These events are the motivation for Let's Pair Online. Many of us find ourselves stranded in our homes with diverse skill sets, hoping to help, but unsure of how to do so.</Text>
            </Section>
            <Section>
                <Header size="large">Tracks</Header>
                <Text>There will be several tracks that participants can join.</Text>

                <Header size="medium">Track 1: Remote Responsibilities</Header>
                <Text>Build tools to help those that find themselves working, studying, and living remotely full time.</Text>

                <Header size="medium"> Track 2: Digital Diversion</Header>
                <Text>Create games and other activities to avoid going stir-crazy.</Text>

                <Header size="medium"> Track 3: Mental Management</Header>
                <Text>How do we deal with the mental burden of what's going on?</Text>

                <Header size="medium"> Track 4: Alternate Adventure</Header>
                <Text>Tackle an issue not addressed in the above tracks.</Text>
            </Section>
            <Section>
                <Header size="large">What this Hackathon Isn't</Header>
                <Text>There are many professionals across the world focused on everything from medical aid to supply chain management. There are also other hackathons doing this as well. Perform a search for "COVID hackathon" and look at all the results. This hackathon is not focused on those issues. As noted by the tracks above, it's about how we maintain daily routines with ourselves and our communities throughout this time.</Text>
            </Section>
            <Section>
                <Header size="large">Schedule</Header>
                <Text>Tentatively March 27th, 2020 to March 29th, 2020.</Text>
            </Section>
            <Section>
                <Header size="large">Location</Header>
                <Text>Remotely distributed throughout the world.</Text>
            </Section>
            <Section>
                <Header size="large">Don't see an answer your question?</Header>
                <Text><Link to="/sponsor">Click here to submit a question.</Link></Text>
            </Section>
        </PageWrapper>
    )
}

export default Home