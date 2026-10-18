"use client";
import SalesChart from "@/features/dashboard/components/sales-chart/sales-chart";
import Card from "@/shared/components/card/card";
import { cn } from "cn";
import { useTranslations } from "next-intl";
import { useState } from "react";

const stats = [
  {
    id: "1",
    title: "stats.totalSales.label",
    subtitle: "stats.totalSales.subtitle",
    increase: true,
    value: "2500 PEN",
    increaseValue: "20.8%",
  },
  {
    id: "2",
    title: "stats.conversations.label",
    subtitle: "stats.conversations.subtitle",
    value: "1500",
    increase: false,
    increaseValue: "20.8%",
  },
  {
    id: "3",
    title: "stats.rateConvertion.label",
    subtitle: "stats.rateConvertion.subtitle",
    value: "24.8%",
    increase: true,
    increaseValue: "20.8%",
  },
  {
    id: "4",
    title: "stats.averageTicket.label",
    subtitle: "stats.averageTicket.subtitle",
    value: "60.00 PEN",
    increase: true,
    increaseValue: "20.8%",
  },
];

const chartBadges: Array<{ label: string; key: ChartBadge }> = [
  {
    label: "salesSummary.badges.week",
    key: "week",
  },
  {
    label: "salesSummary.badges.month",
    key: "month",
  },
  {
    label: "salesSummary.badges.trimester",
    key: "trimester",
  },
];

type ChartBadge = "week" | "month" | "trimester";

const DashboardPage = () => {
  const t = useTranslations("Dashboard");
  const [activeBadge, setActiveBadge] = useState<ChartBadge>("week");
  const userName = "Diego";
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xl font-semibold text-foreground">
          {t("greeting")} <span>{userName}</span>
        </p>
        <p className="text-sm text-muted-foreground mt-1">{t("subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {stats.map(({ id, title, subtitle, value, increase, increaseValue }) => {
          return (
            <Card key={id} className="flex flex-col gap-3">
              <p className="text-base text-muted-foreground">{t(title)}</p>
              <p className="font-bold text-3xl">
                <span>{value}</span>
              </p>
              <p className="text-sm text-foreground">
                <span className={cn(increase ? "text-primary-500" : "text-red-500")}>
                  {increase ? "+" : "-"} {increaseValue}
                </span>{" "}
                <span>{t(subtitle)}</span>
              </p>
            </Card>
          );
        })}
      </div>
      <Card>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-base text-foreground font-semibold">{t("salesSummary.title")}</p>
            <p className="text-sm text-muted-foreground mt-1">{t("salesSummary.subtitle")}</p>
          </div>

          <div className="p-1 rounded-xl bg-background h-9 text-xs">
            {chartBadges.map((cb) => (
              <button
                key={cb.key}
                onClick={() => setActiveBadge(cb.key)}
                className={cn(
                  "px-3 h-full bg-background cursor-pointer rounded-xl",
                  activeBadge === cb.key && "bg-surface",
                )}
              >
                {t(cb.label)}
              </button>
            ))}
          </div>
        </div>
        <SalesChart />
      </Card>
    </div>
  );
};

export default DashboardPage;
