import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ item, key }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          {item?.attributes?.isNew && <span>NEW</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img1?.data.attributes.url
            }
            alt="product first view"
            className="mainImage"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data.attributes.url
            }
            alt="product second view"
            className="secondImage"
          />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
          {item.attributes?.oldPrice && <h3>{item.attributes?.oldPrice} $</h3>}
          <h3>{item.attributes?.newPrice} $</h3>
        </div>
      </div>
    </Link>
  );
}
