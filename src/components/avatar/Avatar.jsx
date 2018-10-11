import React from "react";
import "./avatar.scss";

const Avatar = props => {
  const style = { backgroundImage: `url(${props.url})` };
  return (
    <div className="Avatar ">
      <div style={style} className="Avatar__image" />
    </div>
  );
};

export default Avatar;
