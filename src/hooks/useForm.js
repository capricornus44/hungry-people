import { useState } from "react"

const initialState = {
  username: "",
  email: "",
  phone: "",
  people: "",
  date: "",
  time: "",
}

const useForm = (validate) => {
  const [values, setValues] = useState(initialState)

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(values))
  }

  return { values, errors, handleChange, handleSubmit }
}

export default useForm
