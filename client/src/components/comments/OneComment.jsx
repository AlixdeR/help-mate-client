import React from "react";

export default function OneComment({ comment, clbk }) {
  return (
    <div className="comment">
      <p className="ad-details">{comment.text}</p>
      <button
        onClick={e => clbk(e, comment._id)}
        className="button is-primary is-rounded"
      >
        Répondre
      </button>
    </div>
  );
}
