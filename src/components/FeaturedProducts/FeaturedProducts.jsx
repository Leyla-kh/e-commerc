import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(`/products?${type}=true`);

  return (
    <div className="featured">
      <div className="top">
        <h2>{type} Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quaerat
          itaque maxime, esse beatae adipisci, harum quod, laborum consectetur
          numquam quae corrupti similique perferendis nulla?
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "somthing went wrong"
        ) : loading ? (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        ) : (
          data.map((item) => <Card item={item} key={item._id} />)
        )}
      </div>
    </div>
  );
}
