import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));

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
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
