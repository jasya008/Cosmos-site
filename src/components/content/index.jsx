import React from 'react'
import { ObjectInfo } from '../ObjectInfo'
import { GetContext } from '../context'

export const Content = ({ data }) => {

    const { loader } = GetContext()
    return (
        <>
            {!loader &&
                data.map((item) => (
                    <ObjectInfo key={item.id} item={item} />
                ))
            }
        </>
    )
}
