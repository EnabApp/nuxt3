import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { email, password } = await useBody(event);
  const { login } = useAuth();

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
    const data = await login({ email, password });
    return { data };
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
