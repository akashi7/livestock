import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import AnimalExpenses from '../components/animalexp/animalexp/create';
import AnimalExpensesLists from '../components/animalexp/animalexp/lists';
import CreateAnimal from '../components/animals/animals/create';
import CreateGroupAnimal from '../components/animals/animals/groupAnimal';
import ListAnimals from '../components/animals/animals/list';
import ListAnimalsGroup from '../components/animals/animals/list-animalsGroup';
import ListAnimalsSickBay from '../components/animals/animals/list-animalsSickbay';
import CreateAnimalSickBay from '../components/animals/animals/sickbayCreate';
import ContentWrapper from '../components/common/contentWrapper/contentWrapper';
import Navbar from '../components/common/header/header';
import Sidebar from '../components/common/sidebar/sidebar';
import CreateExpense from '../components/expenses/expenses/create';
import ListExpenses from '../components/expenses/expenses/list';
import CreateFarmer from '../components/farmers/farmer/create';
import ListFarmers from '../components/farmers/farmer/list';
import FarmExpense from '../components/farmexp/farmexp/create';
import CreateFarms from '../components/farms/farms/create';
import ListFarms from '../components/farms/farms/list';
function DashRoutes() {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<ListFarmers />} />
            <Route path="/add-farmer" element={<CreateFarmer />} />
            <Route path="/list-animals" element={<ListAnimals />} />
            <Route path="/add-animal" element={<CreateAnimal />} />
            <Route path="/list-farms" element={<ListFarms />} />
            <Route path="/list-animalsGroup" element={<ListAnimalsGroup />} />
            <Route path="/list-sickbay" element={<ListAnimalsSickBay />} />
            <Route path="/add-farm" element={<CreateFarms />} />
            <Route path="/add-animal-expense" element={<AnimalExpenses />} />
            <Route
              path="/list-animal-expenses"
              element={<AnimalExpensesLists />}
            />
            <Route path="/add-animal-group" element={<CreateGroupAnimal />} />
            <Route path="/add-sickbay" element={<CreateAnimalSickBay />} />
            <Route path="/create-farm-expenses" element={<FarmExpense />} />
            <Route path="/list-expenses" element={<ListExpenses />} />
            <Route path="/add-expense" element={<CreateExpense />} />
          </Routes>
        </ContentWrapper>
      </Layout>
    </Layout>
  );
}
export default DashRoutes;
