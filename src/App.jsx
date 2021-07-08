import React from "react"

import GlobalStyles from "./styles/globalStyles"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <GlobalStyles />
    </div>
  )
}

export default App
