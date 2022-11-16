import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  animalReport,
  createAnimal,
  createCategoryData,
  createFeedData,
  createGroupAnimal,
  createSickBay,
  getAnimalsCatData,
  getAnimalsData,
  getAnimalsGroupData,
  getAnimalsSickbayData,
  getFeedData,
  getFeedIdsData,
  getPurposeData,
  listVaccination,
  Vaccinate,
  vaccinationData,
  viewOneAnimal,
} from "../../utils/services/animal.service";

export const animal = createAsyncThunk(
  "animal",
  async ({ data, success }, { rejectWithValue }) => {
    return createAnimal(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);
export const addAnimalGroup = createAsyncThunk(
  "create animal group",
  async ({ data, success }, { rejectWithValue }) => {
    return createGroupAnimal(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        console.log(error);
        rejectWithValue(error);
      });
  }
);
export const createSickBy = createAsyncThunk(
  "create sickBy",
  async ({ data, success }, { rejectWithValue }) => {
    return createSickBay(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const getAnimals = createAsyncThunk(
  "getanimals",
  async (props, { rejectWithValue }) => {
    return getAnimalsData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const getAllAnimalsGroup = createAsyncThunk(
  "getAllanimalsGroup",
  async (props, { rejectWithValue }) => {
    return getAnimalsGroupData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const getAllAnimalsSickbay = createAsyncThunk(
  "getAllanimalsSickbay",
  async (props, { rejectWithValue }) => {
    return getAnimalsSickbayData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const getAnimalCatgories = createAsyncThunk(
  "getanimalCatgories",
  async (props, { rejectWithValue }) => {
    return getAnimalsCatData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const getAllPurposeData = createAsyncThunk(
  "getpurposeData",
  async (props, { rejectWithValue }) => {
    return getPurposeData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const CreateFeed = createAsyncThunk(
  "createFeedData",
  async ({ data, success }, { rejectWithValue }) => {
    return createFeedData(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const GetAllFeeds = createAsyncThunk(
  "getFeedData",
  async (props, { rejectWithValue }) => {
    return getFeedData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const FeedItems = createAsyncThunk(
  "FeedList",
  async (props, { rejectWithValue }) => {
    return getFeedIdsData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);
export const CreateCategoryTY = createAsyncThunk(
  "create-category",
  async ({ data, success }, { rejectWithValue }) => {
    return createCategoryData(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const VaccinationData = createAsyncThunk(
  "vac-data",
  async (props, { rejectWithValue }) => {
    return vaccinationData()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const ListVaccinationsData = createAsyncThunk(
  "list-vac-data",
  async (props, { rejectWithValue }) => {
    return listVaccination()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const VaccinateAnimal = createAsyncThunk(
  "vacy-data",
  async ({ data, success }, { rejectWithValue }) => {
    return Vaccinate(data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const AnimalReport = createAsyncThunk(
  "animal-rep-data",
  async (props, { rejectWithValue }) => {
    return animalReport()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const SeeOneAnimal = createAsyncThunk(
  "animal-one",
  async ({ params }, { rejectWithValue }) => {
    return viewOneAnimal(params)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

const initialState = {
  loading: false,
  get: {
    loading: false,
    data: [],
  },
  categories: { loading: false, data: [], error: "" },
  animalsGroupData: { loading: false, data: [], error: "" },
  animalsSickBayData: { loading: false, data: [], error: "" },
  purposeData: { loading: false, data: [], error: "" },
  createAnimalGroup: { loading: false, error: "" },
  createSickBy: { loading: false, error: "" },
  feedData: { loading: false, data: [] },
  createFeed: { loading: false },
  allFeeds: { loading: false, data: [] },
  createCategory: { loading: false },
  vacciData: {
    loading: false,
    data: [],
  },
  vatinate: {
    loading: false,
  },
  allVaccination: {
    loading: false,
    data: [],
  },
  animalReportsData: {
    loading: false,
    data: [],
  },
  animal: {
    loading: false,
    data: {},
  },
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
    builder
      .addCase(animal.pending, (state) => {
        state.loading = true;
      })
      .addCase(animal.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(animal.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addAnimalGroup.pending, (state) => {
        state.createAnimalGroup.loading = true;
      })
      .addCase(addAnimalGroup.fulfilled, (state) => {
        state.createAnimalGroup.loading = false;
      })
      .addCase(addAnimalGroup.rejected, (state) => {
        state.createAnimalGroup.loading = false;
      })
      .addCase(getAnimals.pending, (state) => {
        state.get.loading = true;
      })
      .addCase(getAnimals.fulfilled, (state, { payload }) => {
        state.get.loading = false;
        state.get.data = payload.data;
      })
      .addCase(getAnimals.rejected, (state) => {
        state.get.loading = false;
      })
      .addCase(getAnimalCatgories.rejected, (state) => {
        state.categories.loading = false;
      })
      .addCase(getAnimalCatgories.pending, (state) => {
        state.categories.loading = true;
      })
      .addCase(getAnimalCatgories.fulfilled, (state, { payload }) => {
        state.categories.loading = false;
        state.categories.data = payload.data;
      })
      .addCase(getAllPurposeData.rejected, (state) => {
        state.purposeData.loading = false;
      })
      .addCase(getAllPurposeData.pending, (state) => {
        state.purposeData.loading = true;
      })
      .addCase(getAllPurposeData.fulfilled, (state, { payload }) => {
        state.purposeData.loading = false;
        state.purposeData.data = payload.data;
      })
      .addCase(createSickBy.pending, (state) => {
        state.createSickBy.loading = true;
      })
      .addCase(createSickBy.fulfilled, (state) => {
        state.createSickBy.loading = false;
      })
      .addCase(createSickBy.rejected, (state) => {
        state.createSickBy.loading = false;
      })
      .addCase(getAllAnimalsGroup.pending, (state) => {
        state.animalsGroupData.loading = true;
      })
      .addCase(getAllAnimalsGroup.fulfilled, (state, { payload }) => {
        state.animalsGroupData.loading = false;
        state.animalsGroupData.data = payload.data;
      })
      .addCase(getAllAnimalsGroup.rejected, (state) => {
        state.animalsGroupData.loading = false;
      })
      .addCase(getAllAnimalsSickbay.pending, (state) => {
        state.animalsSickBayData.loading = true;
      })
      .addCase(getAllAnimalsSickbay.fulfilled, (state, { payload }) => {
        state.animalsSickBayData.loading = false;
        state.animalsSickBayData.data = payload.data;
      })
      .addCase(getAllAnimalsSickbay.rejected, (state) => {
        state.animalsSickBayData.loading = false;
      })
      .addCase(CreateFeed.pending, (state) => {
        state.createFeed.loading = true;
      })
      .addCase(CreateFeed.fulfilled, (state) => {
        state.createFeed.loading = false;
      })
      .addCase(CreateFeed.rejected, (state) => {
        state.createFeed.loading = false;
      })
      .addCase(FeedItems.pending, (state) => {
        state.feedData.loading = true;
      })
      .addCase(FeedItems.fulfilled, (state, { payload }) => {
        state.feedData.loading = false;
        state.feedData.data = payload.data;
      })
      .addCase(FeedItems.rejected, (state) => {
        state.feedData.loading = false;
      })
      .addCase(GetAllFeeds.pending, (state) => {
        state.allFeeds.loading = true;
      })
      .addCase(GetAllFeeds.fulfilled, (state, { payload }) => {
        state.allFeeds.loading = false;
        state.allFeeds.data = payload.data;
      })
      .addCase(GetAllFeeds.rejected, (state) => {
        state.allFeeds.loading = false;
      })
      .addCase(CreateCategoryTY.pending, (state) => {
        state.createCategory.loading = true;
      })
      .addCase(CreateCategoryTY.fulfilled, (state) => {
        state.createCategory.loading = false;
      })
      .addCase(CreateCategoryTY.rejected, (state) => {
        state.createCategory.loading = false;
      })
      .addCase(VaccinationData.pending, (state) => {
        state.vacciData.loading = true;
      })
      .addCase(VaccinationData.fulfilled, (state, { payload }) => {
        state.vacciData.data = payload.data;
      })
      .addCase(VaccinationData.rejected, (state) => {
        state.vacciData.loading = false;
      })
      .addCase(VaccinateAnimal.pending, (state) => {
        state.vatinate.loading = true;
      })
      .addCase(VaccinateAnimal.fulfilled, (state) => {
        state.vatinate.loading = false;
      })
      .addCase(VaccinateAnimal.rejected, (state) => {
        state.vatinate.loading = false;
      })
      .addCase(ListVaccinationsData.pending, (state) => {
        state.allVaccination.loading = true;
      })
      .addCase(ListVaccinationsData.fulfilled, (state, { payload }) => {
        state.allVaccination.loading = false;
        state.allVaccination.data = payload.data;
      })
      .addCase(ListVaccinationsData.rejected, (state) => {
        state.allVaccination.loading = false;
      })
      .addCase(AnimalReport.pending, (state) => {
        state.animalReportsData.loading = true;
      })
      .addCase(AnimalReport.fulfilled, (state, { payload }) => {
        state.animalReportsData.loading = false;
        state.animalReportsData.data = payload.result;
      })
      .addCase(AnimalReport.rejected, (state) => {
        state.animalReportsData.loading = false;
      })
      .addCase(SeeOneAnimal.pending, (state) => {
        state.animal.loading = true;
      })
      .addCase(SeeOneAnimal.fulfilled, (state, { payload }) => {
        state.animal.loading = false;
        console.log({ payload });
        state.animal.data = payload.data;
      })
      .addCase(SeeOneAnimal.rejected, (state) => {
        state.animal.loading = false;
      });
  },
});

export default animalSlice.reducer;
