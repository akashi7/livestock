import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFarm } from "../../utils/services/farm.service";

export const farm = createAsyncThunk(
    "farm",
    async ({ data, success }, { rejectWithValue }) => {
        return createFarm(data)
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
    error: "",
};

const farmSlice = createSlice({
    name: "farm",
    initialState,
    reducers: {
        next: (state) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(farm.pending, (state) => {
            state.loading = true;
            console.log(state);
        }).addCase(farm.fulfilled, (state) => {
            state.loading = false;
            console.log(state);
        }).addCase(farm.rejected, (state) => {
            state.loading = false;
            console.log(state);
        })
    }
});

export default farmSlice.reducer;
