import UrlPattern from "url-pattern";
import decode from "jwt-decode";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/core/business"];

  const isHandledByMiddleware = endpoints.some((endopoint) => {
    const pattern = new UrlPattern(endopoint);

    return pattern.match(event.req.url);
  });

  if (!isHandledByMiddleware) {
    return;
  }

  const token = event.req.headers["authorization"]?.split(" ")[1];

  const decoded = decode(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }
});
