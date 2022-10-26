import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import AnimalExpenses from "../components/animalexp/animalexp/create";
import AnimalExpensesLists from "../components/animalexp/animalexp/lists";
import CreateAnimal from "../components/animals/animals/create";
import CreateCategory from "../components/animals/animals/create-category";
import CreateAnimalFeed from "../components/animals/animals/feed-create";
import ListAnimalFeeds from "../components/animals/animals/feed-list";
import CreateGroupAnimal from "../components/animals/animals/groupAnimal";
import ListAnimals from "../components/animals/animals/list";
import ListAnimalsGroup from "../components/animals/animals/list-animalsGroup";
import ListAnimalsSickBay from "../components/animals/animals/list-animalsSickbay";
import ListAnimalsCategory from "../components/animals/animals/list-category";
import ListVaccinations from "../components/animals/animals/list-vaccination";
import CreateAnimalSickBay from "../components/animals/animals/sickbayCreate";
import VacinateAnimal from "../components/animals/animals/vaccination";
import ContentWrapper from "../components/common/contentWrapper/contentWrapper";
import Navbar from "../components/common/header/header";
import Sidebar from "../components/common/sidebar/sidebar";
import CreateEvent from "../components/events/events/create";
import EventList from "../components/events/events/list";
import CreateExpense from "../components/expenses/expenses/create";
import ListExpenses from "../components/expenses/expenses/list";
import CreateFarmer from "../components/farmers/farmer/create";
import ListFarmers from "../components/farmers/farmer/list";
import FarmExpense from "../components/farmexp/farmexp/create";
import CreateFarms from "../components/farms/farms/create";
import ListFarms from "../components/farms/farms/list";
function DashRoutes() {
  return (
    <Layout style={{ height: "100%" }}>
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
            <Route path="/add-expense" element={<CreateExpense />} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/list-category" element={<ListAnimalsCategory />} />
            <Route path="/create-animal-feed" element={<CreateAnimalFeed />} />
            <Route path="/list-animal-feed" element={<ListAnimalFeeds />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="/vaccinate" element={<VacinateAnimal />} />
            <Route path="list-vaccination" element={<ListVaccinations />} />
          </Routes>
        </ContentWrapper>
      </Layout>
    </Layout>
  );
}
export default DashRoutes;
