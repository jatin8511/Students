import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { MainCont } from '../App';


const HomeSwiper = () => {
    const { Products } = useContext(MainCont)
    let swiperMobiles = Products.filter((item) => item.category.toLowerCase().includes('earbud'))
    let swiperLaptop = Products.filter((item) => item.category.toLowerCase().includes('shoes'))
    const SwiperProducts = [...swiperLaptop.slice(0, 3), ...swiperMobiles.slice(0, 3)]
    console.log(SwiperProducts)
    return (
        <div style={
            {
                height: '80vh'

            }
        }>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    SwiperProducts.map((product) => <SwiperSlide>
                        <div className="sProducts">
                            <div className="col1">
                                <h1>{product.title}</h1>
                                <h3>See More...</h3>
                            </div>
                            <div className="col2">
                                <div className="img">
                                    <img src={product.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    )
}

export default HomeSwiper
