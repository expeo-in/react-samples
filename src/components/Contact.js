import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <>
      <h1>Contact</h1>
      <button onClick={handleClick}>Go to Users</button>
    </>
  );
}
