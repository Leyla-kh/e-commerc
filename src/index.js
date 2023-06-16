import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SkeletonTheme } from "react-loading-skeleton";

const initialOptions = {
  "client-id":
    "AQ3Tbpq8VmrS7h0ufxDjnrxtorp5KyPkLtZtGw5T2SIr7CU_r81cKiWjXRzMsLif7BWCMIV4agbUA7SU",
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SkeletonTheme baseColor="#D9D8D8" highlightColor="#F7F6F6">
    <React.StrictMode>
      <PayPalScriptProvider options={initialOptions}>
        <Provider store={store}>
          <PersistGate loading={"loading"} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </PayPalScriptProvider>
    </React.StrictMode>
  </SkeletonTheme>
);
