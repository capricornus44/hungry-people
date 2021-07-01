export default function validateInfo(values) {
  let errors = {}

  //Name
  if (!values.username.trim()) {
    errors.username = "Name is required"
  }

  //Email
  if (!values.email) {
    errors.email = "Email is required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  //Phone
  if (!values.phone) {
    errors.phone = "Phone is required"
  }

  //People
  if (!values.people) {
    errors.people = "People is required"
  }

  //Date
  if (!values.date) {
    errors.date = "Date is required"
  }

  //Time
  if (!values.time) {
    errors.time = "Time is required"
  }

  return errors
}
