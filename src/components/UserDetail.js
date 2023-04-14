import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const { fullname, id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users/" + id)
    //   .then((res) => setUserData(res.data));
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <p>fullname: {fullname}</p>
      <p>Id: {id}</p>
      {/* 
      <p>Name: {userData.name}</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p> */}
      <Link to="/users">Back to users</Link>
    </>
  );
}
