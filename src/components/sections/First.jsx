import React from 'react'
import s from './index.module.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Container } from '@mui/material';

export const First = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <section>
      < div className={s.About}>
        <Container fixed>
        <div data-aos="fade-down" className={s.text}>
          <h2 className={s.title_about}>About space</h2>
          <p className={s.text_about}>Space is an almost perfect vacuum, nearly void of matter and with extremely low pressure. In space, sound doesn't carry because there aren't molecules close enough together to transmit sound between them. Not quite empty, bits of gas, dust and other matter floats around "emptier" areas of the universe, while more crowded regions can host planets, stars and galaxies.</p>
        </div>
        </Container>
      </div>
    </section >
  )
}
