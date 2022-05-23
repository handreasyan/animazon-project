import React from 'react'
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import star from '../../assets/svg/star.svg'
import './AnimalPage.css'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const ANIMAL_QUERY = gql`
  query ($slug: String!) {
    animal(slug: $slug) {
      title
      image
      stock
      description
      price
    }
  }
`

function AnimalPage() {
  const { slug } = useParams()
  const { data, error, loading } = useQuery(ANIMAL_QUERY, {
    variables: { slug },
  })

  if (loading) return <div>Loading ....</div>
  if (error) return <div>Something went wrong</div>

  const { title, image, price, description, stock } = data.animal

  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            className="product-img"
            src={animals[image]}
            style={{ marginRight: '1rem' }}
          />
          <div className="text-container">
            <h1>{title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Animal</h4>
              {description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: '2rem' }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AnimalPage
