import React from 'react'
import Card from 'react-bootstrap/Card';


function CardComponent({ title, description }) {
    return (
        <>
            {['Light'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '50rem' }}
                    className="mb-2"
                >
                    <Card.Header><strong>{title}</strong></Card.Header>
                    <Card.Body>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            ))
            }
        </>
    )
}

export default CardComponent;