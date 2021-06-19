import React from "react"

import GlobalStyles from "./styles/globalStyles"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <GlobalStyles />
    </div>
  )
}

export default App
