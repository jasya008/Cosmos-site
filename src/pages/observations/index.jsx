import { Container } from '@mui/material'
import axios from 'axios'
import s from './index.module.scss'
import React, { useEffect, useState } from 'react'
import { InfoDicovers } from '../../components/infoDiscovers'
import { useNavigate } from 'react-router-dom'
import { GetContext } from '../../components/context'

export const Observations = () => {
  const { user, data, setData } = GetContext();
  console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, [])

  const API_URL = "http://localhost:4000/discovers"

  const getData = async () => {
    try {
      const { data } = await axios(API_URL)
      setData(data)
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={s.observation}>
      <Container fixed>
        <h2 className={s.title}> Table with interesting observations about space objects</h2>
        {data.map((item) => (
          <InfoDicovers key={item.id} data={item} />
        ))}
      </Container>
    </div>
  )
}
