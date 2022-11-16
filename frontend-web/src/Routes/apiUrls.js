const HOST = process.env.REACT_APP_HOST
const API_URL = HOST+"api/";

// Authentication Urls
export const SIGN_IN = API_URL+"login";
export const SIGN_UP = API_URL + "register";
export const SEND_OTP = API_URL + "otp/send";
export const CHECK_OTP = API_URL + "otp/check";


export const ALL_ITEMS = API_URL+"items/all";
export const ALL_CATEGORIES = API_URL+"categories/all";
export const CATEGORIES = API_URL+"categories/";
export const Items_By_CATEGORIES = API_URL + "categories/items/";
