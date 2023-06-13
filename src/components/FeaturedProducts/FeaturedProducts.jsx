import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "somthing went wrong"
          : loading
          ? "is Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}
