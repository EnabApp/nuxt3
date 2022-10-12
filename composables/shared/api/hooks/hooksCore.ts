export default [
  { hook: "post:login", endpoint: "auth/login" },
  { hook: "post:register", endpoint: "auth/register" },
  { hook: "get:business", endpoint: "core/business" },
  { hook: "get:space", endpoint: "core/space" },
  { hook: "get:board", endpoint: "core/board" },
  {
    hook: "get:space-business",
    endpoint: "core/space/by-business",
    data: [{ business_id: "string" }],
  },
];
