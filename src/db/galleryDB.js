import { nanoid } from "nanoid"

import pancakes from "../assets/images/gallery/pancakes.jpg"
import tiramisu from "../assets/images/gallery/tiramisu.jpg"
import millefeuille from "../assets/images/gallery/millefeuille.jpg"

const galleryDB = [
  {
    id: nanoid(),
    image: pancakes,
    productName: "Chocolate pancakes",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
  {
    id: nanoid(),
    image: tiramisu,
    productName: "Classic tiramisu",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
  {
    id: nanoid(),
    image: millefeuille,
    productName: "Strawberry millefeuille",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
]

export default galleryDB
