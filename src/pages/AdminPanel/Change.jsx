import React from 'react'
import s from './index.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { GetContext } from '../../components/context'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'


export const Change = () => {

    const { id } = useParams()
    // const { data, setData } = GetContext()
    const { user } = GetContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/login");
        }
    }, []);



    const [values, setValues] = useState({
        name: "",
        visibility: "",
        time: "",
        magnitude: "",
        constellation: "",
        description: "",
        location: "",
        distance: "",
        img: ""
    })


    useEffect(() => {
        axios.get('http://localhost:4000/discovers/' + id)
            .then(res => setValues(res.data))
            .catch(err => console.log(err))

    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        axios.put('http://localhost:4000/discovers/' + id, values)
            .then(res => {
                setValues({
                    name: "",
                    visibility: "",
                    time: "",
                    magnitude: "",
                    constellation: "",
                    description: "",
                    location: "",
                    distance: "",
                    img: ""
                })

                toast.success('🦄 Successful data change!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                navigate("/Observations")
            })
            .catch(err => console.log(err.message))

    }


    return (
        <div className={s.Change}>
            <h2 className={s.text_create}>Change Observation</h2>
            <div className={s.inputs}>
                <input onChange={e => setValues({ ...values, name: e.target.value })} placeholder='Name' type="text" value={values.name} className={s.input} />
                <input onChange={e => setValues({ ...values, visibility: e.target.value })} placeholder='Visibility' type="text" value={values.visibility} className={s.input} />
                <input onChange={e => setValues({ ...values, time: e.target.value })} placeholder='Time' type="text" value={values.time} className={s.input} />
                <input onChange={e => setValues({ ...values, magnitude: e.target.value })} placeholder='Magnitude' type="text" value={values.magnitude} className={s.input} />
                <input onChange={e => setValues({ ...values, constellation: e.target.value })} placeholder='Constellation' type="text" value={values.constellation} className={s.input} />
                <input onChange={e => setValues({ ...values, description: e.target.value })} placeholder='Description' type="text" value={values.description} className={s.input} />
                <input onChange={e => setValues({ ...values, location: e.target.value })} placeholder='Location' type="text" value={values.location} className={s.input} />
                <input onChange={e => setValues({ ...values, distance: e.target.value })} placeholder='Distance' type="text" value={values.distance} className={s.input} />
                <input onChange={e => setValues({ ...values, img: e.target.value })} placeholder='Img' type="text" value={values.img} className={s.input} />
            </div>

            <button onClick={handleChange} className='btn'>Change</button>
        </div>
    )
}
