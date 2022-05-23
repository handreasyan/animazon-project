import React from 'react'
import MainHero from '../components/MainHero/MainHero'
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import { gql, useQuery, useMutation } from '@apollo/client'

const ANIMALS_QUERY = gql`
  {
    animals {
      id
      title
      image
      price
      slug
    }
  }
`

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $stock: Int!
    $price: String!
    $description: [String!]!
    $rating: Float
    $slug: String!
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      stock: $stock
      price: $price
      description: $description
      rating: $rating
      slug: $slug
    ) {
      id
    }
  }
`

function LandingPage() {
  const { data, error, loading } = useQuery(ANIMALS_QUERY)
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION)

  if (loading) return <div>Loading ....</div>
  if (error) return <div>Something went wrong</div>

  const handleAddAnimal = () => {
    addAnimal({
      variables: {
        image: 'ostrich',
        category: '1',
        title: 'Really cool ostrich',
        stock: 13,
        price: '33.333',
        description: ['Ostrich description first line', 'And second line'],
        rating: 3.5,
        slug: 'ostrich',
      },
    })
  }

  return (
    <div>
      <MainHero />
      <button onClick={handleAddAnimal}>Add an Ostrich</button>
      <CategoryDisplay />
      <CardDisplay animals={data?.animals} />
    </div>
  )
}

export default LandingPage
