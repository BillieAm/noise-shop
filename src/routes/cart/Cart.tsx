import Checkout from "../../components/checkout/Checkout";
import PageHeader from "../../components/page-header/PageHeader";

function Cart(): JSX.Element {
  return (
    <>
      <PageHeader>Your Shopping Cart</PageHeader>
      <Checkout />
    </>
  );
}

export default Cart;
