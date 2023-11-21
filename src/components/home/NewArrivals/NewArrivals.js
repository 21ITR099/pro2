import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/8/item-500000001310389428_1596083414.jpg?size=large"
            productName="Matcha Latte"
            price="65.00"
            des=" Finely ground Japanese matcha powder, with milk of your choice.  Hot or Iced"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/9/item-500000026623170319_1690573282.png?size=large"
            productName="Tazo Peach Palm"
            price="50.00"
            des="TAZO Passion Iced Tea, Peach Syrup, and Lemonade"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/4/item-500000030449137924_1690573543.png?size=large"
            productName="Tazo Passion Raspberry Rose"
            price="80.00"
            des="TAZO Passion Iced Tea, Rose Syrup, and Fresh Raspberries."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-32671000000000000/menu/items/4/item-500000032472023204_1695943880.png?size=large"
            productName="Issa Raes TAZO passion Twist"
            price="60.00"
            des="TAZO Passion Iced Tea, Cucumber, Mint with Lime Simple Syrup."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://www.aromamilk.com/images/products/milk/double_toned_milk.png"
            productName="DOUBLE TONED MILK"
            price="70.00"
            des="Made low in fat and high on quality, Aroma DTM is the right pick for your healthy lifestyle. Perfect to maintain the cholesterol level, Aroma DTM keeps your heart happy, while a low calorie content keeps your body fit."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
