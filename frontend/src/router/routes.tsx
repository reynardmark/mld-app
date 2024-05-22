import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Error } from "../pages";
import MainPage from "../layouts/MainPage";
import { Dashboard, Planner } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route element={<MainPage />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
      </Route>
    </Route>,
  ),
);

export default router;
