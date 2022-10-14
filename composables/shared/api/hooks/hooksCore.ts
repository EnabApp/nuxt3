export default [
  { hook: "post:login", endpoint: "auth/login" , data: [{ name: "email" }, { name: "password" }]},
  { hook: "post:register", endpoint: "auth/register", data: [{ name: "email" }, { name: "password" }, { name: "name" }]},
  { hook: "get:user", endpoint: "core/user", data: [{ name: "user_id" }]},
  { hook: "get:business", endpoint: "core/business" },
  { hook: "post:business", endpoint: "core/business", data: [{ name: "name" }, { name: "user_id" }, { name: "category_id" }, { name: "description" }]},
  { hook: "get:business-category", endpoint: "core/business-category" },
  { hook: "post:business-category", endpoint: "core/business-category", data: [{ name: "name" }]},
  { hook: "get:spaces", endpoint: "core/space" },
  { hook: "post:space", endpoint: "core/space", data: [{ name: "name" }, { name: "business_id" }, { name: "category_id" }]},
  { hook: "get:space", endpoint: "core/space", data: [{ name: "space_id" }]},
  { hook: "get:spaces-business", endpoint: "core/space/by-business", data: [{ name: "business_id" }]},
  { hook: "get:board", endpoint: "core/board" },
  { hook: "get:board", endpoint: "core/board" , data: [{ name: "board_id" }]}, 
  { hook: "post:permission", endpoint: "core/permission", data: [{ name: "business_id" }, { name: "client_id" }, { name: "ref" }, { name: "type" }]},
  { hook: "get:permission", endpoint: "core/permission" },
  { hook: "get:permission-business", endpoint: "core/permission/by-business", data: [{ name: "business_id" }]},
  { hook: "get:permission-client", endpoint: "core/permission/by-client", data: [{ name: "client_id" }]},
  { hook: "put:permission", endpoint: "core/permission", data: [{ name: "id" }, { name: "business_id" }, { name: "client" }, { name: "ref" }, { name: "type" }]},
  { hook: "delete:permission", endpoint: "core/permission", data: [{ name: "id" }]},


];
