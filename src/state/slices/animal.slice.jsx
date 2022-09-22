import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createAnimal,
  createGroupAnimal,
  createSickBay,
  getAnimalsCatData,
  getAnimalsData,
  getAnimalsGroupData,
  getAnimalsSickbayData,
  getPurposeData,
} from '../../utils/services/animal.service';

export const animal = createAsyncThunk(
  'animal',
  async ({ data, success }, { rejectWithValue }) => {
    return createAnimal(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  },
);
export const addAnimalGroup = createAsyncThunk(
  'create animal group',
  async ({ data, success }, { rejectWithValue }) => {
    return createGroupAnimal(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  },
);
export const createSickBy= createAsyncThunk(
  'create sickBy',
  async ({ data, success }, { rejectWithValue }) => {
    return createSickBay(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAnimals = createAsyncThunk(
  'getanimals',
  async (props, { rejectWithValue }) => {
    return getAnimalsData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAllAnimalsGroup = createAsyncThunk(
  'getAllanimalsGroup',
  async (props, { rejectWithValue }) => {
    return getAnimalsGroupData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAllAnimalsSickbay = createAsyncThunk(
  'getAllanimalsSickbay',
  async (props, { rejectWithValue }) => {
    return getAnimalsSickbayData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAnimalCatgories = createAsyncThunk(
  'getanimalCatgories',
  async (props, { rejectWithValue }) => {
    return getAnimalsCatData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
export const getAllPurposeData = createAsyncThunk(
  'getpurposeData',
  async (props, { rejectWithValue }) => {
    return getPurposeData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  },
);
const initialState = {
  loading: false,
  get: {
    loading: false,
    data: [],
  },
  categories:{loading:false,data:[],error:""},
  animalsGroupData:{loading:false,data:[],error:""},
  animalsSickBayData:{loading:false,data:[],error:""},
  purposeData:{loading:false,data:[],error:""},
  createAnimalGroup:{loading:false,error:""},
  createSickBy:{loading:false,error:""}
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(animal.pending, (state) => {
        state.loading = true;
      }).addCase(animal.fulfilled, (state) => {
        state.loading = false;
      }).addCase(animal.rejected, (state) => {
        state.loading = false;
      }).addCase(addAnimalGroup.pending, (state) => {
        state.createAnimalGroup.loading = true;
      }).addCase(addAnimalGroup.fulfilled, (state) => {
        state.createAnimalGroup.loading = false;
      }).addCase(addAnimalGroup.rejected, (state) => {
        state.createAnimalGroup.loading = false;
      }).addCase(getAnimals.pending, (state) => {
        state.get.loading = true;
      }).addCase(getAnimals.fulfilled, (state, { payload }) => {
        state.get.loading = false;
        state.get.data = payload.data;
      }).addCase(getAnimals.rejected, (state) => {
        state.get.loading = false;
      }).addCase(getAnimalCatgories.rejected, (state) => {
        state.categories.loading = false;
      }).addCase(getAnimalCatgories.pending, (state) => {
        state.categories.loading = true;
      }).addCase(getAnimalCatgories.fulfilled, (state, { payload }) => {
        state.categories.loading = false;
        state.categories.data = payload.data;
      }).addCase(getAllPurposeData.rejected, (state) => {
        state.purposeData.loading = false;
      }).addCase(getAllPurposeData.pending, (state) => {
        state.purposeData.loading = true;
      }).addCase(getAllPurposeData.fulfilled, (state, { payload }) => {
        state.purposeData.loading = false;
        state.purposeData.data = payload.data;
      }).addCase(createSickBy.pending, (state) => {
        state.createSickBy.loading = true;
      }).addCase(createSickBy.fulfilled, (state) => {
        state.createSickBy.loading = false;
      }).addCase(createSickBy.rejected, (state) => {
        state.createSickBy.loading = false;
      }).addCase(getAllAnimalsGroup.pending, (state) => {
        state.animalsGroupData.loading = true;
      }).addCase(getAllAnimalsGroup.fulfilled, (state, { payload }) => {
        state.animalsGroupData.loading = false;
        state.animalsGroupData.data = payload.data;
      }).addCase(getAllAnimalsGroup.rejected, (state) => {
        state.animalsGroupData.loading = false;
      }).addCase(getAllAnimalsSickbay.pending, (state) => {
        state.animalsSickBayData.loading = true;
      }).addCase(getAllAnimalsSickbay.fulfilled, (state, { payload }) => {
        state.animalsSickBayData.loading = false;
        state.animalsSickBayData.data = payload.data;
      }).addCase(getAllAnimalsSickbay.rejected, (state) => {
        state.animalsSickBayData.loading = false;
      })
      
  },
});

export default animalSlice.reducer;
