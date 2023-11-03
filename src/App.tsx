import { BrowserRouter , Route, Routes } from "react-router-dom"
import UsersSkillsPage from "./pages/UsersSkillsPage"
import HomePage from "./pages/HomePage"
import Layout1 from "./components/layout/header/Layout"
import UsersEducationPage from "./pages/UsersEducationPage"

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="" element={<Layout1/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="users/skills" element={<UsersSkillsPage />} />
          <Route path="users/education" element={<UsersEducationPage />} />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
