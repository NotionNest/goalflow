import type { ReactNode } from "react";
import type { Params, RouteObject } from "react-router-dom";

export interface RouteMeta {
  key: string;
  label: string;
  icon?: ReactNode;
  params?: Params<string>;
}

export type AppRouteObject = {
  order?: number;
  meta?: RouteMeta;
  children?: AppRouteObject[];
} & Omit<RouteObject, "children">;
