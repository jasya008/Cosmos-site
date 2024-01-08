import React, { useEffect, useState } from 'react'
import s from './index.module.scss'

export const Filter = ({ data }) => {
    const [selectFilter, setSelectFilter] = useState([])
    const [filteredData, setFiltereData] = useState(data)

    let filters = ["All", "Nebula", "Galaxy", "Satellite", "Star", "Cluster", "Asteroid"]

    const handleFilterButton = (selectType) => {
        if (selectFilter.includes(selectType)) {
            let filters = selectFilter.filter((el) => el !== selectType)
            setSelectFilter(filters)

        } else { 
            setSelectFilter([...selectFilter, selectType])
        }
    }

    useEffect(() => {
        filtereData()
    }, [selectFilter])

    const filtereData = () => {
        if (selectFilter.length > 0) {
            let tempData = selectFilter.map((selectType) => {
                let temp = data.filter((data) => data.type === selectType);
                console.log(selectType);

                return temp

            })
            setFiltereData(tempData.flat())

        } else {
            setFiltereData([...data])
        }
    }

    return (
        <div className={s.buttons}>
            {filters.map((type, idx) => (
                <button className={`button${selectFilter?.includes(type) 
                    }`}
                    key={`filters-${idx}`}
                    onClick={() => handleFilterButton(type)}>
                    {type}
                </button>
            ))}
        </div>
    )
}
