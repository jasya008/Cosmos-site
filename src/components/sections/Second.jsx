import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import s from './index.module.scss'
import { GetContext } from '../context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Second = () => {
    const { data, setData } = GetContext()
    return (
        <section>
            <Container fixed>
                <div className={s.All}>
                    <h2 className={s.title}>Discover more objects in space</h2>
                    <Link to="/Observations"><button className={s.button}> <VisibilityIcon />See All</button></Link>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className={s.cards}>
                        {data.map((item) => (
                            <SwiperSlide >
                                <div key={item.id} className={s.card}>
                                    <img src={item.img} alt="" className={s.img} />
                                    <h2 className={s.title}>{item.name}</h2>

                                    <div className={s.texes}>
                                        <div className={s.all_text}>
                                        <p className={s.text}>Visibility:</p>
                                        <span>{item.visibility}</span>
                                        </div>
                                        <div className={s.all_text}>
                                        <p className={s.text}>Constalation:</p>
                                        <span>{item.constellation}</span>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </Container>


        </section>
    )
}
