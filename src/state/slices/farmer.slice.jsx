import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFarmer } from "../../utils/services/farmers.service";

export const farmer = createAsyncThunk(
    "farmer",
    async ({ data, success }, { rejectWithValue }) => {
        return createFarmer(data)
            .then((resp) => {
                console.log(resp);
                success();
            })
            .catch((error) => {
                console.log(error);
                rejectWithValue(error);
            });
    }
);
const initialState = {
    loading: false,
    authenticated: false,
};

const farmerSlice = createSlice({
    name: "farmer",
    initialState,
    reducers: {
        next: (state) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(farmer.pending, (state) => {
            state.loading = true;
            console.log(state);
        }).addCase(farmer.fulfilled, (state) => {
            state.loading = false;
            console.log(state);
        }).addCase(farmer.rejected, (state) => {
            state.loading = false;
            console.log(state);
        })
    }
});

export default farmerSlice.reducer;
