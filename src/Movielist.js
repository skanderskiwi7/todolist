import React from "react";
import Film from "./Film";
export const Movielist = ({ MovieData, handledelete, handleseen }) => {
  console.log(MovieData);

  return (
    <div>
      {MovieData.map((el) => (
        <Film Movie={el} handledelete={handledelete} handleseen={handleseen} />
      ))}
    </div>
  );
};
