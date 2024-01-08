
import React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'
export const ObjectInfo = ({ item }) => {
  return (
    //  <div className={s.cards_objects}>
    <Link to ={`/extroObject/${item.id}`}>
      <img src={item.img} alt="" className={s.img_objects} />
    </Link>
    //  </div>

  )
}
