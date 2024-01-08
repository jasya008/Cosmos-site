import { Container } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useEffect } from 'react'
import s from "./index.module.scss"
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import Aos from 'aos';

export const Third = () => {
    const date = new Date()

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <>
            <section>
                <div className={s.third}>
                    <Container fixed>
                        <div data-aos="fade-up"  className={s.all_thinks}>
                            <div className={s.all_text}>
                                <p className={s.small_title}>Explore many objects</p>
                                <h2 className={s.title}>Planetesimal Collison Around Star</h2>
                                <Link to="/Objects"><button className={s.button}><VisibilityIcon />See All</button></Link>
                            </div>
                            <div className={s.box}>
                                <p className={s.text_box}>Action when explore:</p>
                                <h2 className={s.num}>02:20</h2>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
