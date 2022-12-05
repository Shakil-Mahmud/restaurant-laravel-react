// const HOST = process.env.REACT_APP_HOST
const HOST = "http://127.0.0.1:8000/";
export const API_URL = HOST+"api/";
export const ADMIN_API_URL = HOST+"api/admin/";

// Authentication Urls
export const SIGN_IN = ADMIN_API_URL + "login";
export const SIGN_UP = ADMIN_API_URL + "register";
export const SEND_OTP = ADMIN_API_URL + "otp/send";
export const CHECK_OTP = ADMIN_API_URL + "otp/check";


export const CATEGORIES = API_URL+"categories/";

// Items api
export const ALL_ITEMS = API_URL+"items/all";
export const ALL_CATEGORIES = API_URL+"categories/all";
export const Items_By_CATEGORIES = API_URL + "categories/items/";
export const Items_STATUS_UPDATE = API_URL + "items/status/update";
