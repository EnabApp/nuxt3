import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { login } = useAuth();

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
