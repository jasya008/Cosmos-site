import React, { useState } from 'react'
import s from "./index.module.scss"
import { Inputs } from '../../components/inputs'
import axios from 'axios'
import { GetContext } from '../../components/context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Create = () => {
  const { user } = GetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);


  const { data, setData } = GetContext();
  const [dataName, setNameData] = useState("")
  const [dataVisibility, setVisibilityData] = useState("")
  const [dataConstalatio, setDataConstalation] = useState("")
  const [dataTime, setTimeData] = useState("")
  const [dataMagnitute, setMagnituteData] = useState("")
  const [datalocation, setLocationData] = useState("")
  const [dataDesc, setDescData] = useState("")
  const [dataDistance, setDistanceData] = useState("")
  const [dataImg, setImgData] = useState("")


  const URL = "http://localhost:4000/discovers"

  const createData = async (name, visibility, time, magnitude, constellation, description, location, distance, img) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1
    const newData = { id, name, visibility, time, magnitude, constellation, description, location, distance, img }
    const newDataList = [...data, newData]

    // const handleImage = (e) => {
    //   console.log(e.target.files);
    //   setImgData(e.target.files[0])
    // }

    try {

      const formData = new FormData()
      formData.append("image", dataImg)

      await axios.post(URL, newData, formData)


      setData(newDataList)

      setNameData("")
      setVisibilityData("")
      setTimeData("")
      setMagnituteData("")
      setDataConstalation("")
      setLocationData("")
      setDescData("")
      setDistanceData("")
      setImgData("")

      toast.success('🦄 Successful create object!', {
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
    } catch (error) {
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createData(dataName, dataVisibility, dataTime, dataMagnitute, dataConstalatio, dataDesc, datalocation, dataDistance, dataImg)
  }

  return (
    <div className={s.Create}>
      <h2 className={s.text_create}>Create Observation</h2>
      <Inputs
        dataName={dataName}
        dataVisibility={dataVisibility}
        dataTime={dataTime}
        dataMagnitute={dataMagnitute}
        dataConstalatio={dataConstalatio}
        datalocation={datalocation}
        dataDesc={dataDesc}
        dataDistance={dataDistance}
        dataImg={dataImg}
        setNameData={setNameData}
        setDescData={setDescData}
        setDataConstalation={setDataConstalation}
        setDistanceData={setDistanceData}
        setImgData={setImgData}
        setLocationData={setLocationData}
        setMagnituteData={setMagnituteData}
        setTimeData={setTimeData}
        setVisibilityData={setVisibilityData}
      />
      <button onClick={handleSubmit} className='btn'>Create</button>
    </div>

  )
}
