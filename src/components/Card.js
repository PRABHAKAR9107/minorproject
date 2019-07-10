import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
const Cards = (props) => (
    <Card fluid className='ui-card'>
        <Image src={props.items.thumbnail.url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.items.card_title}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                {props.items.excerpt}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
      </a>
        </Card.Content>

    </Card>

)

export default Cards;