import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
const Dashboard = lazy(() => import("../components/Dashboard"));
const LandPage = lazy(() => import("../components/LandingPage"));
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppBar />

          <Routes>
            <Route
              path="/dash"
              element={
                <Suspense fallback={"...loading"}>
                  <Dashboard />
                </Suspense>
              }
            ></Route>
            <Route
              path="/"
              element={
                <Suspense fallback={"..loading"}>
                  <LandPage />
                </Suspense>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      Top bar
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dash")}>Dashboard page</button>
    </div>
  );
}
