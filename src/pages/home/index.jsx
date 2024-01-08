import React, { useEffect } from 'react'
import s from './index.module.scss'
import { Container } from '@mui/material'
import { GetContext } from '../../components/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { First } from '../../components/sections/First';
import { Second } from '../../components/sections/Second';
import { Third } from '../../components/sections/Third';
import { Four } from '../../components/sections/Four';



export const Home = () => {
  const { user } = GetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, [navigate]);




  return (
    <>
      <div className={s.Home}>
        <Container fixed>
          <h2 className={s.logo_title}>SPACE EXPLORE</h2>
          <h2 className={s.title}>Discover space objects...</h2>
        </Container>
      </div>
      <First />
      <Second />
      <Third/>
      <Four/>
    </>

  )


}

