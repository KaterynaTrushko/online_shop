import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import style from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
