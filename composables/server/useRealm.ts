
import * as Realm2 from "realm-web";
export const Realm = Realm2;
const config = useRuntimeConfig();
export const app = Realm2.getApp(config.public.mongoAppId);
