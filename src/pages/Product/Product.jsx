import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/cartReducer";

export default function Product() {
  const productId = useParams().id;
  const [selectedImg, setSelectedImg] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/find/${productId}`);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="product">
      {error ? (
        "somthing went wrong"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={PF + data?.img?.[0]}
                alt=""
                onClick={(e) => setSelectedImg(e.target.src)}
              />
              <img
                src={PF + data?.img?.[1]}
                alt=""
                onClick={(e) => setSelectedImg(e.target.src)}
              />

              {data?.img?.[2] && (
                <img
                  src={PF + data?.img?.[2]}
                  alt=""
                  onClick={(e) => setSelectedImg(e.target.src)}
                />
              )}
            </div>

            <img
              src={selectedImg ? selectedImg : PF + data?.img?.[0]}
              alt=""
              className="mainImg"
            />
          </div>
          <div className="right">
            <h1>{data?.title}</h1>
            <span className="price">$ {data?.newPrice}</span>
            <p>{data?.desc}</p>
            <div className="guantity">
              <button
                onClick={(e) =>
                  setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)
                }
              >
                -
              </button>
              {quantity}
              <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addproduct({
                    id: data._id,
                    title: data.title,
                    desc: data.desc,
                    price: data.newPrice,
                    image: data.img[0],
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              ADD TO CARD
            </button>
            <div className="links">
              <div className="link">
                <FavoriteBorderIcon /> ADD TO FAVORITES
              </div>
              <div className="link">
                <CompareIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Product Type : T-shirt</span>
              <span>Tag : T-shirt , Women , Top</span>

              <hr />
              <div className="detailes">
                <span>DESCRIPTION</span>
                <hr className="shortLine" />
                <span>ADDITIONAL INFORMATION</span>
                <hr className="shortLine" />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
