import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, Text, PageWrapper, Section } from 'shared'

const AllTheInfo = () => {
    return (
        <PageWrapper>
            <Section>
                <Header size="large">All The Info</Header>
                <Text>This page is a work in progress. </Text>
            </Section>
            <Section>
                <Header size="large">Rules</Header>
                <Text>To be discussed.</Text>
            </Section>
            <Section>
                <Header size="large">Team Formation</Header>
                <Text>To be discussed.</Text>
            </Section>
            <Section>
                <Header size="large">Judging Criteria</Header>
                <Text>To be discussed.</Text>
            </Section>
        </PageWrapper>
    )
}

export default AllTheInfo