import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

export default function Products() {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [priceFilter, setPriceFilter] = useState("desc");
  const [subCatSelected, setSubCatSelected] = useState([]);

  const { data, loading, error } = useFetch(`/categories?category=${catId}`);
  const subs = data[0]?.subCategories;

  const handleChange = (e) => {
    const value = e.target.value;
    const isSelected = e.target.checked;
    setSubCatSelected(
      isSelected
        ? [...subCatSelected, value]
        : subCatSelected.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          {subs?.map((item, index) => (
            <div className="inputItem" key={index}>
              <input
                type="checkbox"
                id={index}
                value={index}
                onChange={handleChange}
              />
              <label htmlFor={index}>{item}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) =>
                setMaxPrice(e.target.value > 0 ? e.target.value : 1)
              }
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setPriceFilter("asc")}
            />
            <label htmlFor="asc">price (Lower First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setPriceFilter("desc")}
            />
            <label htmlFor="desc">price (Higher First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="/image/women-style-1.jpg" alt="" />
        <List
          catId={catId}
          maxPrice={maxPrice}
          priceFilter={priceFilter}
          subCatSelected={subCatSelected}
        />
      </div>
    </div>
  );
}
