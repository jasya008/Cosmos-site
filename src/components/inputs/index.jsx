// import { ImgUpload } from '../imgUpload'
import s from './index.module.scss'

export const Inputs = ({
    dataName,
    dataVisibility,
    dataTime,
    dataMagnitute,
    dataConstalatio,
    datalocation,
    dataDesc,
    dataDistance,
    dataImg,
    setNameData,
    setDescData,
    setDataConstalation,
    setDistanceData,
    setImgData,
    setLocationData,
    setMagnituteData,
    setTimeData,
    setVisibilityData }) => {

    return (
        <div className={s.inputs}>
            <input onChange={(e) => setNameData(e.target.value)} type="text" value={dataName} className={s.input} placeholder="Name" />
            <input onChange={(e) => setVisibilityData(e.target.value)} value={dataVisibility} type="text" className={s.input} placeholder="Visibility" />
            <input onChange={(e) => setTimeData(e.target.value)} value={dataTime} type="time" className={s.input} placeholder="Time" />
            <input onChange={(e) => setMagnituteData(e.target.value)} value={dataMagnitute} type="number" className={s.input} placeholder="Magnitude" />
            <input onChange={(e) => setDataConstalation(e.target.value)} value={dataConstalatio} type="text" className={s.input} placeholder="Constalation" />
            <input onChange={(e) => setLocationData(e.target.value)} value={datalocation} type="text" className={s.input} placeholder="Location" />
            <input onChange={(e) => setDescData(e.target.value)} value={dataDesc} type="text" className={s.input} placeholder="Description" />
            <input onChange={(e) => setDistanceData(e.target.value)} value={dataDistance} type="number" className={s.input} placeholder="Distance" />
            <input onChange={(e) => setImgData(e.target.value)}value={dataImg} type="img" name='img' className={s.input} placeholder="Image" />
        </div>
    )

}
