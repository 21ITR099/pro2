import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgDNOC9fQQvke_iKFh9VHe2GT8wS120kvbg&usqp=CAU" />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc="https://cdn.pixabay.com/photo/2014/12/11/02/56/coffee-563797_1280.jpg" />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc="https://imgmedia.lbb.in/media/2023/06/648af2d390b4855c9fa4de9d_1686827731695.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
