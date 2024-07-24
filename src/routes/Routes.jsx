import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Calculator from "../pages/calculator/Calculator";
import WordCounter from "../pages/calculator/WordCounter";
import Home from "../pages/Home";
import Color from "../pages/color/Color";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "/calculator",
                element: <Calculator />
            },
            {
                path: "/wordCounter",
                element: <WordCounter />
            },
            {
                path: '/color',
                element: <Color />
            }
        ]
    },
]);
export default router;