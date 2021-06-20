import React from "react"
import Loader from "react-loader-spinner"

import { SpinnerWrapper } from "./SpinnerElements"

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader type="Circles" color="#ffd600" height={100} width={100} timeout={3000} />
    </SpinnerWrapper>
  )
}

export default Spinner
