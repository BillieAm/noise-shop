import CategoriesContainer from "../../components/categories-container/CategoriesContainer";
import PageHeader from "../../components/page-header/PageHeader";

function CategoriesPreview(): JSX.Element {
  return (
    <>
      <PageHeader>Categories</PageHeader>
      <CategoriesContainer />
    </>
  );
}

export default CategoriesPreview;
