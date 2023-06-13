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
  const productId = parseInt(useParams().id);
  const [selectedImg, setSelectedImg] = useState();
  const [quantity, setQuantity] = useState(1);
  const [test, setTest] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img1?.data?.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg(e.target.src)}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg(e.target.src)}
              />
              {test && (
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img3?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg(e.target.src)}
                />
              )}
            </div>

            <img
              src={
                selectedImg
                  ? selectedImg
                  : process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img1?.data?.attributes?.url
              }
              alt=""
              className="mainImg"
            />
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">$ {data?.attributes?.newPrice}</span>
            <p>{data?.attributes?.desc}</p>
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
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.newPrice,
                    image: data.attributes.img1.data.attributes.url,
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
