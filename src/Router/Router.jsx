import {createBrowserRouter,} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            // Todo: Add your routes here
        ],
    },
]);
export default router;