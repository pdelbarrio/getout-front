import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext, AuthContextProvider } from "./context/auth.context";
import { SpotContextProvider } from "./context/spot.context";
import Authenticate from "./pages/Authenticate";
import Categories from "./pages/Categories";
import ErrorForm from "./pages/ErrorForm";
import SpotById from "./pages/SpotById";
import SpotFormPage from "./pages/SpotFormPage";
import SpotsByCategory from "./pages/SpotsByCategory";
import StyleGuide from "./pages/StyleGuide";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuProvider } from "./context";
import Navbar from "./components/nav/index";
import { GlobalStyle } from "./ui/GlobalStyle";
import FavoritePage from "./pages/FavoritePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SpotContextProvider>
          <GlobalStyle />
          <BrowserRouter>
            <MenuProvider>
              <Navbar />
            </MenuProvider>
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
                      <h1>edit spot</h1>
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <h1>MY PROFILE</h1>
                  </ProtectedRoute>
                }
              />
              <Route
                path="about-us"
                element={
                  <ProtectedRoute>
                    <h1>ABOUT US</h1>
                  </ProtectedRoute>
                }
              />

              <Route
                path="new-spot"
                element={
                  <ProtectedRoute>
                    <SpotFormPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="categories"
                element={
                  <ProtectedRoute>
                    <Categories />
                  </ProtectedRoute>
                }
              />
              <Route
                path="spots/:type"
                element={
                  <ProtectedRoute>
                    <SpotsByCategory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="spot/:id"
                element={
                  <ProtectedRoute>
                    <SpotById />
                  </ProtectedRoute>
                }
              />
              <Route
                path="favorites"
                element={
                  <ProtectedRoute>
                    <FavoritePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route path="styleguide" element={<StyleGuide />} />
              <Route path="*" element={<ErrorForm />} />
            </Routes>
          </BrowserRouter>
        </SpotContextProvider>
      </AuthContextProvider>

      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
