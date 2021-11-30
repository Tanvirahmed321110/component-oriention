// import userEvent from '@testing-library/user-event';
// import { useReducer } from 'react';
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { id, name } = props.allData;
  return (
    <div className="single">
      <h1> name: {name}</h1>
      <h3 className="p-3"> user: {id}</h3>
      <Link to={`/booking/${id}`} data={name}>
        <button>User{id}</button>
      </Link>
    </div>
  );
};

export default Service;
