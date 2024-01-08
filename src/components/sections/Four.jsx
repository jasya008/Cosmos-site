import { Container } from '@mui/material'
import React from 'react'
import s from './index.module.scss'

export const Four = () => {
    return (
        <>
            <div className={s.four}>
                <Container fixed>
                    <div className={s.texts}>
                        <h2 className={s.title}>This website about space, or cosmos, can serve multiple purposes and cater to different audiences. Here is has a  reason why such a website may be useful:</h2>
                        <p className={s.text}> Education and information: A website about space can provide comprehensive and up-to-date information about celestial bodies, astronomical phenomena, space exploration missions, and scientific discoveries. It can help people learn about the wonders of the universe and understand complex concepts in an accessible manner.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}
