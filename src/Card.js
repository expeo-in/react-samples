//import "./Card.css";
import styles from "./Card.module.css";

export default function Card({
  heading = "Sample heading",
  children,
  onDetailClick,
}) {
  // const heading = props.heading;
  // const body = props.body;

  return (
    <div>
      <h1 className={styles["my-card-header"]}>{heading}</h1>
      <div className={styles["my-card-body"]} style={{ borderRadius: "10px" }}>
        {children}
      </div>
      <button className="btn btn-primary" onClick={onDetailClick}>
        Details
      </button>
    </div>
  );
}
