import Header from "@/shared/components/header/header";
import Sidebar from "@/shared/components/sidebar/sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
