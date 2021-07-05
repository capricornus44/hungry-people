import { useState } from "react"

const initialState = {
  username: "",
  email: "",
  phone: "",
  people: "",
  date: "",
  time: "",
  message: "",
}

const useForm = (validate) => {
  const [values, setValues] = useState(initialState)

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate(values)
    setErrors(errors)
    setIsSubmitted(!Object.keys(errors).length)
    setValues(initialState)
  }

  return { values, errors, isSubmitted, setIsSubmitted, handleChange, handleSubmit }
}

export default useForm
