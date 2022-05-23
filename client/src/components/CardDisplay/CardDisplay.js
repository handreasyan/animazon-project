import React from 'react'
import Card from '../Card/Card'
import { Container } from 'react-bootstrap'

function CardDisplay({ animals }) {
  if (!animals) return <div>Loading ....</div>

  return (
    <div className="card-display">
      <Container className="card-display-container">
        {animals.map((animal) => {
          return <Card animal={animal} />
        })}
      </Container>
    </div>
  )
}

export default CardDisplay
