import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import StatisticPage from "./pages/StatisticPage/StatisticPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PricePage from "./pages/PricePage/PricePage";

const router = createBrowserRouter([
    {
        element: (
            <Header />
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/statistic',
                element: <StatisticPage />
            },
            {
                path: '/news',
                element: <PricePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
        ]
    }
])

export default router;