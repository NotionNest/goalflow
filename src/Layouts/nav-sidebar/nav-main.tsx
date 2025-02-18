import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePermissionRoutes } from "@/routes/hooks/use-permission-routes";

import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    children: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
    ],
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function NavMain() {
  const permissionRoutes = usePermissionRoutes();

  const menuList = useMemo(() => {
    return permissionRoutes
      .map((item) => {
        if (!item.meta) return null;
        const { label, key, icon } = item.meta!;
        return {
          title: label,
          url: key,
          icon: icon,
        };
      })
      .filter((item) => item);
  }, [permissionRoutes]);

  return (
    <div className="flex items-center justify-between">
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {menuList.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  {/* <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a> */}
                  <NavLink to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
                {item.children?.length ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-180">
                        <ChevronDown />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link to={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : null}
                {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuItem>
                    <span>Edit Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Delete Project</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  );

  // <Collapsible defaultOpen className="group/collapsible">
  //   <SidebarGroup>
  //     <SidebarGroupLabel asChild>
  //       <CollapsibleTrigger>
  //         Help
  //         {/* <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /> */}
  //       </CollapsibleTrigger>
  //     </SidebarGroupLabel>
  //     <SidebarGroupAction title="Add Project">
  //       <Plus /> <span className="sr-only">Add Project</span>
  //     </SidebarGroupAction>
  //     <CollapsibleContent>
  //       <SidebarGroupContent>1212</SidebarGroupContent>
  //     </CollapsibleContent>
  //   </SidebarGroup>
  // </Collapsible>
}
