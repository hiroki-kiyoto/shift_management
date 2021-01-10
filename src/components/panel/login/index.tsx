import React from "react";
import "./style.css";

export const Panel = () => {
  return (
    <div className="panel">
      <h2 className="panel_title">ログインページ</h2>
      <h3 className="panel_item">メールアドレス</h3>
      <input className="input_text"　type="text" />
      <h3 className="panel_item">パスワード</h3>
      <input className="input_text"　type="text" /> <br/>
      <input className="input_submit" type="button" value="ログイン" />
    </div>
  );
};