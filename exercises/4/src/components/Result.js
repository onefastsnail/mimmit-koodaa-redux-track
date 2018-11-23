import React from "react";

export default ({ data: { Name, Type } }) => {
  return (
    <div className="c-result">
      <div
        className="c-result__image"
        style={{
          backgroundImage: `url(//fakeimg.pl/200x200/f5d8ec/ffffff/?text=${Type})`
        }}
      />
      <div className="c-result__body">
        <h3>{Name}</h3>
      </div>
    </div>
  );
};
