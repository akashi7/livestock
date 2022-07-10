import authSlice from "./slices/auth.slice";
import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from "./slices/sidebar.slice";
const Store=configureStore({
    reducer:{
        auth:authSlice,
        sidebar:sidebarSlice
    }
});
export default Store;