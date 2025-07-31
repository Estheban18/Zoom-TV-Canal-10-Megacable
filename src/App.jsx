import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Componentes importados
import Root from "./components/Root/Root";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Regionales from "./components/Regionales/Regionales";
import Nacionales from "./components/Nacionales/Nacionales";
import RedesSociales from "./components/RedesSociales/RedesSociales";
import Menu from "./components/Menu/Menu"; // ✅ Esta línea ya la tenías, mantenla

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "Inicio", element: <Inicio /> },
      { path: "Nosotros", element: <Nosotros /> },
      { path: "Regionales", element: <Regionales /> },
      { path: "Nacionales", element: <Nacionales /> },
      { path: "RedesSociales", element: <RedesSociales /> },
      { path: "Menu", element: <Menu /> }, // ✅ Agregada esta ruta
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
 