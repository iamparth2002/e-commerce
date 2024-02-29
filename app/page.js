'use client';

import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import {
  ProductContext,
  ProductsContextProvider,
} from '@/components/ProductsContext';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  // const [selectedProducts, setSelectedProducts] = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [phrase, setPhrase] = useState('');
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      // console.log(data)
      setProducts(data);
    };
    getProducts();
  }, []);
  const categories = [...new Set(products?.map((product) => product.category))];

  let productFilter;

  if (phrase) {
    productFilter = products?.filter((p) =>
      p.name.toLowerCase().includes(phrase)
    );
  } else {
    productFilter = products;
  }

  // console.log(selectedProducts)
  return (
    <ProductsContextProvider>
      <Layout>
        <div className="flex flex-wrap p-5 gap-10 justify-center">
          <input
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="flex justify-center items-center bg-gray-200 py-2 px-4 rounded-xl lg:w-2/5 focus:outline-none mb-[-50px]"
          />

          <div className="w-full">
            {categories?.map((cat) => (
              <div key={cat} className="">
                {productFilter.find((p) => p.category === cat) && (
                  <div>
                    <h1 className="text-2xl font-semibold capitalize text-center my-10 ">
                      {cat}
                    </h1>
                    <div className="flex w-full justify-center flex-wrap gap-5 lg:gap-20">
                      {productFilter
                        ?.filter((product) => product.category === cat)
                        .map((product) => (
                          <div key={product._id} className="mt-2">
                            {' '}
                            <Product {...product} />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </ProductsContextProvider>
  );
}
