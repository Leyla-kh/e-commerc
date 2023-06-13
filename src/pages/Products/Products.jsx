import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [priceFilter, setPriceFilter] = useState("desc");
  const [subCatSelected, setSubCatSelected] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

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
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
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
              onChange={(e) => setMaxPrice(e.target.value)}
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
