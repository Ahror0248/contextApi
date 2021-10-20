import React, { useContext } from "react";
import { Kino } from "./context";
import Movie from "./movie";

const MovieList = () => {
  const [data, setData] = useContext(Kino);
  console.log(data);
  return (
    <div>
      {data.map((value) => {
        return <Movie key={value.id} movieData={value} />;
      })}
    </div>
  );
};

export default MovieList;
