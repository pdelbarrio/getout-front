import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/auth.context";
import Authenticate from "./pages/Authenticate";
import Layout from "./ui/Layout";

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        {/* TODO: ADD CONDITIONAL NAV */}

        <BrowserRouter>
          <Routes>
            <Route index element={<Authenticate />} />
            <Route path="edit" element={<Navigate to="/" />}>
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
                    <h1>Edit Spot</h1>
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
              path="spots"
              element={
                <ProtectedRoute>
                  <h1>SPOTS</h1>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
