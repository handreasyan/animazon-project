import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const CREATE_ANIMAL_MUTATION = gql`
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

const Form = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('cats')
  const [error, setError] = useState('')

  const [addAnimal] = useMutation(CREATE_ANIMAL_MUTATION)

  const onSave = () => {
    if (!image || !category || !title || !stock || !price || !description) {
      setError('Please fill all fields')
      return
    }

    addAnimal({
      variables: {
        image,
        category,
        title,
        stock: Number(stock),
        price,
        description: [description],
        rating: 3.5,
        slug: category,
      },
    })

    setError('Animal Created')
  }

  return (
    <div className="py-5">
      <Container>
        <div>
          {error && <div className="alert alert-danger">{error}</div>}

          <h3>Select Category</h3>
          <select
            className="mb-4"
            name="category"
            onChange={(evt) => setCategory(evt.target.value)}
          >
            <option value="cats">Cats</option>
            <option value="reptiles">Reptiles</option>
            <option value="ocean-creatures">Ocean Creatures</option>
            <option value="mammals">Mammals</option>
          </select>

          <br />

          <div className="d-flex mt-4 justify-content-between">
            <h3>
              Set Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                value={title}
                placeholder="Really cool ostrich"
                onChange={(evt) => setTitle(evt.target.value)}
              />
            </h3>

            <h3>
              Set Image URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                value={image}
                placeholder="ostrich"
                onChange={(evt) => setImage(evt.target.value)}
              />
            </h3>
          </div>

          <br />

          <br />

          <div className="d-flex mt-4 justify-content-between">
            <h3>
              Set stock &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                value={stock}
                placeholder="1365"
                onChange={(evt) => setStock(evt.target.value)}
              />
            </h3>

            <h3>
              Set price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                value={price}
                placeholder="33.65"
                onChange={(evt) => setPrice(evt.target.value)}
              />
            </h3>
          </div>

          <h3 className="mt-4">Add description</h3>
          <textarea
            cols="100"
            rows="10"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />

          <button className="submit-data-btn" onClick={onSave}>
            Submit
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Form
