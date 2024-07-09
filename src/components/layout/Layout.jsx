import React from "react";
import { NavbarComponent } from "../narbar/NarbarComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className="max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
