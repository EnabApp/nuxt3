import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { loginWithGoogle } = useAuth();
  const { setAuthState } = useBody();
  try {
    const data = await loginWithGoogle(setAuthState);
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
