import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AddAnimalToGroup,
  GetTreatmentReport,
  GetreportTypes,
  ListAnimalBreed,
  ListAnimalYield,
  SearchAnimalGroup,
  Vaccinate,
  allAnimalActivities,
  animalReport,
  createAccounting,
  createAnimal,
  createAnimalBreed,
  createAnimalNote,
  createAnimalYield,
  createCategoryData,
  createFeedData,
  createGroupAnimal,
  createMeasurement,
  createSickBay,
  createTreatment,
  editAnimal,
  getAnimalsCatData,
  getAnimalsData,
  getAnimalsGroupData,
  getAnimalsSickbayData,
  getFeedData,
  getFeedIdsData,
  getMeasurements,
  getMedecines,
  getOneAnimalNote,
  getPurposeData,
  listAccounting,
  listTreatment,
  listVaccination,
  retrieveAnimalNotes,
  vaccinationData,
  viewGroupAnimal,
  viewOneAnimal,
} from '../../utils/services/animal.service'

export const animal = createAsyncThunk(
  'animal',
  async ({ data, success }, { rejectWithValue }) => {
    return createAnimal(data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const createSickBy = createAsyncThunk(
  'create sickBy',
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createSickBay(resName, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const getAnimals = createAsyncThunk(
  'getanimals',
  async (props, { rejectWithValue }) => {
    return getAnimalsData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const getAllAnimalsGroup = createAsyncThunk(
  'getAllAnimalsGroup',
  async (props, { rejectWithValue }) => {
    return getAnimalsGroupData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const getAllAnimalsSickbay = createAsyncThunk(
  'getAllanimalsSickbay',
  async ({ param }, { rejectWithValue }) => {
    return getAnimalsSickbayData(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const getAnimalCatgories = createAsyncThunk(
  'getanimalCatgories',
  async (props, { rejectWithValue }) => {
    return getAnimalsCatData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const getAllPurposeData = createAsyncThunk(
  'getpurposeData',
  async (props, { rejectWithValue }) => {
    return getPurposeData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const CreateFeed = createAsyncThunk(
  'createFeedData',
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createFeedData(resName, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const GetAllFeeds = createAsyncThunk(
  'getFeedData',
  async ({ params }, { rejectWithValue }) => {
    return getFeedData(params)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const FeedItems = createAsyncThunk(
  'FeedList',
  async (props, { rejectWithValue }) => {
    return getFeedIdsData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const CreateCategoryTY = createAsyncThunk(
  'create-category',
  async ({ data, success }, { rejectWithValue }) => {
    return createCategoryData(data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const VaccinationData = createAsyncThunk(
  'vac-data',
  async (props, { rejectWithValue }) => {
    return vaccinationData()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const ListVaccinationsData = createAsyncThunk(
  'list-vac-data',
  async ({ param }, { rejectWithValue }) => {
    return listVaccination(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const VaccinateAnimal = createAsyncThunk(
  'vacy-data',
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return Vaccinate(resName, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const AnimalReport = createAsyncThunk(
  'animal-rep-data',
  async (props, { rejectWithValue }) => {
    return animalReport()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const SeeOneAnimal = createAsyncThunk(
  'animal-one',
  async ({ params }, { rejectWithValue }) => {
    return viewOneAnimal(params)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const addAnimalGroup = createAsyncThunk(
  'create animal group',
  async ({ data, success }, { rejectWithValue }) => {
    return createGroupAnimal(data)
      .then((resp) => {
        success()
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        rejectWithValue(error)
      })
  }
)

export const GetMedecinesData = createAsyncThunk(
  'medecices',
  async (props, { rejectWithValue }) => {
    return getMedecines()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const TreatmentData = createAsyncThunk(
  'TreatmentData',
  async ({ param }, { rejectWithValue }) => {
    return listTreatment(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const CreateTreatmentData = createAsyncThunk(
  'CreateTreatment',
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createTreatment(resName, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const CreateAccountingData = createAsyncThunk(
  'creatacc',
  async ({ id, data, success }, { rejectWithValue }) => {
    return createAccounting(id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetAccountingData = createAsyncThunk(
  'listacc',
  async ({ param }, { rejectWithValue }) => {
    return listAccounting(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const CreateMesurementData = createAsyncThunk(
  'mes',
  async ({ id, data, success }, { rejectWithValue }) => {
    return createMeasurement(id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetALLMesurementsData = createAsyncThunk(
  'all-mes',
  async ({ param }, { rejectWithValue }) => {
    return getMeasurements(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetAllanimalActivities = createAsyncThunk(
  'all-actt',
  async ({ param }, { rejectWithValue }) => {
    return allAnimalActivities(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const CreateAnimalNotes = createAsyncThunk(
  'Create-animal-notes',
  async ({ resName, id, data, success }, { rejectWithValue }) => {
    return createAnimalNote(resName, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const retrieveAllanimalNotes = createAsyncThunk(
  'all-notes',
  async ({ param }, { rejectWithValue }) => {
    return retrieveAnimalNotes(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const CreateAnimalYield = createAsyncThunk(
  'Create-animal-yiled',
  async ({ id, data, success }, { rejectWithValue }) => {
    return createAnimalYield(id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const retrieveAllanimalYields = createAsyncThunk(
  'all-yields',
  async ({ param }, { rejectWithValue }) => {
    return ListAnimalYield(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetOneAnimalNote = createAsyncThunk(
  'one-note',
  async ({ resName, resId, id }, { rejectWithValue }) => {
    return getOneAnimalNote(resName, resId, id)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const CreateAnimalBreed = createAsyncThunk(
  'Create-animal-breed',
  async ({ id, data, success }, { rejectWithValue }) => {
    return createAnimalBreed(id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const EditAnimals = createAsyncThunk(
  'edit-animal',
  async ({ id, data, success }, { rejectWithValue }) => {
    return editAnimal(id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)
export const AllanimalBreeds = createAsyncThunk(
  'all-breeds',
  async ({ param }, { rejectWithValue }) => {
    return ListAnimalBreed(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const searchAnimalAction = createAsyncThunk(
  'search-animal',
  async ({ param }, { rejectWithValue }) => {
    return SearchAnimalGroup(param)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const AddToGroup = createAsyncThunk(
  'add-animal-to-group',
  async ({ groupId, animalId, success }, { rejectWithValue }) => {
    return AddAnimalToGroup(groupId, animalId)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const ViewGroupAnimal = createAsyncThunk(
  'view-one-group-animal',
  async ({ groupId }, { rejectWithValue }) => {
    return viewGroupAnimal(groupId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const ViewTreatmentReport = createAsyncThunk(
  't-rep',
  async (props, { rejectWithValue }) => {
    return GetTreatmentReport()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const ViewTypesReport = createAsyncThunk(
  't-rep-za',
  async (props, { rejectWithValue }) => {
    return GetreportTypes()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

const initialState = {
  loading: false,
  get: {
    loading: false,
    data: [],
  },
  categories: { loading: false, data: [], error: '' },
  animalsGroupData: { loading: false, data: [], error: '' },
  animalsSickBayData: { loading: false, data: [], error: '' },
  purposeData: { loading: false, data: [], error: '' },
  createAnimalGroup: { loading: false, error: '', data: null },
  createSickBy: { loading: false, error: '' },
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
  measures: {
    loading: false,
    data: [],
  },
  AllMeasures: {
    loading: false,
    data: [],
  },
  activities: {
    loading: false,
    data: [],
  },
  createNote: {
    loading: false,
  },
  allNotes: {
    loading: false,
    data: [],
  },
  createYield: {
    loading: false,
  },
  listYields: {
    loading: false,
    data: [],
  },
  oneNote: {
    loading: false,
    data: [],
  },
  createBreed: {
    loading: false,
  },
  listBreeds: {
    loading: false,
    data: [],
  },
  editAnimalS: {
    loading: false,
  },
  searchedAnimal: {
    loading: false,
    data: [],
  },
  addToGroupState: {
    loading: false,
    status: false,
  },
  onegroupAnimal: {
    loading: false,
    data: {},
  },
  createAcct: {
    loading: false,
  },
  treatReports: {
    loading: false,
    data: [],
  },
  typesReport: {
    loading: false,
    data: [],
  },
}

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    handleState: (state) => {
      state.createAnimalGroup.loading = false
      state.createAnimalGroup.data = null
      state.addToGroupState.loading = false
      state.addToGroupState.status = false
      state.searchedAnimal.loading = false
      state.searchedAnimal.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(animal.pending, (state) => {
        state.loading = true
      })
      .addCase(animal.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(animal.rejected, (state) => {
        state.loading = false
      })
      .addCase(addAnimalGroup.pending, (state) => {
        state.createAnimalGroup.loading = true
      })
      .addCase(addAnimalGroup.fulfilled, (state, { payload }) => {
        state.createAnimalGroup.loading = false
        state.createAnimalGroup.data = payload.data
      })
      .addCase(addAnimalGroup.rejected, (state) => {
        state.createAnimalGroup.loading = false
      })
      .addCase(getAnimals.pending, (state) => {
        state.get.loading = true
      })
      .addCase(getAnimals.fulfilled, (state, { payload }) => {
        state.get.loading = false
        state.get.data = payload.data
      })
      .addCase(getAnimals.rejected, (state) => {
        state.get.loading = false
      })
      .addCase(getAnimalCatgories.rejected, (state) => {
        state.categories.loading = false
      })
      .addCase(getAnimalCatgories.pending, (state) => {
        state.categories.loading = true
      })
      .addCase(getAnimalCatgories.fulfilled, (state, { payload }) => {
        state.categories.loading = false
        state.categories.data = payload.data
      })
      .addCase(getAllPurposeData.rejected, (state) => {
        state.purposeData.loading = false
      })
      .addCase(getAllPurposeData.pending, (state) => {
        state.purposeData.loading = true
      })
      .addCase(getAllPurposeData.fulfilled, (state, { payload }) => {
        state.purposeData.loading = false
        state.purposeData.data = payload.data
      })
      .addCase(createSickBy.pending, (state) => {
        state.createSickBy.loading = true
      })
      .addCase(createSickBy.fulfilled, (state) => {
        state.createSickBy.loading = false
      })
      .addCase(createSickBy.rejected, (state) => {
        state.createSickBy.loading = false
      })
      .addCase(getAllAnimalsGroup.pending, (state) => {
        state.animalsGroupData.loading = true
      })
      .addCase(getAllAnimalsGroup.fulfilled, (state, { payload }) => {
        state.animalsGroupData.loading = false
        console.log({ payload })
        state.animalsGroupData.data = payload.data
      })
      .addCase(getAllAnimalsGroup.rejected, (state) => {
        state.animalsGroupData.loading = false
      })
      .addCase(getAllAnimalsSickbay.pending, (state) => {
        state.animalsSickBayData.loading = true
      })
      .addCase(getAllAnimalsSickbay.fulfilled, (state, { payload }) => {
        state.animalsSickBayData.loading = false
        state.animalsSickBayData.data = payload.data
      })
      .addCase(getAllAnimalsSickbay.rejected, (state) => {
        state.animalsSickBayData.loading = false
      })
      .addCase(CreateFeed.pending, (state) => {
        state.createFeed.loading = true
      })
      .addCase(CreateFeed.fulfilled, (state) => {
        state.createFeed.loading = false
      })
      .addCase(CreateFeed.rejected, (state) => {
        state.createFeed.loading = false
      })
      .addCase(FeedItems.pending, (state) => {
        state.feedData.loading = true
      })
      .addCase(FeedItems.fulfilled, (state, { payload }) => {
        state.feedData.loading = false
        state.feedData.data = payload.data
      })
      .addCase(FeedItems.rejected, (state) => {
        state.feedData.loading = false
      })
      .addCase(GetAllFeeds.pending, (state) => {
        state.allFeeds.loading = true
      })
      .addCase(GetAllFeeds.fulfilled, (state, { payload }) => {
        state.allFeeds.loading = false
        state.allFeeds.data = payload.data
      })
      .addCase(GetAllFeeds.rejected, (state) => {
        state.allFeeds.loading = false
      })
      .addCase(CreateCategoryTY.pending, (state) => {
        state.createCategory.loading = true
      })
      .addCase(CreateCategoryTY.fulfilled, (state) => {
        state.createCategory.loading = false
      })
      .addCase(CreateCategoryTY.rejected, (state) => {
        state.createCategory.loading = false
      })
      .addCase(VaccinationData.pending, (state) => {
        state.vacciData.loading = true
      })
      .addCase(VaccinationData.fulfilled, (state, { payload }) => {
        state.vacciData.data = payload.data
      })
      .addCase(VaccinationData.rejected, (state) => {
        state.vacciData.loading = false
      })
      .addCase(VaccinateAnimal.pending, (state) => {
        state.vatinate.loading = true
      })
      .addCase(VaccinateAnimal.fulfilled, (state) => {
        state.vatinate.loading = false
      })
      .addCase(VaccinateAnimal.rejected, (state) => {
        state.vatinate.loading = false
      })
      .addCase(ListVaccinationsData.pending, (state) => {
        state.allVaccination.loading = true
      })
      .addCase(ListVaccinationsData.fulfilled, (state, { payload }) => {
        state.allVaccination.loading = false
        state.allVaccination.data = payload.data
      })
      .addCase(ListVaccinationsData.rejected, (state) => {
        state.allVaccination.loading = false
      })
      .addCase(AnimalReport.pending, (state) => {
        state.animalReportsData.loading = true
      })
      .addCase(AnimalReport.fulfilled, (state, { payload }) => {
        state.animalReportsData.loading = false
        state.animalReportsData.data = payload.result
      })
      .addCase(AnimalReport.rejected, (state) => {
        state.animalReportsData.loading = false
      })
      .addCase(SeeOneAnimal.pending, (state) => {
        state.animal.loading = true
      })
      .addCase(SeeOneAnimal.fulfilled, (state, { payload }) => {
        state.animal.loading = false
        state.animal.data = payload.data
      })
      .addCase(SeeOneAnimal.rejected, (state) => {
        state.animal.loading = false
      })
      .addCase(GetMedecinesData.pending, (state) => {
        state.medecines.loading = true
      })
      .addCase(GetMedecinesData.fulfilled, (state, { payload }) => {
        state.medecines.loading = false
        state.medecines.data = payload.data
      })
      .addCase(GetMedecinesData.rejected, (state) => {
        state.medecines.loading = false
      })
      .addCase(TreatmentData.pending, (state) => {
        state.treatments.loading = true
      })
      .addCase(TreatmentData.fulfilled, (state, { payload }) => {
        state.treatments.loading = false
        state.treatments.data = payload.data
      })
      .addCase(TreatmentData.rejected, (state) => {
        state.treatments.loading = false
      })
      .addCase(CreateTreatmentData.pending, (state) => {
        state.createTreatment.loading = true
      })
      .addCase(CreateTreatmentData.fulfilled, (state) => {
        state.createTreatment.loading = false
      })
      .addCase(CreateTreatmentData.rejected, (state) => {
        state.createTreatment.loading = false
      })
      .addCase(GetAccountingData.pending, (state) => {
        state.accountings.loading = true
      })
      .addCase(GetAccountingData.fulfilled, (state, { payload }) => {
        state.accountings.loading = false
        state.accountings.data = payload.data
      })
      .addCase(GetAccountingData.rejected, (state) => {
        state.accountings.loading = false
      })
      .addCase(CreateMesurementData.pending, (state) => {
        state.measures.loading = true
      })
      .addCase(CreateMesurementData.fulfilled, (state, { payload }) => {
        state.measures.loading = false
        state.measures.data = payload.data
      })
      .addCase(CreateMesurementData.rejected, (state) => {
        state.measures.loading = false
      })
      .addCase(GetALLMesurementsData.pending, (state) => {
        state.AllMeasures.loading = true
      })
      .addCase(GetALLMesurementsData.fulfilled, (state, { payload }) => {
        state.AllMeasures.loading = false
        state.AllMeasures.data = payload.data
      })
      .addCase(GetALLMesurementsData.rejected, (state) => {
        state.AllMeasures.loading = false
      })
      .addCase(GetAllanimalActivities.pending, (state) => {
        state.activities.loading = true
      })
      .addCase(GetAllanimalActivities.fulfilled, (state, { payload }) => {
        state.activities.loading = false
        state.activities.data = payload.data
      })
      .addCase(GetAllanimalActivities.rejected, (state) => {
        state.activities.loading = false
      })
      .addCase(CreateAnimalNotes.pending, (state) => {
        state.createNote.loading = true
      })
      .addCase(CreateAnimalNotes.fulfilled, (state) => {
        state.createNote.loading = false
      })
      .addCase(CreateAnimalNotes.rejected, (state) => {
        state.createNote.loading = false
      })
      .addCase(retrieveAllanimalNotes.pending, (state) => {
        state.allNotes.loading = true
      })
      .addCase(retrieveAllanimalNotes.fulfilled, (state, { payload }) => {
        state.allNotes.loading = false
        state.allNotes.data = payload.data
      })
      .addCase(retrieveAllanimalNotes.rejected, (state) => {
        state.allNotes.loading = false
      })
      .addCase(CreateAnimalYield.pending, (state) => {
        state.createYield.loading = true
      })
      .addCase(CreateAnimalYield.fulfilled, (state) => {
        state.createYield.loading = false
      })
      .addCase(CreateAnimalYield.rejected, (state) => {
        state.createYield.loading = false
      })
      .addCase(retrieveAllanimalYields.pending, (state) => {
        state.listYields.loading = true
      })
      .addCase(retrieveAllanimalYields.fulfilled, (state, { payload }) => {
        state.listYields.loading = false
        state.listYields.data = payload.data
      })
      .addCase(retrieveAllanimalYields.rejected, (state) => {
        state.listYields.loading = false
      })
      .addCase(GetOneAnimalNote.pending, (state) => {
        state.oneNote.loading = true
      })
      .addCase(GetOneAnimalNote.fulfilled, (state, { payload }) => {
        state.oneNote.loading = false
        state.oneNote.data = payload.data
      })
      .addCase(GetOneAnimalNote.rejected, (state) => {
        state.oneNote.loading = false
      })
      .addCase(CreateAnimalBreed.fulfilled, (state) => {
        state.createBreed.loading = false
      })
      .addCase(CreateAnimalBreed.rejected, (state) => {
        state.createBreed.loading = false
      })
      .addCase(CreateAnimalBreed.pending, (state) => {
        state.createBreed.loading = true
      })
      .addCase(AllanimalBreeds.fulfilled, (state, { payload }) => {
        state.listBreeds.loading = false
        state.listBreeds.data = payload.data
      })
      .addCase(AllanimalBreeds.rejected, (state) => {
        state.listBreeds.loading = false
      })
      .addCase(AllanimalBreeds.pending, (state) => {
        state.listBreeds.loading = true
      })
      .addCase(EditAnimals.fulfilled, (state) => {
        state.editAnimalS.loading = false
      })
      .addCase(EditAnimals.rejected, (state) => {
        state.editAnimalS.loading = false
      })
      .addCase(EditAnimals.pending, (state) => {
        state.editAnimalS.loading = true
      })
      .addCase(searchAnimalAction.fulfilled, (state, { payload }) => {
        state.searchedAnimal.loading = false
        state.searchedAnimal.data = payload.data
      })
      .addCase(searchAnimalAction.rejected, (state) => {
        state.searchedAnimal.loading = false
      })
      .addCase(searchAnimalAction.pending, (state) => {
        state.searchedAnimal.loading = true
      })
      .addCase(AddToGroup.fulfilled, (state) => {
        state.addToGroupState.loading = false
        state.addToGroupState.status = true
      })
      .addCase(AddToGroup.rejected, (state) => {
        state.addToGroupState.loading = false
      })
      .addCase(AddToGroup.pending, (state) => {
        state.addToGroupState.loading = true
      })
      .addCase(ViewGroupAnimal.fulfilled, (state, { payload }) => {
        state.onegroupAnimal.loading = false
        state.onegroupAnimal.data = payload.data
      })
      .addCase(ViewGroupAnimal.rejected, (state) => {
        state.onegroupAnimal.loading = false
      })
      .addCase(ViewGroupAnimal.pending, (state) => {
        state.onegroupAnimal.loading = true
      })
      .addCase(CreateAccountingData.fulfilled, (state) => {
        state.createAcct.loading = false
      })
      .addCase(CreateAccountingData.rejected, (state) => {
        state.createAcct.loading = false
      })
      .addCase(CreateAccountingData.pending, (state) => {
        state.createAcct.loading = true
      })
      .addCase(ViewTreatmentReport.fulfilled, (state, { payload }) => {
        state.treatReports.loading = false
        console.log({ payload })
        state.treatReports.data = payload.result
      })
      .addCase(ViewTreatmentReport.rejected, (state) => {
        state.treatReports.loading = false
      })
      .addCase(ViewTreatmentReport.pending, (state) => {
        state.treatReports.loading = true
      })
      .addCase(ViewTypesReport.fulfilled, (state, { payload }) => {
        state.typesReport.loading = false
        state.typesReport.data = payload.data
      })
      .addCase(ViewTypesReport.rejected, (state) => {
        state.typesReport.loading = false
      })
      .addCase(ViewTypesReport.pending, (state) => {
        state.typesReport.loading = true
      })
  },
})

export const { handleState } = animalSlice.actions

export default animalSlice.reducer
//CreateAccountingData
