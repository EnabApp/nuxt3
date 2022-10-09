import { sendError } from "h3";
import useAuth from "../../../composables/server/useAuth";

export default defineEventHandler(async (event) => {
  const res = await useBody(event);
  const { loginWithGoogle } = useAuth();

  try {
    const data = await loginWithGoogle(res);
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