'use client';
import { useContext } from 'react';
import {ProductContext} from "../../components/ProductsContext";
import { redirect ,useRouter } from 'next/navigation';


const successPage = () => {
  const {setSelectedProducts} = useContext(ProductContext);
  const router = useRouter();
  const buttonHandler = (e) =>{
    e.preventDefault();
    setSelectedProducts([]);
    router.push('/')
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-semibold text-4xl">Thanks for your purchase</h1>
        <button onClick={buttonHandler} className="bg-green-400 p-5 rounded-xl w-1/2 text-white font-bold">Return to Home</button>
      </div>
    </div>
  );
};

export default successPage;
