import { Layout } from 'antd'
import { Route, Routes, useMatch } from 'react-router-dom'
import AnimalExpenses from '../components/animalexp/animalexp/create'
import AnimalExpensesLists from '../components/animalexp/animalexp/lists'
import ListAccounts from '../components/animals/animals/accounting'
import ListAnimalBreeding from '../components/animals/animals/breeding'
import CreateAnimal from '../components/animals/animals/create'
import CreateCategory from '../components/animals/animals/create-category'
import EditAnimal from '../components/animals/animals/edit'
import CreateAnimalFeed from '../components/animals/animals/feed-create'
import ListAnimalFeeds from '../components/animals/animals/feed-list'
import Genealogy from '../components/animals/animals/genealogy'
import GroupAccount from '../components/animals/animals/group-accounting'
import GroupFeeding from '../components/animals/animals/group-feed'
import GroupSickBay from '../components/animals/animals/group-sickbay'
import GroupTreatment from '../components/animals/animals/group-treatment'
import CreateGroupAnimal from '../components/animals/animals/groupAnimal'
import ListAnimals from '../components/animals/animals/list'
import ListAnimalsGroup from '../components/animals/animals/list-animalsGroup'
import ListAnimalsSickBay from '../components/animals/animals/list-animalsSickbay'
import ListAnimalsCategory from '../components/animals/animals/list-category'
import ListVaccinations from '../components/animals/animals/list-vaccination'
import Measurement from '../components/animals/animals/measurement'
import ListNotes from '../components/animals/animals/notes'
import Offspring from '../components/animals/animals/offspring'
import ViewOneGroup from '../components/animals/animals/one-group'
import ListAnimalReports from '../components/animals/animals/report'
import CreateAnimalSickBay from '../components/animals/animals/sickbayCreate'
import TreatmentsList from '../components/animals/animals/treatments'
import VacinateAnimal from '../components/animals/animals/vaccination'
import OneAnimal from '../components/animals/animals/view-one'
import ListAnimalYields from '../components/animals/animals/yield'
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
import CashFlow from '../components/farms/farms/cashflow'
import CreateFarms from '../components/farms/farms/create'
import ListFarms from '../components/farms/farms/list'
import ViewOneFarm from '../components/farms/farms/one'
import PLStatement from '../components/farms/farms/plstatement'
import ListFarmReports from '../components/farms/farms/reports'
import FarmTransaction from '../components/farms/farms/transaction'
import DueDateReport from '../components/reports/report/duedates'
import ReproductionReport from '../components/reports/report/reproduction'
import TreatmentReport from '../components/reports/report/treatments'
import UpcomingTreatmentsReports from '../components/reports/report/upcomingt'
import Private from './private'
import { useEffect, useState } from 'react'
import CheckFarmModal from '../components/animals/modals/checkFarmModal'
import UsersLists from '../components/users/user/list'

