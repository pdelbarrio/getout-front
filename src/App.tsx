import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";

function App() {
  return (
    <Layout>
      {/* TODO: ADD CONDITIONAL NAV */}

      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Authenticate</h1>} />
          <Route path="edit">
            <Route path="profile" element={<h1>Edit Profile</h1>} />
            <Route path="spot" element={<h1>Edit Spot</h1>} />
          </Route>

          {/* /* TODO: FIX ROUTES OF SPOTS  */}
          <Route path={"categories"}></Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
