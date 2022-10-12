export default [
  { hook: "post:login", endpoint: "auth/login" },
  { hook: "post:register", endpoint: "auth/register" },
  { hook: "get:business", endpoint: "core/business" },
  { hook: "post:business", endpoint: "core/business", data: [{ name: "name",type: "string" }, { name: "user_id",type: "string" }, { name: "category_id", type: "string" }, { name: "description", type: "string" }]},
  { hook: "get:space", endpoint: "core/space" },
  { hook: "post:space", endpoint: "core/space", data: [{ name: "name",type: "string" }, { name: "business_id",type: "string" }, { name: "category_id", type: "string" }]},
  { hook: "get:board", endpoint: "core/board" },

  {
    hook: "get:space-business",
    endpoint: "core/space/by-business",
    data: [{ name: "business_id",type: "string" }],
  },
];
