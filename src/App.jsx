import { Route, Routes } from "react-router-dom"
import { Layouts } from "./components/layouts"
import { Home } from "./pages/home"
import { routes } from "./routes"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import { CircleLoader } from "react-spinners"
import { GetContext } from "./components/context"

function App() {
  const setRoutes = () =>
    routes.map(({ id, path, element }) => (
      <Route path={path} element={element} key={id} />
    ))



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          {setRoutes()}
        </Route>
      </Routes>
      <ToastContainer />


    </div>
  )
}

export default App
