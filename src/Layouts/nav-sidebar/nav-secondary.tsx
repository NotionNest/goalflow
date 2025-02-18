import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const navSecondary = [
  {
    title: "Feedback",
    url: "https://github.com/TinsFox/shadcnui-boilerplate/issues",
    icon: Send,
    external: true,
  },
];

export function NavSecondary({
  ...props
}: React.ComponentProps<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <Link to={item.url} target={item.external ? "_blank" : "_self"}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
