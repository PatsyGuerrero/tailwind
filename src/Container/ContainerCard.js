import React from 'react'
import data from '../real_estates.json'
import Card from '../Components/Card/Card'

export default function ContainerCard() {
    let included= data.included
    console.log('data',data)
    return (
        <div className='grid justify-items-center grid-cols-3 gap-12 auto-cols-auto mt-8' >
            {data.data.map(card => (
                <Card attributes={card.attributes} included={included}/>
            ))
            }
        </div>
    )
}

// flex flex-wrap