import React, { useState } from "react";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("//Write your code here");
  const [locked, setLocked] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  const lockCode = () => {
    setLocked(!locked);
  };

  const saveCode = () => {
    localStorage.setItem("savedCode", code);
  };

  return (
    <div>
      <div className="CodeEditor">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          readOnly={locked}
        />

        <div className="button-container">
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={lockCode}>{locked ? "Unlock" : "Lock"}</button>
          <button onClick={saveCode}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
