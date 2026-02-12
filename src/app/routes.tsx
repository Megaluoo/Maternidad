// CAMBIO: Importa createHashRouter en lugar de createBrowserRouter
import { createHashRouter } from "react-router"; 
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Budget } from "./pages/Budget";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

// CAMBIO: Usamos createHashRouter
export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Services },
      { path: "presupuesto", Component: Budget },
      { path: "contacto", Component: Contact },
    ],
  },
]);
