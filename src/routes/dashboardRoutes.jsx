import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import AnimalExpenses from '../components/animalexp/animalexp/create'
import AnimalExpensesLists from '../components/animalexp/animalexp/lists'
import ListAccounts from '../components/animals/animals/accounting'
import CreateAnimal from '../components/animals/animals/create'
import CreateCategory from '../components/animals/animals/create-category'
import CreateAnimalFeed from '../components/animals/animals/feed-create'
import ListAnimalFeeds from '../components/animals/animals/feed-list'
import CreateGroupAnimal from '../components/animals/animals/groupAnimal'
import ListAnimals from '../components/animals/animals/list'
import ListAnimalsGroup from '../components/animals/animals/list-animalsGroup'
import ListAnimalsSickBay from '../components/animals/animals/list-animalsSickbay'
import ListAnimalsCategory from '../components/animals/animals/list-category'
import ListVaccinations from '../components/animals/animals/list-vaccination'
import Measurement from '../components/animals/animals/measurement'
import ListAnimalReports from '../components/animals/animals/report'
import CreateAnimalSickBay from '../components/animals/animals/sickbayCreate'
import TreatmentsList from '../components/animals/animals/treatments'
import VacinateAnimal from '../components/animals/animals/vaccination'
import OneAnimal from '../components/animals/animals/view-one'
import ContentWrapper from '../components/common/contentWrapper/contentWrapper'
import Navbar from '../components/common/header/header'
import Sidebar from '../components/common/sidebar/sidebar'
import CreateEvent from '../components/events/events/create'
import EventList from '../components/events/events/list'
import CreateExpense from '../components/expenses/expenses/create'
import ListExpenses from '../components/expenses/expenses/list'
import CreateFarmer from '../components/farmers/farmer/create'
import ListFarmers from '../components/farmers/farmer/list'
import FarmExpense from '../components/farmexp/farmexp/create'
import CreateFarms from '../components/farms/farms/create'
import ListFarms from '../components/farms/farms/list'
import ListFarmReports from '../components/farms/farms/reports'
import ListNotes from '../components/animals/animals/notes'
import ListAnimalYields from '../components/animals/animals/yield'
import EditAnimal from '../components/animals/animals/edit'
import ListAnimalBreeding from '../components/animals/animals/breeding'
import ViewOneGroup from '../components/animals/animals/one-group'
import TreatmentReport from '../components/reports/report/treatments'
import DueDateReport from '../components/reports/report/duedates'
import ReproductionReport from '../components/reports/report/reproduction'
import ViewOneFarm from '../components/farms/farms/one'
import CashFlow from '../components/farms/farms/cashflow'
import FarmTransaction from '../components/farms/farms/transaction'
import UpcomingTreatmentsReports from '../components/reports/report/upcomingt'
import PLStatement from '../components/farms/farms/plstatement'
function DashRoutes() {
  return (
    <Layout className='h-[100vh]'>
      <Sidebar />
      <Layout className='h-[100%]'>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path='/' element={<ListFarmers />} />
            <Route path='/add-farmer' element={<CreateFarmer />} />
            <Route path='/list-animals' element={<ListAnimals />} />
            <Route path='/animal/:id' element={<OneAnimal />} />
            <Route path='/animal/:id/edit' element={<EditAnimal />} />
            <Route path='/add-animal' element={<CreateAnimal />} />
            <Route path='/list-farms' element={<ListFarms />} />
            <Route path='/list-animalsGroup' element={<ListAnimalsGroup />} />
            <Route path='/list-sickbay' element={<ListAnimalsSickBay />} />
            <Route path='/add-farm' element={<CreateFarms />} />
            <Route path='/add-animal-expense' element={<AnimalExpenses />} />
            <Route
              path='/list-animal-expenses'
              element={<AnimalExpensesLists />}
            />
            <Route path='/add-animal-group' element={<CreateGroupAnimal />} />
            <Route path='/add-sickbay' element={<CreateAnimalSickBay />} />
            <Route path='/create-farm-expenses' element={<FarmExpense />} />
            <Route path='/list-expenses' element={<ListExpenses />} />
            <Route path='/add-expense' element={<CreateExpense />} />
            <Route path='/add-expense' element={<CreateExpense />} />
            <Route path='/create-category' element={<CreateCategory />} />
            <Route path='/list-category' element={<ListAnimalsCategory />} />
            <Route path='/create-animal-feed' element={<CreateAnimalFeed />} />
            <Route path='/list-animal-feed' element={<ListAnimalFeeds />} />
            <Route path='/create-event' element={<CreateEvent />} />
            <Route path='/event-list' element={<EventList />} />
            <Route path='/vaccinate' element={<VacinateAnimal />} />
            <Route path='/list-vaccination' element={<ListVaccinations />} />
            <Route path='/farm-reports' element={<ListFarmReports />} />
            <Route path='/animal-reports' element={<ListAnimalReports />} />
            <Route path='/animal-treatments' element={<TreatmentsList />} />
            <Route path='/animal-accounts' element={<ListAccounts />} />
            <Route path='/animal-measures' element={<Measurement />} />
            <Route path='/animal-notes' element={<ListNotes />} />
            <Route path='/animal-yields' element={<ListAnimalYields />} />
            <Route path='/animal-breeds' element={<ListAnimalBreeding />} />
            <Route path='/group-animal/:id' element={<ViewOneGroup />} />
            <Route path='/report/treatment' element={<TreatmentReport />} />
            <Route path='/report/duedates' element={<DueDateReport />} />
            <Route
              path='/report/upcoming_treatment'
              element={<UpcomingTreatmentsReports />}
            />
            <Route
              path='/report/reproduction'
              element={<ReproductionReport />}
            />
            <Route path='/farm/:id' element={<ViewOneFarm />} />
            <Route path='/farm/:id/cashflow' element={<CashFlow />} />
            <Route path='/farm/:id/transaction' element={<FarmTransaction />} />
            <Route path='/farm/:id/pl' element={<PLStatement />} />
          </Routes>
        </ContentWrapper>
      </Layout>
    </Layout>
  )
}
export default DashRoutes
