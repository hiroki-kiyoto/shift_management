import React from "react";
import { Header } from "../../components/header";
import { Body } from "../../components/body/shiftregist";

export const Shiftregist = () => {
  return (
    <div className="main">
      <Header />
      <h2 className="main_title">シフト登録ページ</h2>  
      <Body />
    </div>
  );
}