"use client";
import { usePathname } from "@/i18n/navigation";
import { sidebarSections } from "@/shared/utils/sidebar-sections";
import { useSidebarStore } from "@/store/sidebar.store";
import { cn } from "cn";
import { ChevronDownIcon, MessagesCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("Sidebar");
  const { openSidebar, setOpenSidebar } = useSidebarStore();
  const pathname = usePathname();
  const router = useRouter();

  const goToPage = (href: string) => router.push(href);
  return (
    <div
      className={cn(
        "fixed top-0 left-0 inset-0 lg:pointer-events-auto lg:w-fit lg:static",
        !openSidebar ? "pointer-events-none" : "pointer-events-auto",
      )}
    >
      <aside
        className={cn(
          "h-screen transition-[width,translate] bg-surface border-r border-r-border-muted overflow-x-hidden absolute top-0 left-0 w-65 z-20 lg:static",
          !openSidebar && "-translate-x-full lg:translate-x-0 lg:w-15",
        )}
      >
        <div className="px-3 flex flex-col gap-5 py-3">
          <div className="flex gap-2 items-center">
            <div className="size-9 grid text-foreground-inverse place-items-center bg-primary-500 rounded-xl shrink-0">
              <MessagesCircleIcon className="size-5" />
            </div>
            <p
              className={cn(
                "font-bold text-xl text-foreground whitespace-nowrap",
                !openSidebar && "lg:opacity-0",
              )}
            >
              Nexora <span className="text-muted-foreground">AI</span>
            </p>
          </div>
          <button
            className={cn(
              "py-3 px-2 rounded-3xl text-sm flex justify-between items-center w-full border border-border-muted",
              !openSidebar && "lg:border-transparent lg:px-0",
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "bg-surface-muted rounded-xl grid place-items-center size-9 text-foreground font-semibold shrink-0",
                )}
              >
                MR
              </div>
              <div className={cn("flex flex-col items-start", !openSidebar && "opacity-0")}>
                <p className="text-foreground whitespace-nowrap">Marlet</p>
                <p className="text-muted-foreground whitespace-nowrap">Espacio de trabajo</p>
              </div>
            </div>
            <div
              className={cn(
                "size-9 grid place-items-center shrink-0",
                !openSidebar && "lg:opacity-0",
              )}
            >
              <ChevronDownIcon className="size-5 text-muted-foreground" />
            </div>
          </button>
          <div className="flex flex-col gap-5">
            {sidebarSections.map(({ title, items, id }) => {
              return (
                <div key={id} className="flex flex-col gap-3">
                  <p
                    className={cn(
                      "text-muted-foreground whitespace-nowrap text-sm",
                      !openSidebar && "whitespace-nowrap lg:opacity-0",
                    )}
                  >
                    {t(title)}
                  </p>
                  <div className="flex flex-col gap-1">
                    {items.map(({ label, href, icon: Icon }) => {
                      const selected = pathname.includes(href);
                      return (
                        <button
                          className={cn(
                            "h-9 w-full gap-3 flex justify-start rounded-xl items-center px-2 text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0",
                            selected &&
                              "bg-primary-200 text-primary-500 font-semibold hover:text-primary-500 hover:bg-primary-100",
                            !openSidebar && "lg:size-9",
                          )}
                          onClick={() => goToPage(href)}
                          key={href}
                        >
                          <Icon className="size-5 shrink-0" />
                          <span className={cn("whitespace-nowrap", !openSidebar && "lg:opacity-0")}>
                            {t(label)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <button
        type="button"
        aria-label="Close sidebar"
        onClick={() => setOpenSidebar(false)}
        className={cn(
          "inset-0 bg-black/50 absolute top-0 left-0 z-10 lg:hidden",
          !openSidebar && "opacity-0",
        )}
      />
    </div>
  );
};

export default Sidebar;
