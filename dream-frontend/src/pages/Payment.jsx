import axios from "axios";
import React, {useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../header-asset/logo-green.png";

const s_key =
  "pk_test_51LHvomAmxL4IWWJszSmgVpOujfXu4AcpvwaqTtfSGNzq5X03imIacEqy3qFLGEdwJTqY8I4iH8xHrQ8CTcO4LDQY00EKbdLTjM";

function Payment() {
    const [stripeToken, setStripeToken] = useState(null);

  const ontoken = (token) => {
    setStripeToken(token)
  };

  useEffect(() => {
    const request = async () => {
        try {
            const res = await axios.post("/api/checkout/payment", {
                tokenId: stripeToken.id,
                amount: 2000
            })
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    stripeToken && request();
  }, [stripeToken]);

  return (
    <StripeCheckout
      name="Dream Interior Design"
      image={logo}
      billingAddress
      shippingAddress
      description="Your total is $10"
      amount={1000}
      token={ontoken}
      stripeKey={s_key}
    >
      <button className="btn btn-primary">Payment</button>
    </StripeCheckout>
  );
}

export default Payment;
