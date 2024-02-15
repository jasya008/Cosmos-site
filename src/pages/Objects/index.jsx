import { Container } from '@mui/material'
import axios from 'axios'
import s from './index.module.scss'
import React, { useEffect, useState } from 'react'
import { SearchForm } from '../../components/SearchForm'
import { Content } from '../../components/content'
import { GetContext } from '../../components/context'
import { useNavigate } from 'react-router-dom'


export const Objects = () => {

  const { user } = GetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, [navigate]);
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])


  const API_URL = "http://localhost:4000/objects"

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
    <Container fixed  >
      <div className={s.Object_content}>
        {/* <Filter data={data} /> */}
        <h2 className={s.title}>Interesting objects in space</h2>
        <SearchForm search={search} setSearch={setSearch} data={data} />

      </div>
      <div className={s.Objects}>
        <Content data={data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))} />

      </div>

    </Container>
  )
}

