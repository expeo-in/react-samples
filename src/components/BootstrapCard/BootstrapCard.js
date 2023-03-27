export default function BootstrapCard({ heading, children }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 className="card-title">{heading}</h5>
          <p className="card-text">{children}</p>
          <a href="#" className="btn btn-primary">
            {actionText}
          </a> */}
          {children}
        </div>
      </div>
    </>
  );
}
