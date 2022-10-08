import * as Realm2 from "realm-web";
export const Realm = Realm2;
export const app = Realm2.getApp(process.env.MONGO_APP_ID);
