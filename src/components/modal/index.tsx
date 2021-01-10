import React from "react";
import Modal from "react-modal";
import "./style.css";

interface Props {
  handleClose: () => void;
  open: boolean;
  body: string;
}

// モーダルのスタイルを指定するための変数
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "20vw",
    marginLeft: "-30vw",
    padding: "2vw 10vw",
    backgroundColor: "rgba(255,255,255, 2)",
  },
};


export const FormModal = (props: Props) => {
  // モーダルを設定するHTMLの要素を指定する
  Modal.setAppElement("#root");
  return (
    <Modal
      // モーダルの開閉を管理するprops
      isOpen={props.open}
      onRequestClose={props.handleClose}
      // 先ほど定義した、モーダルのスタイルをpropsとして渡す
      style={customStyles}
    >
      <form className="flex direction_column horizontal_center vertical_center">
      <h2 className="input_menu">タスクを追加</h2>
      <div>
        <h4 className="input_title">ジャンル</h4>
        <div className="task_genre">
        </div>
        <h4 className="input_title">タイトル</h4>
        <input type="text" />
        <h4 className="input_title">説明</h4>
        <textarea />
        <h4 className="input_title">期限</h4>
        <input className="input_date" type="date" />
      </div>
      <input className="input_submit" type="button" value="送信" />
      <button className="button delete_button" type="button">
        このタスクを削除する
      </button>
    </form>
    </Modal>
  );
};