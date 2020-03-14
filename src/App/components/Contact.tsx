import React from 'react'

import {Header, Text, PageWrapper } from 'shared'

const Contact = () => {
    return <PageWrapper>
        <Header size="large">Contact</Header>
        <Text>
            You can connect on Twitter <a href="https://twitter.com/travis_the_makr">here</a> or fill out the form below.
        </Text>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdhpE6i0LVbYtnCzf06OttT1_lsqeYqZ88fGG3IF9cbEcFV7w/viewform?embedded=true"
            width="640"
            height="706"
            frameborder="0"
            marginheight="0"
            marginwidth="0">Loading…
        </iframe>
    </PageWrapper>
}

export default Contact