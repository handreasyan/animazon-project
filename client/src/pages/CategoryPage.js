import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import { gql, useQuery } from '@apollo/client'

const CATEGORY_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      category
      animals {
        id
        price
        image
        slug
        title
      }
    }
  }
`

function CategoryPage() {
  const { slug } = useParams()
  const { data, loading, error } = useQuery(CATEGORY_QUERY, {
    variables: { slug },
  })

  if (loading) return <div>Loading ....</div>
  if (error) return <div>Something went wrong</div>

  const { animals, category } = data.category

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">{category}</h1>
        <CardDisplay animals={animals} />
      </Container>
    </div>
  )
}

export default CategoryPage
