import React from 'react'
import MainHero from '../components/MainHero/MainHero'
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import { gql, useQuery } from '@apollo/client'

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

function LandingPage() {
  const { data, error, loading } = useQuery(ANIMALS_QUERY)

  if (loading) return <div>Loading ....</div>
  if (error) return <div>Something went wrong</div>

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data?.animals} />
    </div>
  )
}

export default LandingPage
