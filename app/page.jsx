"use client";
import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { products } from "../pages/api/products";
import Product from "../components/Product";
import { Context } from "../components/Client";
import Contact from "../components/Contact";

const Page = () => {
  const { query, setQuery } = useContext(Context);
  const [arr, setArr] = useState(products);

  useEffect(() => {
    if (query?.trim()) {
      let temp = [];
      products.forEach((item) => {
        if (item.title.includes(query)) temp.push(item);
      });
      setArr(temp);
    }

    if (!query) {
      setArr(products);
    }
  }, [query]);

  return (
    <>
      <h3 id="Products" className="heading pt-4 py-2 text-success">
        Top Rated Products
      </h3>
      <div className="products flex">
        {arr && arr.length > 0 ? (
          arr.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              rating={item.rating}
            />
          ))
        ) : (
          <h4 className="py-5 text-danger">Sorry, No Matches Found !</h4>
        )}
      </div>
      <h3 id="Contact" className="heading py-2 text-success">
        Ask Your Query
      </h3>
      <Contact />
    </>
  );
};

export default Page;
