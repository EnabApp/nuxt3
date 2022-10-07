import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { register } = useAuth();

  const { email, password } = body;

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
    const user = await register({ email: email, password: password });
    console.log();
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
