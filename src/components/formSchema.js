import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: 
    yup.string().required("Must put Username"),
  
    email: 
    yup.string().email().required("Email is required"),
  
    password: 
    yup.string().required("Password is required")
  })

  export default formSchema