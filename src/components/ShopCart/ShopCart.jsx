import "./ShopCart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeproduct, resetCart } from "../../redux/cartReducer";
import { useState } from "react";
import Paypal from "../Paypal/Paypal";

export default function ShopCart({ setOpen }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products?.forEach((p) => (total += p.quantity * p.price));
    return total.toFixed(2);
  };
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <div className="shopCart">
      {openPayment && (
        <Paypal products={products} total={totalPrice()} setOpen={setOpen} />
      )}
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <>
          <div className="item" id={item.id}>
            <div className="itemDetail">
              <img src={PF + item.image} alt="" />
              <div className="info">
                <h2>{item.title}</h2>

                <div className="price">
                  {item.quantity} x ${item.price}
                </div>
              </div>
            </div>
            <div
              className="deleteBtn"
              onClick={() => dispatch(removeproduct(item.id))}
            >
              <DeleteOutlineIcon />
            </div>
          </div>
        </>
      ))}
      <div className="total">
        <span>TOTAL</span>
        <span>$ {totalPrice()}</span>
      </div>
      <button onClick={(e) => setOpenPayment(true)}>PROCEED TO CHECKOUT</button>
      <div className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </div>
    </div>
  );
}
