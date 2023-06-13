import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import useFetch from "../../hooks/useFetch";
import { makeRequest } from "../../makeRequest";
import { useEffect, useState } from "react";
import Success from "../Success/Success";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";

export default function Paypal({ products, total, setOpen }) {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setOpen(false);
      dispatch(resetCart());
      navigate("/success", { state: { total: total, id: id } });
    }
    if (failed) {
      return redirect("/failed");
    }
  }, [success, failed]);

  /*let total = 0;

  function GetProduct(product) {
    const { data } = useFetch(`/products?[filters][id][$eq]=${product.id}`);
    return data[0]?.attributes?.newPrice;
  }

  products.map((product) => {
    const data = GetProduct(product);
    total += data * product.quantity;
  });
  console.log(total);
  */
  const [{ isPending }] = usePayPalScriptReducer();

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "something",
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApproveOrder = async (data, actions) => {
    const order = await actions.order.capture();

    const res = await makeRequest.post("/orders", {
      data: { products, stripeId: data.orderID },
    });
    setId(data.orderID);
    setSuccess(true);
  };

  return (
    <>
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <PayPalButtons
            style={({ layout: "vertical" }, { tagline: "false" })}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
            onError={() => setFailed(true)}
          />
        </>
      )}
    </>
  );
}
