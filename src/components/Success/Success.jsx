import "./Success.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();

  return (
    <div>
      <div className="successContainer">
        <div className="detail">
          <CheckCircleIcon className="icon" />
          <h2>Payment Successfull</h2>
          <p>$ {location.state.total}</p>
          <span>Ref: {location.state.id}</span>
        </div>
        <img src="/image/success.png" alt="" />
      </div>
    </div>
  );
}
