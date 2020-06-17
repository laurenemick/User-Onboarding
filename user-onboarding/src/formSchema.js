import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .min(1, "Must include name."),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is Required"),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
  })
  
  export default formSchema
  