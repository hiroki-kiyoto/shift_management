import React from "react";
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <div className="header flex vertical_center">
      <FeaturedPlayListIcon className="header_icon" fontSize="large"></FeaturedPlayListIcon>
      <span className="header_title">Shift Management</span>
      <ul className="header_menu">
        {/*条件式を入れること*/}
        <Link to="/registration"><li>新規登録</li></Link>
        <Link to="/"><li>ログイン</li></Link>
        <Link to="/"><li>ログアウト</li></Link>
        <Link to="/shiftcheck"><li>シフト確認</li></Link>
        <Link to="/shiftregist"><li>シフト登録</li></Link>
        <Link to="/"><li>ユーザー情報</li></Link>

      </ul>
    </div>
  );
};