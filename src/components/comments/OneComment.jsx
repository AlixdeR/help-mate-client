import React, { useState } from "react";

export default function OneComment({ comment, clbk }) {
  const [hidden, setHidden] = useState(true);

  const handleDisplayResponses = e => {
    if(hidden===true) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  return (
     <li className="comment-element">
      <article className="message comment"><p className="message-body">{comment.text} </p> </article>
      {(comment.response.map((r) => <article className={hidden===true ? "message reponse is-dark is-hidden" : "message reponse is-dark"}><p className="message-body" key={r._id}>{r.text} </p></article>))}
      <a onClick={e => clbk(e, comment._id)} className="see-response">Répondre</a>
      <a onClick={handleDisplayResponses} className="see-response"> {hidden===true ? `Voir ${comment.response.length} réponse(s)` : `Cacher ${comment.response.length} réponse(s)`}</a>
      </li>
  );
}
