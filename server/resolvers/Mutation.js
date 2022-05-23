const addAnimal = (parent, args, { animals }) => {
  const {
    image,
    title,
    rating,
    price,
    description,
    slug,
    stock,
    onSale,
    category,
  } = args

  const animal = {
    id: Date.now(),
    image,
    title,
    rating,
    price,
    description,
    slug,
    stock,
    onSale,
    category,
  }

  animals.push(animal)

  return animal
}

const removeAnimal = (parent, { id }, { animals }) => {
  const index = animals.findIndex((animal) => animal.id === id)
  animals.splice(index, 1)
  return true
}

const updateAnimal = (parent, args, { animals }) => {
  const index = animals.findIndex((animal) => animal.id === args.id)

  animals[index] = {
    id: animals[index].id,
    image: args.image || animals[index].image,
    title: args.title || animals[index].title,
    rating: args.rating || animals[index].rating,
    price: args.price || animals[index].price,
    description: args.description || animals[index].description,
    slug: args.slug || animals[index].slug,
    stock: args.stock || animals[index].stock,
    onSale: args.onSale ?? animals[index].onSale,
    category: args.category || animals[index].category,
  }

  return animals[index]
}

const Mutation = {
  addAnimal,
  removeAnimal,
  updateAnimal,
}

module.exports = Mutation
