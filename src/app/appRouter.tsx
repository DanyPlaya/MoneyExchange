import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./appLayout";
import { MainPage } from "@/pages/main";

export const AppRouter = () => {
  return createBrowserRouter([
    {
      element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
};
