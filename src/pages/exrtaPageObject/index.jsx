import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './index.module.scss'

export const ExtroObject = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState("")

    const { id } = useParams()

    const API_URL = "http://localhost:4000/objects"

    const getObjectData = async () => {
        try {
            const { data } = await axios(`${API_URL}/${id}`)
            setData(data)
            console.log(data);

        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getObjectData()
    }, [])

    return (
        <>
            {error && <h2>{error.message}</h2>}
            {!error && (
                <div className={s.All}>
                    <img src={data.img} alt="" className={s.img} />
                    <div className={s.text}>
                        <h2>{data.name}</h2>
                        <p className={s.text}>{data.text}</p>
                    </div>
                </div>
            )}
        </>
    )
}
