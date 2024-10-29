import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="empty-container" style={{marginTop: '0px'}}>
      <img src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"></img>
      <h3
        style={{ color: "crimson", display: "flex", justifyContent: "center" }}
      >{`${err?.status} ${err?.statusText}`}</h3>
      <h4 style={{ color: "red", display: "flex", justifyContent: "center" }}>
        {err?.data}
      </h4>
    </div>
  );
};

export default Error;
