import Navbar from "../components/common/header/header";
import Sidebar from "../components/common/sidebar/sidebar";
import { Layout } from "antd";
import ContentWrapper from "../components/common/contentWrapper/contentWrapper";
import { Routes, Route } from "react-router-dom";
import CreateFarmer from "../components/farmers/farmer/create";
import ListFarmers from "../components/farmers/farmer/list";
import ListAnimals from "../components/animals/animals/list";
import CreateAnimal from "../components/animals/animals/create";
import ListFarms from "../components/farms/farms/list";
import CreateFarms from "../components/farms/farms/create";
import ListExpenses from "../components/expenses/expenses/list";
import CreateExpense from "../components/expenses/expenses/create";
function DashRoutes() {
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <Navbar />
                <ContentWrapper>
                    <Routes>
                        <Route exact path="/" element={<ListFarmers />}></Route>
                        <Route
                            exact
                            path="/add-farmer"
                            element={<CreateFarmer />}
                        ></Route>
                        <Route
                            exact
                            path="/list-animals"
                            element={<ListAnimals />}
                        ></Route>
                        <Route
                            exact
                            path="/add-animal"
                            element={<CreateAnimal />}
                        ></Route>
                        <Route
                            exact
                            path="/list-farms"
                            element={<ListFarms />}
                        ></Route>
                        <Route
                            exact
                            path="/add-farm"
                            element={<CreateFarms />}
                        ></Route>
                        <Route
                            exact
                            path="/list-expenses"
                            element={<ListExpenses />}
                        ></Route>
                        <Route
                            exact
                            path="/add-expense"
                            element={<CreateExpense />}
                        ></Route>
                    </Routes>
                </ContentWrapper>
            </Layout>
        </Layout>
    );
}
export default DashRoutes;
