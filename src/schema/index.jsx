import * as Yup from 'yup';


export const signupForm = Yup.object({
    email: Yup.string().email().required("Enter a valid email")
})