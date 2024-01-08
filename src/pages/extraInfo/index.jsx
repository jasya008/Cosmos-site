import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import s from './index.module.scss'
import { Container } from '@mui/material'


export const ExtroInfo = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState("")

  const { id } = useParams()

  const API_URL = "http://localhost:4000/discovers"

  const getData = async () => {
    try {
      const { data } = await axios(`${API_URL}/${id}`)
      setData(data)

    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {error && <h2>{error}</h2>}
      {!error && (
        <div className={s.Extro}>
          <Container fixed>
             <img className={s.img} src={data.img} alt="" /> 
            <div className={s.content}>
            <div className={s.all_text}>
            <h2 className={s.title}>{data.name}</h2>
            <p className={s.locate}>Location in {data.location}</p>
            <p className={s.title_section}>Description</p>
            <p className={s.text}>{data.description}</p>
            </div>

            <div className={s.content_2}>
            <div className={s.time}>
              <p className={s.small_text}>Action does:</p>
              <h2 className={s.time_text}>{data.time}</h2>
            </div>
            <div className={s.box}>
              <p className={s.distance}>Distance:</p>
              <h2 className={s.distance_text}>{data.distance}km</h2>
            </div>
            </div> 
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
