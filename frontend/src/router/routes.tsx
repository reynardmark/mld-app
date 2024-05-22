import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Error } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Error />} />),
);

export default router;
