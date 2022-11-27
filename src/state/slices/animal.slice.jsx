import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  animalReport,
  createAnimal,
  createCategoryData,
  createFeedData,
  createGroupAnimal,
  createSickBay,
  createTreatment,
  getAnimalsCatData,
  getAnimalsData,
  getAnimalsGroupData,
  getAnimalsSickbayData,
  getFeedData,
  getFeedIdsData,
  getMedecines,
  getPurposeData,
  listAccounting,
  listTreatment,
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
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createSickBay(resName, id, data)
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
  async ({ param }, { rejectWithValue }) => {
    return getAnimalsSickbayData(param)
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
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createFeedData(resName, id, data)
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
  async ({ params }, { rejectWithValue }) => {
    return getFeedData(params)
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
  async ({ param }, { rejectWithValue }) => {
    return listVaccination(param)
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
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return Vaccinate(resName, id, data)
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

export const GetMedecinesData = createAsyncThunk(
  "medecices",
  async (props, { rejectWithValue }) => {
    return getMedecines()
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const TreatmentData = createAsyncThunk(
  "TreatmentData",
  async ({ param }, { rejectWithValue }) => {
    return listTreatment(param)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const CreateTreatmentData = createAsyncThunk(
  "CreateTreatment",
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createTreatment(resName, id, data)
      .then((resp) => {
        success();
      })
      .catch((error) => {
        rejectWithValue(error);
      });
  }
);

export const GetAccountingData = createAsyncThunk(
  "listacc",
  async ({ param }, { rejectWithValue }) => {
    return listAccounting(param)
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
  medecines: {
    loading: false,
    data: [],
  },
  treatments: {
    loading: false,
    data: [],
  },
  createTreatment: {
    loading: false,
  },
  accountings: {
    loading: false,
    data: [],
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
        console.log("iii", payload);
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
        state.animal.data = payload.data;
      })
      .addCase(SeeOneAnimal.rejected, (state) => {
        state.animal.loading = false;
      })
      .addCase(GetMedecinesData.pending, (state) => {
        state.medecines.loading = true;
      })
      .addCase(GetMedecinesData.fulfilled, (state, { payload }) => {
        state.medecines.loading = false;
        state.medecines.data = payload.data;
      })
      .addCase(GetMedecinesData.rejected, (state) => {
        state.medecines.loading = false;
      })
      .addCase(TreatmentData.pending, (state) => {
        state.treatments.loading = true;
      })
      .addCase(TreatmentData.fulfilled, (state, { payload }) => {
        state.treatments.loading = false;
        state.treatments.data = payload.data;
      })
      .addCase(TreatmentData.rejected, (state) => {
        state.treatments.loading = false;
      })
      .addCase(CreateTreatmentData.pending, (state) => {
        state.createTreatment.loading = true;
      })
      .addCase(CreateTreatmentData.fulfilled, (state) => {
        state.createTreatment.loading = false;
      })
      .addCase(CreateTreatmentData.rejected, (state) => {
        state.createTreatment.loading = false;
      })
      .addCase(GetAccountingData.pending, (state) => {
        state.accountings.loading = true;
      })
      .addCase(GetAccountingData.fulfilled, (state, { payload }) => {
        state.accountings.loading = false;
        state.accountings.data = payload.data;
      })
      .addCase(GetAccountingData.rejected, (state) => {
        state.accountings.loading = false;
      });
  },
});

export default animalSlice.reducer;
