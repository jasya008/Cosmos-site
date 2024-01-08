import React from 'react'
import s from './index.module.scss'
import { GetContext } from '../../components/context'
import { Container } from '@mui/material'
import { InfoDicovers } from '../../components/infoDiscovers'
import { AdminInfo } from '../../components/infoDiscovers/adminInfo'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Adminpage = () => {
    const { data, setData } = GetContext()

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
        <>
            <Container fixed>
                <div className={s.left}>
                    <h2 className={s.title}>Admin Check Page</h2>
                    <Link to="/create"><button className={s.link}>Create</button></Link>
                </div>
                {data.map((item) => (
                    <AdminInfo key={item.id} data={item} />
                ))}
            </Container>
        </>
    )
}
