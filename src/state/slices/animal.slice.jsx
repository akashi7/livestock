import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AddAncestors,
  AddAnimalToGroup,
  AnimalOffSpring,
  GetAllAncestors,
  GetAllFemales,
  GetAllMales,
  GetContactApi,
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
  searchAnimal,
  upComingTreatmentReport,
  vaccinationData,
  viewGroupAnimal,
  viewOneAnimal,
} from '../../utils/services/animal.service'

export const animal = createAsyncThunk(
  'animal',
  async ({ fId, data, success }, { rejectWithValue }) => {
    return createAnimal(fId, data)
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
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return createSickBay(fId, resName, id, data)
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
  async ({ farmId }, { rejectWithValue }) => {
    return getAnimalsData(farmId)
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
  async ({ fId }, { rejectWithValue }) => {
    return getAnimalsGroupData(fId)
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
  async ({ fId, param, type }, { rejectWithValue }) => {
    return getAnimalsSickbayData(fId, param, type)
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
  async ({ fId }, { rejectWithValue }) => {
    return getAnimalsCatData(fId)
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
  async ({ fId }, { rejectWithValue }) => {
    return getPurposeData(fId)
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
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return createFeedData(fId, resName, id, data)
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
  async ({ fId, params, type }, { rejectWithValue }) => {
    return getFeedData(fId, params, type)
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
  async ({ fId }, { rejectWithValue }) => {
    return getFeedIdsData(fId)
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
  async ({ fId, data, success }, { rejectWithValue }) => {
    return createCategoryData(fId, data)
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
  async ({ fId }, { rejectWithValue }) => {
    return vaccinationData(fId)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return listVaccination(fId, param)
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
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return Vaccinate(fId, resName, id, data)
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
  async ({ fId }, { rejectWithValue }) => {
    return animalReport(fId)
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
  async ({ fId, params }, { rejectWithValue }) => {
    return viewOneAnimal(fId, params)
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
  async ({ fId, data, success }, { rejectWithValue }) => {
    return createGroupAnimal(fId, data)
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
  async ({ fId, param, type }, { rejectWithValue }) => {
    return listTreatment(fId, param, type)
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
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return createTreatment(fId, resName, id, data)
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
  async ({ fId, id, data, success, type }, { rejectWithValue }) => {
    return createAccounting(fId, id, data, type)
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
  async ({ fId, param, type }, { rejectWithValue }) => {
    return listAccounting(fId, param, type)
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
  async ({ fId, id, data, success }, { rejectWithValue }) => {
    return createMeasurement(fId, id, data)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return getMeasurements(fId, param)
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
  async ({ fId, param, type }, { rejectWithValue }) => {
    return allAnimalActivities(fId, param, type)
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
  async ({ fId, resName, id, data, success }, { rejectWithValue }) => {
    return createAnimalNote(fId, resName, id, data)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return retrieveAnimalNotes(fId, param)
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
  async ({ fId, id, data, success }, { rejectWithValue }) => {
    return createAnimalYield(fId, id, data)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return ListAnimalYield(fId, param)
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
  async ({ fId, resName, resId, id }, { rejectWithValue }) => {
    return getOneAnimalNote(fId, resName, resId, id)
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
  async ({ fId, id, data, success }, { rejectWithValue }) => {
    return createAnimalBreed(fId, id, data)
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
  async ({ fId, id, data, success }, { rejectWithValue }) => {
    return editAnimal(fId, id, data)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return ListAnimalBreed(fId, param)
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
  async ({ fId, param }, { rejectWithValue }) => {
    return SearchAnimalGroup(fId, param)
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
  async ({ fId, groupId, animalId, success }, { rejectWithValue }) => {
    return AddAnimalToGroup(fId, groupId, animalId)
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
  async ({ fId, groupId }, { rejectWithValue }) => {
    return viewGroupAnimal(fId, groupId)
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
  async ({ fId }, { rejectWithValue }) => {
    return GetTreatmentReport(fId)
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
  async ({ fId }, { rejectWithValue }) => {
    return GetreportTypes(fId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const UpcomingT = createAsyncThunk(
  'up-t-rep-za',
  async ({ fId }, { rejectWithValue }) => {
    return upComingTreatmentReport({ fId })
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const ContactsApi = createAsyncThunk(
  'up-t-rep-za-co',
  async ({ fId }, { rejectWithValue }) => {
    return GetContactApi(fId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const addAncestorsApi = createAsyncThunk(
  'up-t-rep-za-co-za',
  async ({ fId, gender, id, data, success }, { rejectWithValue }) => {
    return AddAncestors(fId, gender, id, data)
      .then((resp) => {
        success()
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const AnimalOffSpringApi = createAsyncThunk(
  'up-t-rep-za-co-zaaa',
  async ({ fId, id }, { rejectWithValue }) => {
    return AnimalOffSpring(fId, id)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetAllMalesAnimalsApi = createAsyncThunk(
  'up-ui',
  async ({ fId }, { rejectWithValue }) => {
    return GetAllMales(fId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const GetAllFemalesAnimalsApi = createAsyncThunk(
  'up-ui=zx',
  async ({ fId }, { rejectWithValue }) => {
    return GetAllFemales(fId)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const AllAncestors = createAsyncThunk(
  'up-ui=zx./',
  async ({ fId, id }, { rejectWithValue }) => {
    return GetAllAncestors(fId, id)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

export const SearchAnimal = createAsyncThunk(
  'up-ui=zx./ccc',
  async ({ fId, param }, { rejectWithValue }) => {
    return searchAnimal(fId, param)
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
  upcomingt: {
    loading: false,
    data: [],
  },
  contacts: {
    loading: false,
    data: [],
  },
  ancestor: {
    loading: false,
  },
  offSpring: {
    loading: false,
    data: [],
  },
  allMales: {
    loading: false,
    data: [],
  },
  allFemales: {
    loading: false,
    data: [],
  },
  ancestors: {
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
        state.accountings.data = payload.results
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
      .addCase(UpcomingT.fulfilled, (state, { payload }) => {
        state.upcomingt.loading = false
        state.upcomingt.data = payload.result
      })
      .addCase(UpcomingT.rejected, (state) => {
        state.upcomingt.loading = false
      })
      .addCase(UpcomingT.pending, (state) => {
        state.upcomingt.loading = true
      })
      .addCase(ContactsApi.fulfilled, (state, { payload }) => {
        state.contacts.loading = false
        state.contacts.data = payload.data
      })
      .addCase(ContactsApi.rejected, (state) => {
        state.contacts.loading = false
      })
      .addCase(ContactsApi.pending, (state) => {
        state.contacts.loading = true
      })
      .addCase(addAncestorsApi.fulfilled, (state) => {
        state.ancestor.loading = false
      })
      .addCase(addAncestorsApi.rejected, (state) => {
        state.ancestor.loading = false
      })
      .addCase(addAncestorsApi.pending, (state) => {
        state.ancestor.loading = true
      })
      .addCase(AnimalOffSpringApi.fulfilled, (state, { payload }) => {
        state.offSpring.loading = false
        state.offSpring.data = payload.data
      })
      .addCase(AnimalOffSpringApi.rejected, (state) => {
        state.offSpring.loading = false
      })
      .addCase(AnimalOffSpringApi.pending, (state) => {
        state.offSpring.loading = true
      })
      .addCase(GetAllMalesAnimalsApi.fulfilled, (state, { payload }) => {
        state.allMales.loading = false
        state.allMales.data = payload.data
      })
      .addCase(GetAllMalesAnimalsApi.rejected, (state) => {
        state.allMales.loading = false
      })
      .addCase(GetAllMalesAnimalsApi.pending, (state) => {
        state.allMales.loading = true
      })
      .addCase(GetAllFemalesAnimalsApi.fulfilled, (state, { payload }) => {
        state.allFemales.loading = false
        state.allFemales.data = payload.data
      })
      .addCase(GetAllFemalesAnimalsApi.rejected, (state) => {
        state.allFemales.loading = false
      })
      .addCase(GetAllFemalesAnimalsApi.pending, (state) => {
        state.allFemales.loading = true
      })
      .addCase(AllAncestors.fulfilled, (state, { payload }) => {
        state.ancestors.loading = false
        state.ancestors.data = payload.data
      })
      .addCase(AllAncestors.rejected, (state) => {
        state.ancestors.loading = false
      })
      .addCase(AllAncestors.pending, (state) => {
        state.ancestors.loading = true
      })
      .addCase(SearchAnimal.pending, (state) => {
        state.get.loading = true
      })
      .addCase(SearchAnimal.fulfilled, (state, { payload }) => {
        state.get.loading = false
        state.get.data = payload.data
      })
      .addCase(SearchAnimal.rejected, (state) => {
        state.get.loading = false
      })
  },
})

export const { handleState } = animalSlice.actions

export default animalSlice.reducer
