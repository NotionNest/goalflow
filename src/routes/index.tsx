import { Suspense } from "react";
import {
  createHashRouter,
  Navigate,
  Outlet,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import Layout from "@/Layouts";
import { AppRouteObject } from "#/router";
import { ERROR_ROUTE } from "./routes/error-routers";
import { usePermissionRoutes } from "./hooks/use-permission-routes";

const PUBLIC_ROUTE: AppRouteObject = {
  path: "/login",
  element: <div>Login</div>,
};

const NO_MATCHED_ROUTE: AppRouteObject = {
  path: "*",
  element: <Navigate to="/404" replace />,
};

export default function Router() {
  const permissionRoutes = usePermissionRoutes();
  const PROTECTED_ROUTE: AppRouteObject = {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard"} replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={"/dashboard/workbench"} replace />,
          },
          ...permissionRoutes,
        ],
      },
    ],
  };
  const routes = [
    PUBLIC_ROUTE,
    PROTECTED_ROUTE,
    ERROR_ROUTE,
    NO_MATCHED_ROUTE,
  ] as RouteObject[];

  const router = createHashRouter(routes);

  return <RouterProvider router={router} />;
}
