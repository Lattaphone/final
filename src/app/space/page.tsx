import React from "react";
import Image from "next/image";
import Component from "../component/page";
import i9 from "../image/i9.jpeg";
import i5 from "../image/i5.jpeg";
import i3 from "../image/i3.jpeg";
import AMD5 from "../image/AMD5.jpeg";
import ppp from "../image/PPP.jpeg";
import oo from "../image/OO.jpeg";


const products = [
  {
    name: "Intel Core i9-1400K & Zotac GeForce RTX 4060 Ti AMP",
    price: 79999,
    image: i9, 
  },
  {
    name: "Intel Core i5-13400F & MSI GeForce RTX 4060 Ventus 2X",
    price: 71509,
    image: i5,
  },
  {
    name: "AMD Ryzen 5 4600G",
    price: 10490,
    image: i3,
  },
  {
    name: "Intel Core i3-12100F & GALAX GTX 1650 EX PLUS",
    price: 15999,
    image: AMD5,

  },
  {
    name: "AMD A10-6800K",
    price: 25000,
    image: ppp, 
  },
  {
    name:"INTEL Core i3-6100K",
    price: 31000,
    image: oo,
  },
];

export default function Space() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-black mb-4">Recommend SPEC</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 text-black shadow-lg rounded-xl">
            <Image
              src={product.image} width={100} height={100}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-red-500 text-black font-bold">฿{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
</div>
);
}