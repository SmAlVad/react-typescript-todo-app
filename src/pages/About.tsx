import React from 'react'
import {useHistory} from 'react-router-dom'

export default function About() {
    const history = useHistory()

    return (
        <>
            <h1>Супер инфа</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fugit molestias pariatur totam
                voluptatem. Dolor labore pariatur quaerat quam similique!</p>

            <button className='btn' onClick={() => history.push('/')}>
                обратно к делам
            </button>
        </>
    )
}