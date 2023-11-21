import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/0/item-500000001310388970_1597873828.jpg?size=large"
          productName="Cold Brew"
          price="65.00"
          des="Iced coffee with notes of hazelnut, chocolate & browned almond.Brazilian & Peruvian Origin."
        />
        <Product
          _id="1012"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/0/item-500000001310389200_1596083052.jpg?size=large"
          productName="Almond tumeric latte"
          price="45.00"
          des="Almond Turmeric Latte House made; almond milk, turmeric, ginger, black pepper, cinnamon + honey.  Served hot or iced."
        />
        <Product
          _id="1013"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/1/item-500000001310389411_1642455330.png?size=large"
          productName="Latte"
          price="47.00"
          des="Double shot of espresso with hot steamed foamed milk."
        />
        <Product
          _id="1014"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/4/item-500000001310389424_1642453368.png?size=large"
          productName="Lavender latte"
          price="58.00"
          des="Double espresso, house made lavender syrup & milk of your choice.."
        />
      </div>
    </div>
  );
};

export default BestSellers;
