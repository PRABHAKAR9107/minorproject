import React from 'react'
import ResponsiveContainer from './ResponsiveContainer'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
    GridColumn,

} from 'semantic-ui-react'
import Fetch from '../helpers/Fetch'
import { Link } from 'react-router-dom'
import DesktopContainer from './DesktopNav'

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.parseHTML = this.parseHTML.bind(this);
    }
    componentDidMount() {
        const parsedJson = Fetch(this.props.location.state.url)
        parsedJson.then(value => {
            this.setState({
                data: value
            })
        })
    }

    parseHTML() {
        let htmlString = this.state.data.content[0].text;
        let doc = new DOMParser().parseFromString(htmlString, "text/xml");
        let p = doc.firstChild.children[1];
        return p.innerHTML;
    }

    render() {
        return (
            <ResponsiveContainer res={this.state.data}>
                <Segment className='ui-segment' vertical>
                    <Grid columns={2} doubling stackable>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    {this.state.data.title}
                                </Header>
                                {this.state.data.content ? (
                                    <p className='para-layout'>
                                        {this.parseHTML()}
                                    </p>
                                )
                                    : null}

                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment className='footer-segment' vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column className='grid-column'>
                                <Header as='h3' className='ui-header'>
                                    "What a Company Article"
                </Header>
                                <p className='para-layout'>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column className='grid-column'>
                                <Header as='h3' className='ui-header'>
                                    "I shouldn't have gone with their competitor."
                </Header>
                                <p className='para-layout'>
                                    <Image avatar src='/images/avatar/large/nan.jpg' />
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment className='ui-segment' vertical>
                    <Container text>
                        <Header as='h3' className='ui-header'>
                            Breaking The Grid, Grabs Your Attention
            </Header>
                        <p className='para-layout'>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
            </p>
                        <Button as='a' size='large'>
                            Read More
            </Button>

                        <Divider
                            as='h4'
                            className='header ui-divider'
                            horizontat
                        >
                            <a href='#'>Case Studies</a>
                        </Divider>

                        <Header as='h3' className='ui-header'>
                            Did We Tell You About Our Bananas?
            </Header>
                        <p className='para-layout'>
                            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                            it's really true. It took years of gene splicing and combinatory DNA research, but our
                            bananas can really dance.
            </p>
                        <Button as='a' size='large'>
                            I'm Still Quite Interested
            </Button>
                    </Container>
                </Segment>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>
                                        Footer Header
                  </Header>
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </ResponsiveContainer >

        )
    }
}

export default Article