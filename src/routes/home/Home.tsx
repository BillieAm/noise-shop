import SliderContainer from "../../components/slider/slider-container/SliderContainer";
import PageHeader from "../../components/page-header/PageHeader";

function Home(): JSX.Element {
  return (
    <>
      <PageHeader>Popular Products</PageHeader>
      <SliderContainer />
    </>
  );
}

export default Home;
