import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/3/item-500000001310389403_1642452596.png?size=large"
          productName="TAZO Chai Chhocolate Latte"
          price="70.00"
          des="TAZO'S Chai tea, with Chocolate and the  milk of choice finished with ground cinnamon.  Served hot or iced.."
        />
        <Product
          _id="1102"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/2/item-500000013865112672_1654114771.jpg?size=large"
          productName="Overnight Oats"
          price="80.00"
          des="LOvernight Oats (Berry Dream)- Rolled Oats, Greek Yogurt, Mix Berry Compote, Market Berries, Toasted Coconut."
        />
        <Product
          _id="1103"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/images/item-aa5c33a6-2255-4d65-904a-26b4dcbce61d.jpg?size=large"
          productName="Nutella Beignets"
          price="110.00"
          des="Nutella Beignets served with Berry Sauce."
        />
        <Product
          _id="1104"
          img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/images/item-f1fdbb7c-98c2-4bf8-b824-4d86baf130d9.jpg?size=medium"
          productName="Tater Tots"
          price="53.00"
          des="served with Spicy Mayo.."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
