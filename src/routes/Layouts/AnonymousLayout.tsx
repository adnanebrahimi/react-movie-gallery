import { Outlet } from "react-router-dom";

export default function AnonymousLayout() {
  return (
    <main className="flex flex-col items-center h-full justify-center">
      <header>
        <img src="/logo192.png" alt="Logo" width={'150px'} height={'150px'} />
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </main>
  );
}
