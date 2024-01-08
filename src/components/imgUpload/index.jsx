import axios from 'axios'
import React from 'react'
import { useState } from 'react'


export const ImgUpload = () => {
    const [image, setImage] = useState("")
    
    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0])
    }

    const handleApi = () => {
        const formData = new FormData()
        formData.append("image", image)
        axios.post("http://localhost:4080/discovers",formData).then((res)=>{
            console.log(res);
        })
    }
    return (
        <>
            <input placeholder="Image" type="file" name='img' onChange={handleImage} />
            <button onClick={handleApi} >Create</button>
        </>
    )
}
