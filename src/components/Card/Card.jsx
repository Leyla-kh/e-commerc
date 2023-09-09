import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ item, key }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <Link className="link" to={`/product/${item._id}`}>
      <div className="card">
        <div className="images">
          {item?.isNew && <span className="newProduct">NEW</span>}
          <img
            src={PF + item.img[0]}
            alt="product first view"
            className="mainImage"
          />
          <img
            src={PF + item.img[1]}
            alt="product second view"
            className="secondImage"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          {item.oldPrice && <h3 className="oldPrice">{item.oldPrice} $</h3>}
          <h3>{item.newPrice} $</h3>
        </div>
      </div>
    </Link>
  );
}
