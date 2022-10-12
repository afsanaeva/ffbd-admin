import * as React from "react";
import AppBar from "./appBar";
import style from "../styles/signup.module.css";

export default function CreateBrand() {
  return (
    <>
     <AppBar />
      <div className="container">
        <div className={style.createBrand}>
            <b>Hello xyz</b>
            <p>
            Thank you for registering your account at our website. Your account need the approval before sign in. Please keep checking your email. Best regards Fanfare Bangladesh Ltd.
            </p>
            </div>
      </div>
    </>
  );
}
