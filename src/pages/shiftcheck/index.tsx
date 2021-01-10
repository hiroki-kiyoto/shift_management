import React from "react";
import { Header } from "../../components/header";
import { Body } from "../../components/body/shiftcheck";

export const Shiftcheck = () => {
  return (
    <div className="main">
      <Header />
      <h2 className="main_title">シフト確認ページ</h2>  
      <Body />
    </div>
  );
}