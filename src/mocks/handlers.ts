import { authHandlers } from "./handlers/authHandlers";
import { productHandlers } from "./handlers/productHandlers";

export const handlers = [...authHandlers, ...productHandlers];
