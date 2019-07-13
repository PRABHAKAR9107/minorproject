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
    Embed

} from 'semantic-ui-react'
import Fetch from '../helpers/Fetch'
import { Link } from 'react-router-dom'
import pretty from 'pretty';

import logo from '../473a486.svg'

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.parseHTML = this.parseHTML.bind(this);
        this.isParseError = this.isParseError.bind(this);
        this.getSrc = this.getSrc.bind(this);
    }
    componentDidMount() {
        const parsedJson = Fetch(this.props.location.state.url)
        parsedJson.then(value => {
            this.setState({
                data: value
            })
        })
    }

    isParseError(parsedDocument) {
        // parser and parsererrorNS could be cached on startup for efficiency.
        var parser = new DOMParser(),
            errorneousParse = parser.parseFromString('<', 'text/xml'),
            parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

        if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
            return parsedDocument.getElementsByTagName("parsererror").length > 0;
        }

        return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    };

    parseHTML(value) {
        let p;
        let htmlString = pretty(value);
        let doc = new DOMParser().parseFromString(htmlString, "text/html");
        if (this.isParseError(doc)) {
            console.log('parsing error')
            p = doc.firstChild.children[1]
            return p.innerHTML;
        }
        p = doc.firstChild;
        return p.textContent;
    }

    getSrc(embed) {
        var str = embed;
        var regex = /<iframe.*?src='(.*?)'/g;
        var src = regex.exec(str)[1];
        return src;
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
                                    <p className='excerpt-title'>
                                        {this.parseHTML(this.state.data.content[1].text)}
                                    </p>
                                )
                                    : null}
                                {this.state.data.content ? (
                                    <p className='para-layout'>
                                        {this.parseHTML(this.state.data.content[0].text)}
                                    </p>
                                )
                                    : null}

                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                {this.state.data.content ? (
                                    <div>
                                        <Embed placeholder={this.state.data.thumbnail.url} className='embed-video' url={() => this.getSrc(this.state.data.content[2].text)} autoplay={true}></Embed>
                                    </div>
                                )
                                    : null}
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
                                        <List.Item as='a'>Pre-Book Hotel</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Search</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Link to='/'>
                                        <Image src={logo} size='tiny' className='triv-logo-footer'></Image>
                                    </Link>
                                    <p>
                                        Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation.
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