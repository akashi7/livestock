import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAnimalExpense } from "../../utils/services/animalExp.service";

export const animalExpense = createAsyncThunk(
    "animalExpense",
    async ({ data, success }, { rejectWithValue }) => {
        return createAnimalExpense(data)
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

const animalExpenseSlice = createSlice({
    name: "animalExpense",
    initialState,
    reducers: {
        next: (state) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(animalExpense.pending, (state) => {
            state.loading = true;
            console.log(state);
        }).addCase(animalExpense.fulfilled, (state) => {
            state.loading = false;
            console.log(state);
        }).addCase(animalExpense.rejected, (state) => {
            state.loading = false;
            console.log(state);
        })
    }
});

export default animalExpenseSlice.reducer;
