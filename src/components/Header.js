import PropTypes from 'prop-types'
import React from 'react'
import {
    Button,
    Container,
    Header,
    Icon,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            className={mobile ? 'mobile-heading-home-h1' : 'desktop-heading-home-h1'}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            className={mobile ? 'mobile-heading-home-h2' : 'desktop-heading-home-h2'}
        />
        <Button primary size='huge'>
            Get Started
        <Icon name='right arrow' />
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

export default HomepageHeading