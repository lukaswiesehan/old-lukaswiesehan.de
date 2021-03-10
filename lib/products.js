import {products} from '../content/products/products'

export function getSortedProducts() {
  return products.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else {
      return -1
    }
  })
}