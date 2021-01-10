import React from "react";
import Calendar  from "../../calendar";
import "./style.css";

export const Body  = () => {

  return (
    <div className="main_body">
        <h3 className="main_body_title">〇〇年〇月のシフト確認</h3>
        <div className="main_body_search">
        <input className="main_body_search--select" type="month"/>
        <input className="main_body_search--button" type="button" value="検索" />
        </div>
        <Calendar />
    </div>
  );
};