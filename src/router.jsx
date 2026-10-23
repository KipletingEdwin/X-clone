
import { createBrowserRouter } from "react-router";
import { Explore } from "./pages/Explore";
import { Notifications } from "./pages/Notifications";
import { Chat } from "./pages/Chat";
import { Calls } from "./pages/Calls";
import { History } from "./pages/History";
import { Premium } from "./pages/Premium";
import { More } from "./pages/More";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { AuthLayout } from "./pages/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/calls",
        element: <Calls />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/premium",
        element: <Premium />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/more",
        element: <More />,
      },
    ],
  },
]);

export default router;
