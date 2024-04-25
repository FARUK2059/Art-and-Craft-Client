import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>
    },
]);

export default router;