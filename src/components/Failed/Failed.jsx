import "./Failed.scss";
import ErrorIcon from "@mui/icons-material/Error";

export default function Failed() {
  return (
    <div>
      <div className="failedContainer">
        <div className="detail">
          <ErrorIcon className="icon" />
          <h2>Payment Failed</h2>

          <span>Date: </span>
        </div>
        <img src="/image/failed.png" alt="" />
      </div>
    </div>
  );
}
