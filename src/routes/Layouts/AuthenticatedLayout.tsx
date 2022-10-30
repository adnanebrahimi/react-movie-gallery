import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AuthenticatedLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <main>
      <Header
        openSidebar={openSidebar}
        setOpenSidebar={(open: boolean) => setOpenSidebar(open)}
      ></Header>
      <div>
        <Sidebar openSidebar={openSidebar}></Sidebar>
        <Outlet></Outlet>
      </div>
    </main>
  );
}
