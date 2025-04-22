import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Register = lazy(() => import("./pages/Register"));

import ScreenLoader from "./components/ScreenLoader/ScreenLoader";

function App() {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
