import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Calculator from "../pages/calculator/Calculator";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/calculator",
                element: <Calculator />
            }
        ]
    },
]);
export default router;