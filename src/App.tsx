import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/auth.context";
import Authenticate from "./pages/Authenticate";
import Categories from "./pages/Categories";
import ErrorForm from "./pages/ErrorForm";
import SpotById from "./pages/SpotById";
import SpotFormPage from "./pages/SpotFormPage";
import SpotsByCategory from "./pages/SpotsByCategory";
import StyleGuide from "./pages/StyleGuide";
import Layout from "./ui/Layout";

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        {/* TODO: ADD CONDITIONAL NAV */}

        <BrowserRouter>
          <Routes>
            <Route index element={<Authenticate />} />
            <Route path="edit">
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <h1>Edit Profile</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="spot"
                element={
                  <ProtectedRoute>
                    <SpotFormPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="new-spot"
              element={
                <ProtectedRoute>
                  <h1>NEW SPOT</h1>
                </ProtectedRoute>
              }
            />
            {/* /* TODO: FIX ROUTES OF SPOTS BY CATEGORY  */}
            <Route
              path="/categories"
              element={
                <ProtectedRoute>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path="/spots/:type"
              element={
                <ProtectedRoute>
                  <SpotsByCategory />
                </ProtectedRoute>
              }
            />
            <Route path="/spot/:id" element={<SpotById />} />
            <Route path="styleguide" element={<StyleGuide />} />
            <Route path="*" element={<ErrorForm />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
