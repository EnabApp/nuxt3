import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { email, password, name } = await useBody(event);
  const { register } = useAuth();

  if (!email || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  try {
    const user = await register({
      email: email,
      password: password,
      name: name,
    });
    return { user };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid credentials",
      })
    );
  }
});
