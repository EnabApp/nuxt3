export default [
  { hook: "post:login", endpoint: "auth/login" },
  { hook: "post:register", endpoint: "auth/register" },
  { hook: "get:business", endpoint: "core/business" },
  { hook: "post:business", endpoint: "core/business", data: [{ name: "string" }, { user_id: "string" }, { category_id: "string" }, { address: "string" }] },
  { hook: "get:space", endpoint: "core/space" },
  { hook: "post:space", endpoint: "core/space", data: [{ name: "string" }, { business_id: "string" }, { description: "string" }] },
  { hook: "get:board", endpoint: "core/board" },

  {
    hook: "get:space-business",
    endpoint: "core/space/by-business",
    data: [{ name: "business_id",type: "string" }],
  },
];
