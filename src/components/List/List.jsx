import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import "./List.scss";

export default function List({ catId, maxPrice, priceFilter, subCatSelected }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${subCatSelected.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[newPrice][$lte]=${maxPrice}&sort=newPrice:${priceFilter}`
  );
  console.log(maxPrice);
  console.log(data);

  return (
    <div className="list">
      {loading ? (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
}
