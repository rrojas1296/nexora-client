"use client";
import Card from "@/shared/components/card/card";
import { cn } from "cn";
import { useTranslations } from "next-intl";

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

const DashboardPage = () => {
  const t = useTranslations("Dashboard");
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
    </div>
  );
};

export default DashboardPage;
