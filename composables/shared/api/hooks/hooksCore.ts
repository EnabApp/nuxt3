export default [
  { hook: "post:login", endpoint: "auth/login" , data: [{ name: "email" }, { name: "password" }]},
  { hook: "post:register", endpoint: "auth/register", data: [{ name: "email" }, { name: "password" }, { name: "name" }]},
  { hook: "get:business", endpoint: "core/business" },
  { hook: "post:business", endpoint: "core/business", data: [{ name: "name" }, { name: "user_id" }, { name: "category_id" }, { name: "description" }]},
  { hook: "get:space", endpoint: "core/space" },
  { hook: "post:space", endpoint: "core/space", data: [{ name: "name" }, { name: "business_id" }, { name: "category_id" }]},
  { hook: "get:space", endpoint: "core/space", data: [{ name: "space_id" }]},
  { hook: "get:space", endpoint: "core/space/by-business", data: [{ name: "business_id" }]},
  { hook: "get:board", endpoint: "core/board" },
  

  {
    hook: "get:space-business",
    endpoint: "core/space/by-business",
    data: [{ name: "business_id" }],
  },
];
