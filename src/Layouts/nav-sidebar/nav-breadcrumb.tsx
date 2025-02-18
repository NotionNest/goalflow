import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Archive,
  ArchiveX,
  ChartArea,
  ChartBar,
  ChartLine,
  ChartNoAxesCombined,
  ChartPie,
  CircleDot,
  Gauge,
  Info,
  List,
  ListTree,
  MessagesSquare,
  Orbit,
  Radar,
  Radical,
  Settings,
  Table,
  TableProperties,
  Trash2,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const menus: any[] = [
  {
    title: "dashboard",
    icon: Gauge,
    to: "/dashboard",
    children: [
      {
        title: "overview",
        label: "128",
        icon: Gauge,
        to: "/dashboard/overview",
      },
      {
        title: "analysis",
        label: "9",
        icon: ChartNoAxesCombined,
        to: "/dashboard/analysis",
      },
      {
        title: "workplace",
        icon: Orbit,
        to: "/dashboard/workplace",
      },
    ],
  },
  {
    title: "forms",
    label: "12",
    icon: MessagesSquare,
    to: "/form",
    children: [
      {
        title: "basic_form",
        label: "23",
        icon: ArchiveX,
        to: "/form/basic-form",
      },
      {
        title: "step_form",
        icon: Trash2,
        to: "/form/step-form",
      },
      {
        title: "advanced_form",
        icon: Archive,
        to: "/form/advanced-form",
      },
    ],
  },
  {
    title: "table",
    to: "/list",
    icon: Table,
    children: [
      {
        title: "data_table",
        label: "128",
        icon: List,
        to: "/list/data-table",
      },
      {
        title: "pro_table",
        icon: TableProperties,
        to: "/list/pro-table",
      },
      {
        title: "table_list",
        label: "972",
        icon: TableProperties,
        to: "/list/table-list",
      },
      {
        title: "card_list",
        label: "8",
        icon: ListTree,
        to: "/list/card-list",
      },
    ],
  },
  {
    title: "charts",
    icon: ChartLine,
    to: "/charts",
    children: [
      {
        title: "area_chart",
        icon: ChartArea,
        to: "/charts/area-chart",
      },
      {
        title: "bar_chart",
        icon: ChartBar,
        to: "/charts/bar-chart",
      },
      {
        title: "line_chart",
        icon: ChartLine,
        to: "/charts/line-chart",
      },
      {
        title: "pie_chart",
        icon: ChartPie,
        to: "/charts/pie-chart",
      },
      {
        title: "radar_chart",
        icon: Radar,
        to: "/charts/radar-chart",
      },
      {
        title: "radial_chart",
        icon: Radical,
        to: "/charts/radial-chart",
      },
      {
        title: "tooltip_chart",
        icon: CircleDot,
        to: "/charts/tooltip",
      },
    ],
  },
  {
    title: "settings",
    icon: Settings,
    to: "/settings",
  },
  {
    title: "system",
    icon: Info,
    to: "/system",
    children: [
      {
        title: "about",
        icon: Info,
        to: "/system/about",
      },
    ],
  },
] as const;

interface Breadcrumb {
  title: string;
  to: string;
  isLast: boolean;
}

export function NavBreadcrumb({ className }: { className?: string }) {
  // const { data: menus } = useNavMenu();

  const findMenuPath = (
    pathname: string,
    items: any[],
    parents: any[] = []
  ): (any & { parents: any[] }) | null => {
    for (const item of items) {
      if (item.to === pathname) {
        return { ...item, parents };
      }

      if (item.children?.length) {
        const found = findMenuPath(pathname, item.children, [...parents, item]);
        if (found) return found;
      }
    }
    return null;
  };
  const buildBreadcrumbs = (): Breadcrumb[] => {
    const menuPath = findMenuPath(location.pathname, menus);
    if (!menuPath) return [];
    const breadcrumbs: Breadcrumb[] = [];

    // 添加父级菜单
    menuPath.parents.forEach((parent: any) => {
      breadcrumbs.push({
        title: parent.title,
        to: parent.to,
        isLast: false,
      });
    });

    // 添加当前菜单
    breadcrumbs.push({
      title: menuPath.title,
      to: menuPath.to,
      isLast: true,
    });

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="">
        {" "}
        {breadcrumbs.map((item) => (
          <React.Fragment key={item.to}>
            <BreadcrumbItem>
              {!item.isLast ? (
                <BreadcrumbLink asChild>
                  <Link to={item.to}>{item.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>title</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
