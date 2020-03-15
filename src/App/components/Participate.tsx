import React from 'react'

import {Header, Text, PageWrapper, GoogleForm, Section} from 'shared'

const Participate = () => {
    return <PageWrapper>
        <Section>       
        <Header size="large">Participate</Header>
        <Text>Fill out this form to stay up to date about hackathon!</Text>
        <GoogleForm
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-ex1AKKpvWi0FQQcwNXu62WNCgP8_yBNy9EvpnRO2vSxvcQ/viewform?embedded=true"
            height="1050"
        >
                Loading…
        </GoogleForm>
        </Section>
   </PageWrapper>
}

export default Participate