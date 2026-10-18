"use client";
import { BellIcon, MoonIcon, PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-react";
import Button from "../button/button";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useSidebarStore } from "@/store/sidebar.store";

const Header = () => {
  const pathname = usePathname();
  const headerTitle = pathname.split("/")[1];
  const { openSidebar, setOpenSidebar } = useSidebarStore();
  const t = useTranslations();
  return (
    <div className="flex justify-between items-center py-2 px-5 bg-surface border-b border-border-muted">
      <div className="flex gap-2 items-center">
        <Button variant="icon" onClick={() => setOpenSidebar(!openSidebar)}>
          {openSidebar ? (
            <PanelRightOpenIcon className="size-5" />
          ) : (
            <PanelRightCloseIcon className="size-5" />
          )}
        </Button>
        <p className="font-semibold text-xl text-foreground">
          {t(`Header.sections.${headerTitle}`)}
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="icon">
          <BellIcon className="size-5" />
        </Button>
        <Button variant="icon">
          <MoonIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
