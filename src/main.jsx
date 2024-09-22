import "./index.css";
import App from "./App";
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";
import BarChart from "./pages/barChart/BarChart";
import Pie from "./pages/pieChart/Pie";
import LineChart from "./pages/lineChart/LineChart";
import Geography from "./pages/geography/Geography";
import NotFound from "./pages/notFound/NotFound";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="faq" element={<Faq />} />
            <Route path="bar" element={<BarChart />} />
            <Route path="pie-chart" element={<Pie />} />
            <Route path="line-chart" element={<LineChart />} />
            <Route path="geography" element={<Geography />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
