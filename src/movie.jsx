import React, { useContext } from "react";
import { Kino } from "./context";

const Movie = (props) => {
  const [data, setData] = useContext(Kino);

  const onDelete = (e) => {
      setData((prev)=>
          prev.filter(value=> {return value.id !==e })
      )
  };

  const onEdit = ()=>{
    
  }

  return (
    <div>
      <h1>Name: {props.movieData.name} </h1>
      <h3>Prize: {props.movieData.prize} </h3>
      <button onClick={() => onDelete(props.movieData.id)}>delete</button>
      <button onClick={()=> onEdit(props.movieData.id)}>Edit</button>
      <hr />
    </div>
  );
};

export default Movie;
