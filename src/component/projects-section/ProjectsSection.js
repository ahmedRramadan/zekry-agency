import React from 'react';
import './ProjectsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.min.css'
import {  Pagination, Navigation } from "swiper";
import '../../../node_modules/swiper/modules/grid/grid.min.css';
import '../../../node_modules/swiper/modules/pagination/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation/navigation.min.css'
import { socialMediaData,logoDesignsData } from '../../data/Data';

const ProjectsSection = ()=>{
    return (
    <>
        <section className='projects-section'>
            <div className='container'>
                <div className='content'>
                    <h2>some of our <br/><span>social media</span></h2>
                    <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            grabCursor={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                              1000: {
                                slidesPerView:3,
                                slidesPerGroup:3
                              },
                              740: {
                                slidesPerView:2,
                                slidesPerGroup:2
                              },
                              320:{
                                slidesPerView:1,
                                slidesPerGroup:1
                              }
                            }}
                            className="mySwiper"
                          >
                            {
                              socialMediaData.map((el)=><SwiperSlide><img src={el} alt='images' /></SwiperSlide>)
                            }
                      </Swiper>
                      <h2>some of our <br/><span>Logo Designs</span></h2>
                    <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            grabCursor={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                              1000: {
                                slidesPerView:3,
                                slidesPerGroup:3
                              },
                              740: {
                                slidesPerView:2,
                                slidesPerGroup:2
                              },
                              320:{
                                slidesPerView:1,
                                slidesPerGroup:1
                              }
                            }}
                            className="mySwiper"
                          >
                            {
                              logoDesignsData.map((el)=><SwiperSlide><img src={el} alt='images' /></SwiperSlide>)
                            }
                      </Swiper>
                </div>
            </div>       
        </section>
    </>
)
}

export default ProjectsSection;