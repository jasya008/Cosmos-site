import { Change } from "../pages/AdminPanel/Change";
import { Create } from "../pages/AdminPanel/Create";
import { Register } from "../pages/Authorisation";
import { Login } from "../pages/Authorisation/Login";
import { Objects } from "../pages/Objects";
import { Adminpage } from "../pages/adminPage";
import { ExtroObject } from "../pages/exrtaPageObject";
import { ExtroInfo } from "../pages/extraInfo";
import { NotFound } from "../pages/notFound";
import { Observations } from "../pages/observations";
import { SolarSystem } from "../pages/solarSystem";

export const routes = [
    { id: "page-1", path: "/solarSystem", element: <SolarSystem /> },
    { id: "page-2", path: "/observations", element: <Observations /> },
    { id: "extra-page", path: '/extroInfo/:id', element: <ExtroInfo /> },
    { id: "extra-page-2", path: '/extroObject/:id', element: <ExtroObject /> },
    { id: "admin-page", path: "/adminPage", element: <Adminpage /> },
    { id: "objects-page", path: '/objects', element: <Objects /> },
    { id: "registr", path: '/registr', element: <Register /> },
    { id: "login", path: '/login', element: <Login /> },
    { id: "Admin-1", path: '/create', element: <Create /> },
    { id: "Admin-2", path: '/change/:id', element: <Change /> },
    { id: "notFound", path: "*", element: <NotFound /> }
]