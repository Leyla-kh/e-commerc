import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import "./List.scss";

export default function List({ catId, maxPrice, priceFilter, subCatSelected }) {
  const { data, loading, error } = useFetch(`/products?category=${catId}`);
  const [products, setProducts] = useState(data);
  console.log(subCatSelected);
  useEffect(() => {
    setProducts(data);
    /*subCatSelected &&
      setProducts(
        products?.filter((item) =>
          subCatSelected.map((f) => item.subCategories.includes(f))
        )
      );

    maxPrice && setProducts(products?.filter((item) => item.price <= maxPrice));*/
  }, [data, maxPrice, subCatSelected, products]);

  return (
    <div className="list">
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
        products?.map((item) => <Card item={item} key={item._id} />)
      )}
    </div>
  );
}
