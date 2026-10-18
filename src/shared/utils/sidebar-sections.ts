import {
  BotIcon,
  BoxIcon,
  ChartNoAxesCombinedIcon,
  CircleQuestionMarkIcon,
  LayoutDashboardIcon,
  MessagesCircleIcon,
  SettingsIcon,
  ShoppingBagIcon,
  StoreIcon,
  UsersIcon,
} from "lucide-react";

export const sidebarSections = [
  {
    id: 1,
    title: "sections.main.title",
    items: [
      {
        label: "sections.main.dashboard",
        icon: LayoutDashboardIcon,
        href: "/dashboard",
      },
      {
        label: "sections.main.conversations",
        icon: MessagesCircleIcon,
        href: "/conversations",
      },
      {
        label: "sections.main.agent",
        icon: BotIcon,
        href: "/agent",
      },
      {
        label: "sections.main.products",
        icon: BoxIcon,
        href: "/products",
      },
      {
        label: "sections.main.orders",
        icon: ShoppingBagIcon,
        href: "/orders",
      },
      {
        label: "sections.main.clients",
        icon: UsersIcon,
        href: "/clients",
      },
    ],
  },
  {
    id: 2,
    title: "sections.admin.title",
    items: [
      {
        label: "sections.admin.reports",
        icon: ChartNoAxesCombinedIcon,
        href: "/reports",
      },
      {
        label: "sections.admin.configuration",
        icon: SettingsIcon,
        href: "/configuration",
      },
      {
        label: "sections.admin.stores",
        icon: StoreIcon,
        href: "/stores",
      },
      {
        label: "sections.admin.help",
        icon: CircleQuestionMarkIcon,
        href: "/help",
      },
    ],
  },
];
