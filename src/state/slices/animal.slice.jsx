import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAnimal } from "../../utils/services/animal.service";

export const animal = createAsyncThunk(
    "animal",
    async ({ data, success }, { rejectWithValue }) => {
        return createAnimal(data)
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

const animalSlice = createSlice({
    name: "animal",
    initialState,
    reducers: {
        next: (state) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(animal.pending, (state) => {
            state.loading = true;
            console.log(state);
        }).addCase(animal.fulfilled, (state) => {
            state.loading = false;
            console.log(state);
        }).addCase(animal.rejected, (state) => {
            state.loading = false;
            console.log(state);
        })
    }
});

export default animalSlice.reducer;
