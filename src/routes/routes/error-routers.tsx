import { AppRouteObject } from "#/router";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Page404 = lazy(() => import("@/pages/sys/error/Page404"));

/**
 * error routes
 * 403, 404, 500
 */
export const ERROR_ROUTE: AppRouteObject = {
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  ),
  children: [
    // { path: "403", element: <Page403 /> },
    { path: "404", element: <Page404 /> },
    // { path: "500", element: <Page500 /> },
  ],
};
