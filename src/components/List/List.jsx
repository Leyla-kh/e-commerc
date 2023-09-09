import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import "./List.scss";

export default function List({ catId, maxPrice, priceFilter, subCatSelected }) {
  const { data, error, loading } = useFetch(`/products?category=${catId}`);
  const [products, setProducts] = useState([]);
  const fetchData = data;

  useEffect(() => {
    setProducts(fetchData);
  }, [fetchData]);

  useEffect(() => {
    if (priceFilter === "asc")
      setProducts((prev) => [...prev].sort((a, b) => a.newPrice - b.newPrice));
    if (priceFilter === "desc")
      setProducts((prev) => [...prev].sort((a, b) => b.newPrice - a.newPrice));
  }, [priceFilter]);

  useEffect(() => {
    subCatSelected?.length > 0
      ? setProducts(
          fetchData
            .filter((p) =>
              subCatSelected.some((i) => p.subCategories.includes(i))
            )
            .filter((item) => item.newPrice <= maxPrice)
        )
      : setProducts(fetchData);
  }, [subCatSelected, maxPrice]);

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
        products?.map((item) => <Card item={item} key={item?._id} />)
      )}
    </div>
  );
}
