import React, { useEffect } from "react";
import UseAxios from "../../useAxios";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./index.css";
const GetUser = () => {
  const { fetchData, data, error } = UseAxios();

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetchData("https://api.github.com/users");
  };

  return (
    <div className="container">
      <ul>
        {!error &&
          data?.map((item) => (
            <li
              key={item.id}
              className="listStyle"
              onClick={() => navigate(`/users/${item.login}`)}
            >
              <Avatar
                alt="user details image"
                style={{ width: "30px", height: "30px" }}
                src={item.avatar_url}
              />
              <Typography>{item.login}</Typography>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GetUser;
