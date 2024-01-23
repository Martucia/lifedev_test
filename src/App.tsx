import "@styles/index.sass";
import { Route, Routes } from "react-router-dom";
import CustomersPage from "./pages/Customers";
import NotFoundPage from "./pages/NotFound";
import { ROUTES } from "./shared/constants/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.CUSTOMERS} element={<CustomersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
