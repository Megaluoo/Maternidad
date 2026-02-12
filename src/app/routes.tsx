import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Budget } from "./pages/Budget";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
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
], {
  // CAMBIA ESTO TAMBIÉN PARA QUE COINCIDA CON vite.config.ts
  basename: "/nombre-de-tu-repo" 
});
