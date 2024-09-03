import Yup from "./yup"

export const emailSchema = Yup.object().shape({

  user_name: Yup.string().required(),
  user_surname: Yup.string().required(),
  user_email: Yup.string().required().email(),
  message: Yup.string().required().min(10)

})