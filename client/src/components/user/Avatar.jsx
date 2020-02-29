import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Avatar({ clbk, avatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className='avatar-placeholder'>
        <figure className="image is-128x128">
            {avatar && <img className='is-rounded' src={avatar} alt="avatar" width='250' />}
        </figure>
      <FontAwesomeIcon
        onClick={handleClick}
        className="is-clickable"
        icon={faEdit}/>
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        onChange={clbk}/>
    </div>
  );
}
