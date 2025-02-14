import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import Layout from "@/Layouts";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const About = lazy(() => import("@/pages/About"));

const LazyLoad = (Component: React.ElementType) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: LazyLoad(Home),
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "*",
      element: LazyLoad(NotFound),
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default Routes;