function DashRoutes() {
  const farmId = localStorage.getItem('fId')
  const [toogle, setToogle] = useState(false)
  const matchAddFarms = useMatch('/vt/add-farm')

  useEffect(() => {
    if (!farmId && !matchAddFarms) {
      setToogle(true)
    }
  }, [farmId, matchAddFarms])

  return (
    <Layout className='h-[100vh]'>
      <Sidebar />
      <Layout className='h-[100%]'>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path='/' element={<ListFarms farmId={farmId} />} />
            <Route
              path='/farmers-list'
              element={<ListFarmers farmId={farmId} />}
            />
            <Route
              path='/add-farmer'
              element={<CreateFarmer farmId={farmId} />}
            />
            <Route
              path='/list-animals'
              element={<ListAnimals farmId={farmId} />}
            />
            <Route path='/animal/:id' element={<OneAnimal farmId={farmId} />} />
            <Route
              path='/animal/:id/edit'
              element={<EditAnimal farmId={farmId} />}
            />
            <Route
              path='/add-animal'
              element={<CreateAnimal farmId={farmId} />}
            />
            <Route
              path='/list-animalsGroup'
              element={<ListAnimalsGroup farmId={farmId} />}
            />
            <Route
              path='/list-sickbay'
              element={<ListAnimalsSickBay farmId={farmId} />}
            />
            <Route path='/add-farm' element={<CreateFarms farmId={farmId} />} />
            <Route
              path='/add-animal-expense'
              element={<AnimalExpenses farmId={farmId} />}
            />
            <Route
              path='/list-animal-expenses'
              element={<AnimalExpensesLists farmId={farmId} />}
            />
            <Route
              path='/add-animal-group'
              element={<CreateGroupAnimal farmId={farmId} />}
            />
            <Route
              path='/add-sickbay'
              element={<CreateAnimalSickBay farmId={farmId} />}
            />
            <Route
              path='/create-farm-expenses'
              element={<FarmExpense farmId={farmId} />}
            />
            <Route
              path='/list-expenses'
              element={<ListExpenses farmId={farmId} />}
            />
            <Route
              path='/add-expense'
              element={<CreateExpense farmId={farmId} />}
            />
            <Route
              path='/add-expense'
              element={<CreateExpense farmId={farmId} />}
            />
            <Route
              path='/create-category'
              element={<CreateCategory farmId={farmId} />}
            />
            <Route
              path='/list-category'
              element={<ListAnimalsCategory farmId={farmId} />}
            />
            <Route
              path='/create-animal-feed'
              element={<CreateAnimalFeed farmId={farmId} />}
            />
            <Route
              path='/list-animal-feed'
              element={<ListAnimalFeeds farmId={farmId} />}
            />
            <Route
              path='/create-event'
              element={<CreateEvent farmId={farmId} />}
            />
            <Route path='/event-list' element={<EventList farmId={farmId} />} />
            <Route
              path='/vaccinate'
              element={<VacinateAnimal farmId={farmId} />}
            />
            <Route
              path='/list-vaccination'
              element={<ListVaccinations farmId={farmId} />}
            />
            <Route
              path='/farm-reports'
              element={<ListFarmReports farmId={farmId} />}
            />
            <Route
              path='/animal-reports'
              element={<ListAnimalReports farmId={farmId} />}
            />
            <Route
              path='/animal-treatments'
              element={<TreatmentsList farmId={farmId} />}
            />
            <Route
              path='/animal-accounts'
              element={<ListAccounts farmId={farmId} />}
            />
            <Route
              path='/animal-measures'
              element={<Measurement farmId={farmId} />}
            />
            <Route
              path='/animal-notes'
              element={<ListNotes />}
              farmId={farmId}
            />
            <Route
              path='/animal-yields'
              element={<ListAnimalYields farmId={farmId} />}
            />
            <Route
              path='/animal-breeds'
              element={<ListAnimalBreeding farmId={farmId} />}
            />
            <Route
              path='/group-animal/:id'
              element={<ViewOneGroup farmId={farmId} />}
            />
            <Route
              path='/report/treatment'
              element={<TreatmentReport farmId={farmId} />}
            />
            <Route
              path='/report/duedates'
              element={<DueDateReport farmId={farmId} />}
            />
            <Route path='/genealogy' element={<Genealogy farmId={farmId} />} />
            <Route path='/offSpring' element={<Offspring farmId={farmId} />} />
            <Route
              path='/report/upcoming_treatment'
              element={<UpcomingTreatmentsReports farmId={farmId} />}
            />
            <Route
              path='/report/reproduction'
              element={<ReproductionReport farmId={farmId} />}
            />
            <Route path='/farm/:id' element={<ViewOneFarm farmId={farmId} />} />
            <Route
              path='/farm/:id/cashflow'
              element={<CashFlow farmId={farmId} />}
            />
            <Route
              path='/farm/:id/transaction'
              element={<FarmTransaction farmId={farmId} />}
            />
            <Route
              path='/farm/:id/pl'
              element={<PLStatement farmId={farmId} />}
            />
            <Route
              path='/group/feed/:id'
              element={<GroupFeeding farmId={farmId} />}
            />
            <Route
              path='/group/sickbay/:id'
              element={<GroupSickBay farmId={farmId} />}
            />
            <Route
              path='/group/account/:id'
              element={<GroupAccount farmId={farmId} />}
            />
            <Route
              path='/group/treatment/:id'
              element={<GroupTreatment farmId={farmId} />}
            />
            <Route
              path='/users/lists'
              element={<UsersLists farmId={farmId} />}
            />
          </Routes>
        </ContentWrapper>
        <CheckFarmModal toogle={toogle} Toogle={setToogle} />
      </Layout>
    </Layout>
  )
}
export default Private(DashRoutes)
