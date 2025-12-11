import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import ProductCategory from "../components/ProductCategory";
import { MyStore } from "../context/ContextProvider";
import { useLoaderData } from "react-router";

const Home = () => {
  // const { productData } = useContext(MyStore);
  // console.log(productData);
  const productData = useLoaderData();

  return (
    <div className="px-5 min-h-screen pt-[80px]  pl-[220px] bg-stone-100 w-full">
      <div className="flex gap-5 justify-between bg-white p-2 mb-5 shadow-[1px_1px_4px_rgba(0,0,0,0.5)]">
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Mobiles & Tablets</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">TVs and Appliances</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Electronics</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Fashion</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Home and Kitchen</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Beauty and toys</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Furnitures</h1>
        </div>
        <div className="w-30 cursor-pointer">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100"
            alt=""
          />
          <h1 className="font-semibold text-sm">Flight Bookings</h1>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              className="w-full h-50"
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5ab0f654d9161154.jpg?q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-50"
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/d529eaa5b62515f7.jpg?q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-50"
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b2acdfecca8c1ec6.jpeg?q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-50"
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/2746152f289ef43c.jpg?q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-50"
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/bac6e385f3bd157c.jpeg?q=60"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination flex justify-center mt-3"></div>
      </div>
      <div className="">
        <h1 className="font-semibold text-3xl px-1">Beauty </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;
            if (category == "beauty") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>
        <h1 className="font-semibold text-3xl px-1">Fragnances </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;
            if (category == "fragrances") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>

        <h1 className="font-semibold text-3xl px-1">Furniture </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;
            if (category == "furniture") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>

        <h1 className="font-semibold text-3xl px-1">Groceries </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;
            if (category == "groceries") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>

        <h1 className="font-semibold text-3xl px-1">Home Decoration </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;

            if (category == "home-decoration") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>

        <h1 className="font-semibold text-3xl px-1">Kitchen Accessories </h1>
        <div className="p-1 mt-2 flex gap-5 overflow-x-auto hide-scrollbar mb-10">
          {productData.map((prod) => {
            const category = prod.category;

            if (category == "kitchen-accessories") {
              return <ProductCategory product={prod} />;
            }
          })}
          <div className="w-[550px] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-center ">
            <a
              href="#"
              className="whitespace-nowrap w-60 text-blue-500 underline text-center"
            >
              {" "}
              View All ->
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
