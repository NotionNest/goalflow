import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Workbench = lazy(() => import("@/pages/dashboard/workbench/index"));
const Analysis = lazy(() => import("@/pages/dashboard/analysis/index"));

export function usePermissionRoutes() {
  // if (ROUTE_MODE === "module") {
  //   return getRoutesFromModules();
  // }

  // const permissions = useUserPermission();

  // return useMemo(() => {
  //   if (!permissions) return [];

  //   const flattenedPermissions = flattenTrees(permissions);
  //   return transformPermissionsToRoutes(permissions, flattenedPermissions);
  // }, [permissions]);

  return [
    {
      index: true,
      element: <Navigate to={"/dashboard/workbench"} replace />,
    },
    {
      path: "workbench",
      element: <Workbench />,
      meta: {
        label: "工作台",
        key: "/dashboard/workbench",
        icon: "lucide:home",
      },
    },
    {
      path: "analysis",
      element: <Analysis />,
      meta: {
        label: "分析页",
        key: "/dashboard/analysis",
        icon: "lucide:chart-donut",
      },
    },
  ];
}
