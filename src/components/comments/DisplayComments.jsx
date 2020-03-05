import React from "react";
import OneComment from "../comments/OneComment";

export default function DisplayComments({ comments, clbk }) {
  return (
      <ul className="display-comments">
      <h3 className="title-3">Commentaires</h3>
        {comments && comments.length===0 && <p className="text-center">Pas encore de commentaire...</p>}
        {comments.map(c => {
          return !c.isResponse && <OneComment comment={c} clbk={clbk} />;
        })}
      </ul>
  );
}
