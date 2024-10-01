import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

 
const About = () => {
  return (
    <div className="px-[5%]">

     <h1 className="text-3xl m-10"> <Link to={"/"} className="text-red-500">Home</Link> <span>/About</span></h1>
         

     <div className="flex flex-wrap gap-10 items-center">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[525px] max-md:max-w-full">
        <div className="text-6xl font-semibold leading-none text-justify text-black tracking-[3.24px] max-md:text-4xl">
          Our Story
        </div>
        <div className="flex flex-col mt-10 max-w-full text-base leading-7 text-black w-[525px]">
          <div className="max-md:max-w-full">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </div>
          <div className="mt-6 max-md:max-w-full">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto bg-pink-400 rounded basis-0 min-w-[240px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c83c2eaeb35a565ef6289adf19b0a6b2d667f4c5e707e8fb85e1d4113fba26b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-full aspect-[1.37] max-md:max-w-full"
        />
        
      </div>
    </div>


     
    <div className="flex flex-wrap gap-8 justify-center items-start py-24 text-black">
      <div className="flex overflow-hidden flex-col justify-center px-12 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6805dcb9a34843c761c51a513e21bc83d3143b66d00c05820780315860641d90?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              10.5k{" "}
            </div>
            <div className="mt-3 text-base text-center">
              Sallers active our site
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-9 py-8 text-white bg-red-500 rounded shadow-sm min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84984aa03c98546e62c846541465d62bce7ddb13c177fff91f09ffcfcb1cc459?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              33k
            </div>
            <div className="mt-2 text-base">Mopnthly Produduct Sale</div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-1 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px]">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23347f57400a31c91cbbb7279fdf9ecb779726a76da0f742e02fc58f642d4925?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              45.5k
            </div>
            <div className="mt-3 text-base">Customer active in our site</div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-7 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b4969e7c9546eb6a8a011e95fedba65b75fc623e11b021214c8ca786fca782a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              25k
            </div>
            <div className="mt-3 text-base">Anual gross sale in our site</div>
          </div>
        </div>
      </div>
    </div>

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          670: {
              slidesPerView: 2, // 
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3, // 
              spaceBetween: 30,
            },

            100: {
              slidesPerView: 1, // 
              spaceBetween: 30,
            },


          
    
          }} 
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="flex flex-col max-w-[370px]">
        <div className="flex overflow-hidden flex-col justify-end px-16 pt-10 w-full rounded bg-neutral-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03316656e8b3af4c530199380be4f72b7ca834b861295169eb76d2d01cae5d22?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-full aspect-[0.6]"
          />
        </div>
        <div className="flex flex-col self-start mt-8">
          <div className="flex flex-col text-black">
            <div className="text-3xl font-medium tracking-widest leading-none">
              Tom Cruise
            </div>
            <div className="mt-2 text-base">Founder & Chairman</div>
          </div>
          <div className="flex gap-4 items-start self-start w-10 mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32fb03c19e58ab605c4ab010a7c10100b74a8e8ba017e5b8fc5fa98f081b102e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
  
          </SwiperSlide>
  
          <SwiperSlide>


          <div className="flex flex-col max-w-[370px]">
      <div className="flex overflow-hidden flex-col justify-end px-16 pt-10 w-full rounded bg-neutral-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-full aspect-[0.6]"
        />
      </div>
      <div className="flex flex-col self-start mt-8">
        <div className="flex flex-col text-black">
          <div className="text-3xl font-medium tracking-widest leading-none">
          Emma Watson
          </div>
          <div className="mt-2 text-base">Managing Director</div>
        </div>
        <div className="flex gap-4 items-start self-start w-10 mt-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32fb03c19e58ab605c4ab010a7c10100b74a8e8ba017e5b8fc5fa98f081b102e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </div>

        </SwiperSlide>


        <SwiperSlide>
        <div className="flex flex-col max-w-[370px]">
      <div className="flex overflow-hidden flex-col justify-end px-16 pt-10 w-full rounded bg-neutral-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-full aspect-[0.6]"
        />
      </div>
      <div className="flex flex-col self-start mt-8">
        <div className="flex flex-col text-black">
          <div className="text-3xl font-medium tracking-widest leading-none">
          Will Smith
          </div>
          <div className="mt-2 text-base">Product Designer</div>
        </div>
        <div className="flex gap-4 items-start self-start w-10 mt-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32fb03c19e58ab605c4ab010a7c10100b74a8e8ba017e5b8fc5fa98f081b102e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>

        <SwiperSlide>


        <div className="flex flex-col max-w-[370px]">
<div className="flex overflow-hidden flex-col justify-end px-16 pt-10 w-full rounded bg-neutral-100">
<img
  loading="lazy"
  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92d72b26840b722646a892a5a3408b8b59d51dc9373883bf5e1cd62c210cf2c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
  className="object-contain w-full aspect-[0.6]"
/>
</div>
<div className="flex flex-col self-start mt-8">
<div className="flex flex-col text-black">
  <div className="text-3xl font-medium tracking-widest leading-none">
  Emma Watson
  </div>
  <div className="mt-2 text-base">Managing Director</div>
</div>
<div className="flex gap-4 items-start self-start w-10 mt-4">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32fb03c19e58ab605c4ab010a7c10100b74a8e8ba017e5b8fc5fa98f081b102e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
</div>
</div>
</div>

</SwiperSlide>


<SwiperSlide>
<div className="flex flex-col max-w-[370px]">
<div className="flex overflow-hidden flex-col justify-end px-16 pt-10 w-full rounded bg-neutral-100">
<img
  loading="lazy"
  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f19ee2647b3f675c0a57d7be9bb5aa3e7703d0c12e026869da8b881f80671c5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
  className="object-contain w-full aspect-[0.6]"
/>
</div>
<div className="flex flex-col self-start mt-8">
<div className="flex flex-col text-black">
  <div className="text-3xl font-medium tracking-widest leading-none">
  Will Smith
  </div>
  <div className="mt-2 text-base">Product Designer</div>
</div>
<div className="flex gap-4 items-start self-start w-10 mt-4">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32fb03c19e58ab605c4ab010a7c10100b74a8e8ba017e5b8fc5fa98f081b102e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
    className="object-contain shrink-0 w-6 aspect-square"
  />
</div>
</div>
</div>
</SwiperSlide>
        
 
      </Swiper>


 
      <div className="flex flex-wrap gap-10 my-20 justify-center items-center py-16 text-black">
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d12c7373013b3876923bbd0d5880395fd46f061087f4f31c62e740144e6cd3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-20 aspect-square"
        />
        <div className="flex flex-col items-center mt-6">
          <div className="text-xl font-semibold leading-snug">
            FREE AND FAST DELIVERY
          </div>
          <div className="mt-2 text-sm text-center">
            Free delivery for all orders over $140
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[262px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2942605e7b431544f8f25b3e0f4d0c11662463231875a381b5fbf42b103928?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-20 aspect-square"
        />
        <div className="flex flex-col items-center mt-6">
          <div className="text-xl font-semibold leading-snug">
            24/7 CUSTOMER SERVICE
          </div>
          <div className="mt-2 text-sm">Friendly 24/7 customer support</div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9493ca0431a09560171e7b0131d410607653bad528bbbd449a25d9f741c239d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain w-20 aspect-square"
        />
        <div className="flex flex-col items-center mt-6">
          <div className="text-xl font-semibold leading-snug">
            MONEY BACK GUARANTEE
          </div>
          <div className="mt-2 text-sm">We reurn money within 30 days</div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default About
  