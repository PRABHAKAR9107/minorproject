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
  Segment, Card,
  Icon,

} from 'semantic-ui-react'
import Fetch from '../helpers/Fetch'
import { Link } from 'react-router-dom';
import logo from '../473a486.svg'

import Cards from './Card'

class HomepageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rating: null
    };
  }

  componentDidMount() {
    const parsedJson = Fetch('http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json')
    parsedJson.then(value => {
      this.setState({
        data: value
      })
    })
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment className='ui-segment' vertical>
          <Grid columns={3} doubling stackable>
            {this.state.data.map((item, i) => (
              <Grid.Column>
                <Link to={{ pathname: `/article/${item.id}`, state: { url: `${item.uri}`, id: `${item.id}` } }}>
                  <Cards items={item} />
                </Link>
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
        {/*<Segment className='footer-segment' vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column className='grid-column'>
                <Header as='h3' className='ui-header'>
                  "What a Company"
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
            */}
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
      </ResponsiveContainer>
    )
  }
}

export default HomepageLayout