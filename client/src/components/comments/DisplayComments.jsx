import React from "react";
import OneComment from "../comments/OneComment";

export default function DisplayComments({ comments, clbk }) {
  return (
    <div className="display-comments">
      {comments.map(c => {
        return !c.isResponse && <OneComment comment={c} clbk={clbk} />;
      })}
    </div>
  );
}
