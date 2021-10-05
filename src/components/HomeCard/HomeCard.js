import React from 'react';
import { Card, Col,  Button } from 'react-bootstrap';

const HomeCard = (props) => {

    const {name, img, title, description, price} = props.course
    
    return (
        
        
            <Col>
                <Card className='card h-100'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h2>{name}</h2>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div>
                    <p>Course fee {price} BDT</p> <Button variant='warning'>Buy now</Button>
                    </div>
                    </Card.Body>
                </Card>
            </Col>

    );
};

export default HomeCard;