import { nanoid } from "nanoid"

import chef from "../assets/images/team/chef.jpg"
import sousChef from "../assets/images/team/sous-chef.jpg"
import pastryChef from "../assets/images/team/pastry-chef.jpg"

const teamDB = [
  {
    id: nanoid(),
    image: chef,
    rank: "Master chef",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
  {
    id: nanoid(),
    image: sousChef,
    rank: "Sous chef",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
  {
    id: nanoid(),
    image: pastryChef,
    rank: "Pastry chef",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
    text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.",
  },
]

export default teamDB
