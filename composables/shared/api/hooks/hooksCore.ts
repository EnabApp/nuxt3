export default [
  // Auth
  {
    hook: "post:login",
    endpoint: "auth/login",
    data: [{ name: "email" }, { name: "password" }],
  },
  {
    hook: "post:register",
    endpoint: "auth/register",
    data: [{ name: "email" }, { name: "password" }, { name: "name" }],
  },

  // User
  { hook: "get:user", endpoint: "core/user", data: [{ name: "user_id" }] },
  {
    hook: "post:user",
    endpoint: "user",
    data: [{ name: "user" }, { name: "name" }],
  },

  //Business//
  { hook: "get:business", endpoint: "core/business" },
  {
    hook: "post:business",
    endpoint: "core/business",
    data: [
      { name: "name" },
      { name: "user_id" },
      { name: "category_id" },
      { name: "description" },
    ],
  },
  {
    hook: "delete:business",
    endpoint: "core/business",
    data: [{ name: "business_id" }],
  },
  {
    hook: "put:business",
    endpoint: "core/business",
    data: [
      { name: "id" },
      { name: "name" },
      { name: "user_id" },
      { name: "category_id" },
      { name: "description" },
    ],
  },

  //Business Category//
  { hook: "get:business-category", endpoint: "core/business-category" },
  {
    hook: "post:business-category",
    endpoint: "core/business-category",
    data: [{ name: "name" }],
  },
  {
    hook: "delete:business-category",
    endpoint: "core/business-category",
    data: [{ name: "category_id" }],
  },

  // Space
  { hook: "get:spaces", endpoint: "core/space" },
  {
    hook: "post:space",
    endpoint: "core/space",
    data: [{ name: "name" }, { name: "business_id" }, { name: "description" }],
  },
  {
    hook: "delete:space",
    endpoint: "core/space",
    data: [{ name: "space_id" }],
  },
  {
    hook: "put:space",
    endpoint: "core/space",
    data: [
      { name: "id" },
      { name: "name" },
      { name: "business_id" },
      { name: "description" },
    ],
  },
  {
    hook: "get:space",
    endpoint: "core/space",
    data: [{ name: "space_id" }
    ]
  },
  {
    hook: "get:spaces-business",
    endpoint: "core/space/by-business",
    data: [{ name: "business_id" }],
  },

  // Board
  { hook: "get:board", endpoint: "core/board" },
  { hook: "get:board", endpoint: "core/board", data: [{ name: "board_id" }] },
  {
    hook: "post:board",
    endpoint: "core/board",
    data: [{ name: "name" }, { name: "space_id" }, { name: "description" }],
  },
  {
    hook: "delete:board",
    endpoint: "core/board",
    data: [{ name: "board_id" }],
  },
  { hook: "get:board", endpoint: "core/board", data: [{ name: "board_id" }] },

  // Permission
  {
    hook: "post:permission",
    endpoint: "core/permission",
    data: [
      { name: "business_id" },
      { name: "client_id" },
      { name: "ref" },
      { name: "type" },
    ],
  },
  { hook: "get:permission", endpoint: "core/permission" },
  {
    hook: "get:permission-business",
    endpoint: "core/permission/by-business",
    data: [{ name: "business_id" }],
  },
  {
    hook: "get:permission-client",
    endpoint: "core/permission/by-client",
    data: [{ name: "client_id" }],
  },
  {
    hook: "put:permission",
    endpoint: "core/permission",
    data: [
      { name: "id" },
      { name: "business_id" },
      { name: "client" },
      { name: "ref" },
      { name: "type" },
    ],
  },
  {
    hook: "delete:permission",
    endpoint: "core/permission",
    data: [{ name: "id" }],
  },

  //Permission//
  {
    hook: "post:permission",
    endpoint: "core/permission",
    data: [
      { name: "business_id" },
      { name: "client_id" },
      { name: "ref" },
      { name: "type" },
    ],
  },
  {
    hook: "get:permission",
    endpoint: "core/permission"
  },
  {
    hook: "get:permission-business",
    endpoint: "core/permission/by-business",
    data: [{ name: "business_id" }],
  },
  {
    hook: "get:permission-client",
    endpoint: "core/permission/by-client",
    data: [{ name: "client_id" }],
  },
  {
    hook: "put:permission",
    endpoint: "core/permission",
    data: [
      { name: "id" },
      { name: "business_id" },
      { name: "client" },
      { name: "ref" },
      { name: "type" },
    ],
  },
  {
    hook: "delete:permission",
    endpoint: "core/permission",
    data: [{ name: "id" }],
  },
  // Board Category
  {
    hook: "post:board-category",
    endpoint: "store/board-category",
    data: [{ name: "name" }],
    date: [{ name: "description" }],
  },
  {
    hook: "get:board-category",
    endpoint: "store/board-category",
  },
  {
    hook: "delete:board-category",
    endpoint: "store/board-category",
    data: [{ name: "id" }],
  },
  {
    hook: "put:board-category",
    endpoint: "store/board-category",
    data: [{ name: "id" }, { name: "name" }, { name: "description" }],
  },
  {
    hook: "get:board-category",
    endpoint: "store/board-category",
    data: [{ name: "id" }],
  },
  {
    hook: "get:board-category:push-board",
    endpoint: "store/board-category/push-board",
    data: [{ name: "board_id" }, { name: "category_id" }],
  },
  {
    hook: "get:board-category:pull-board",
    endpoint: "store/board-category/pull-board",
    data: [{ name: "board_id" }, { name: "category_id" }],
  },

  // Pack
  {
    hook: "post:pack",
    endpoint: "store/pack",
    data: [
      { name: "name" },
      { name: "points" },
      { name: "boards" }
    ]
  },
  {
    hook: "post:pack:push-board",
    endpoint: "store/pack/pushBoard",
    data: [
      { name: "pack_id" },
      { name: "boards" }
    ]
  },
  {
    hook: "get:pack",
    endpoint: "store/pack",
    data: [{ name: "pack_id" }]
  },

  {
    hook: "post:pack:pull-board-from-pack",
    endpoint: "store/pack/pullBoardFromPack",
    data: [
      { name: "pack_id" },
      { name: "board_id" }
    ]
  },

];
