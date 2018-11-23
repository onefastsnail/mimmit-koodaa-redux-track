import React from "react";
import Result from "./Result";

export default ({ data }) => {
  return (
    <div>
      {data.length > 0 && <h2>{data.length} results found 😃</h2>}

      {data.map((result, index) => (
        <Result key={index} data={result} />
      ))}

      {data.length === 0 && <p>No results found 🤪</p>}
    </div>
  );
};
