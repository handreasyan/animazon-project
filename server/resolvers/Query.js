const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  categories: (parent, args, { categories }) => categories,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    return animals.find(({ slug }) => slug === args.slug)
  },
  category: (parent, args, { categories }) => {
    return categories.find(({ slug }) => slug === args.slug)
  },
}

module.exports = Query
