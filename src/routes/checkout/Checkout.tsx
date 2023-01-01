import CheckoutItems from "../../components/checkout-items/CheckoutItems";
import PageHeader from "../../components/page-header/PageHeader";

function Checkout(): JSX.Element {
  return (
    <>
      <PageHeader>Your Shopping Cart</PageHeader>
      <CheckoutItems />
    </>
  );
}

export default Checkout;
