// import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const initContext = createContext()

export const Context = ({ children }) => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)


  const API_URL = "http://localhost:4000/discovers"

  const getData = async () => {
    try {
      const { data } = await axios(API_URL)
      setData(data)
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = async (id) => {
    const newitemList = data.filter((item) => item.id !== id)

    await axios.delete(`${API_URL}/${id}`)

    setData(newitemList)

    toast.warning('🦄 Data delete!', {
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


  return (
    <initContext.Provider value={{
      data,
      setData,
      handleDelete
    }}>

      {loader &&
        <div className="loader">
          <CircleLoader size="200px" color="#A259FF" />
        </div>}
      {!loader && children}
    </initContext.Provider>
  )
}
export const GetContext = () => {
  return useContext(initContext)
}

