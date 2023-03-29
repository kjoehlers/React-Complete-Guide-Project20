import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to <Link to="/"> the home page.</Link>
      </p>
    </>
  );
}

export default ProductsPage;
