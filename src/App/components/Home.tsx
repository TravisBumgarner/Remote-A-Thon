import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Text, PageWrapper, Section, List } from 'shared'


const Home = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">Hey!</Header>
                <Text>This site is rapidly developing. Check back Often or join us on <a target="_blank" href="https://join.slack.com/t/lets-pair-online/shared_invite/zt-cmfomldv-F6mtvfedSVtYwlKusjIRaw">Slack</a> to keep up to date!</Text>
            </Section>
            <Section>
                <Header size="large">Motivation</Header>
                <Text>There's a lot going on in the world right now and many of us are facing challenges we've never experienced before. Employees and students are going completely remote. Social events are being canceled. Medical centers are being overwhelmed. These events are the motivation for the Let's Pair Online Hackathon. Many of us find ourselves stranded in our homes with diverse skill sets, hoping to help and but are unsure of how to do so. This event will be a starting point for us to come together and contribute our skills to build a stronger community as we face a "new normal".</Text>
            </Section>
            <Section>
                <Header size="large">Potential Ideas to Hack On</Header>
                <List>
                    <List.Item>
                        A virtual office building where teams in larger companies can have open video call links when they are available for visitors to drop by. Kind of to mimic how people could drop by in real life.
                    </List.Item>
                    <List.Item>
                        Framework for digitizing physical meetups and events.
                    </List.Item>
                    <List.Item>
                        <Text>Don't see your idea above? <Link to="/problem">Submit it here!</Link></Text>
                    </List.Item>
                </List>
            </Section>
            <Section>
                <Header size="large">This isn't a medical hackathon</Header>
                <Text>There are many professionals across the world focused on everything from medical aid to supply chain management. There are also other hackathons doing this as well. Perform a search for "COVID hackathon" and look at all the results. People are doing amazing work. That said - this hackathon is not focused on those issues. As noted by the tracks above, it's about how we maintain daily routines with ourselves and our communities throughout this time.</Text>
            </Section>
            <Section>
                <Header size="large">Schedule</Header>
                <Text>Friday April 3th, 2020 - Sunday April 5th, 2020</Text>
                <Text>Schedule of events coming soon!</Text>
            </Section>
            <Section>
                <Header size="large">Location</Header>
                <Text>Remotely distributed throughout the world.</Text>
            </Section>
            <Section>
                <Header size="large">Interested?</Header>
                <Text><Link to="/participate">Click here to signup!</Link></Text>
            </Section>
            <Section>
                <Header size="large">Don't see an answer your question?</Header>
                <Text><Link to="/sponsor">Click here to submit a question.</Link></Text>
            </Section>
        </PageWrapper>
    )
}

export default Home