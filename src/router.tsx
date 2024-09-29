import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import StatisticPage from "./pages/StatisticPage/StatisticPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PricePage from "./pages/PricePage/PricePage";
import PageWrapper from "./pages/PageWrapper/PageWrapper";

const router = createBrowserRouter([
    {
        element: (
            <PageWrapper />
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