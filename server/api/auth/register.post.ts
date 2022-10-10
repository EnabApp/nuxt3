import { sendError } from "h3";
import useAuth from "../../../composables/server/useAuth";

export default defineEventHandler(async (event) => {
  const { email, password, name, phonenumber } = await useBody(event);
  const { register } = useAuth();

  if (!email || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Ivalid params",
      })
    );
  }

  try {
    const user = await register({
      email: email,
      password: password,
      name: name,
      phonenumber: phonenumber,
    });
    return user;
  } catch (err) {
    console.log(err);
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid credentials",
      })
    );
  }
});
