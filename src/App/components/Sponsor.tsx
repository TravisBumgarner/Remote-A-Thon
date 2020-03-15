import React from 'react'
import styled from 'styled-components'

import { Header, Text, PageWrapper, Section, List, GoogleForm } from 'shared'


const Sponsor = () => {
    return <PageWrapper>
        <Section>
            <Header size="large">What we're looking for</Header>
            <List>
                <List.Item>Participant Prizes</List.Item>
                <List.Item>Guest Speakers</List.Item>
                <List.Item>Anything else you're willing to contribute</List.Item>
            </List>
        </Section>
        <Section>
            <Header size="large">Sponsor Us</Header>
            <Text>Interested in contributing? Please fill out this form and we'll be in touch.</Text>
            <GoogleForm height="920" src="https://docs.google.com/forms/d/e/1FAIpQLSeLGcm64SiTzglGdOKrddgjqUwTZ0liFkM4UMhq7B93LPVzeQ/viewform?embedded=true">Loading…</GoogleForm>
        </Section>
    </PageWrapper>
}

export default Sponsor