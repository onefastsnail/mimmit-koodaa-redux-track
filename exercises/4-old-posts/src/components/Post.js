import React from "react";

export default ({ data: { id, title, body } }) => {
  return (
    <div className="c-post">
      <div
        className="c-post__image"
        style={{
          backgroundImage: `url(//fakeimg.pl/200x200/f5d8ec/ffffff/?text=${id})`
        }}
      />
      <div className="c-post__body">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
