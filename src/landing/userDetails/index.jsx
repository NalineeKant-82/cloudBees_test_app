import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseAxios from "../../useAxios";
import { Avatar } from "@mui/material";
import "./index.css";
const UserrDetails = () => {
  const params = useParams();
  const { fetchData, data } = UseAxios();

  useEffect(() => {
    getUserDetails();
  }, [params]);

  const getUserDetails = () => {
    fetchData(`https://api.github.com/users/${params?.username}`);
  };
  return (
    <div className="containerStyle">
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Avatar
          alt="users image"
          src={data?.avatar_url}
          style={{ width: "80px", height: "80px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ display: "flex" }}>
            <span>
              <b>Name :</b>
            </span>
            <p>{data?.login}</p>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <b>Company :</b>
            </span>
            {data?.company ? <p>{data?.company}</p> : <p>don't have company</p>}
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <b>twitter :</b>
            </span>
            <span>
              {data?.twitter_username
                ? data?.twitter_username
                : `don't have twitter`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserrDetails;
