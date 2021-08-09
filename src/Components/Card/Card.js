import React from 'react';

export default function Card({attributes,included}) {


    return (

        <div>
            <div className="grid grid-cols-9 gap-0 my-2 bg-red-200 w-64 h-48 rounded-2xl">
                {attributes.real_estate_ids.map((id,index) => {
                    if (index <= 2) {
                        let spaceDivOne = attributes.real_estate_ids.length === 1? 'col-span-9' :'col-span-5';
                        let spaceDivTwo = attributes.real_estate_ids.length === 2? 'col-span-4' : 'col-span-3';
                        let ref = included.find(e => Number(e.id)===id) 
                        return <div className={index === 0? `bg-blue-400 max-h-full rounded-lg border-r-2 border-fuchsia-600 ${spaceDivOne}`: index === 1 ? `bg-blue-400 max-h-full rounded-r-lg border-r-2 border-fuchsia-600 ${spaceDivTwo}`:'bg-blue-400 max-h-full rounded-r-lg col-span-1'}>
                                <img  src={ref.attributes.gallery_urls[0]} alt='1'></img>
                            </div>
                    }   
                })}
            </div>
            <div>
                {attributes.name}
            </div>
            <div>
                {attributes.real_estate_ids.length} propiedades guardadas
            </div>
        </div>
    )
}

// return <>
//                         <div className="bg-blue-400 max-h-full rounded-lg border-r-2 border-fuchsia-600 col-span-4 z-10" >
//                             <img src={included.attributes.gallery_urls} alt='no existe'></img>
//                         </div>
//                         <div className="bg-blue-400 max-h-full rounded-r-lg border-r-2 border-fuchsia-600 col-span-3 col-start-4,5 z-0 ">A</div>
//                         <div className="bg-blue-400 max-h-full rounded-r-lg col-span-2">A</div> 
//                     </>

  // let ref = included.find(e => Number(e.id)===id)
                // console.log('ref',ref, id)
                // return <>
                //         <div className="bg-blue-400 max-h-full rounded-lg border-r-2 border-fuchsia-600 col-span-4 z-10" >
                //             <img src={ref.attributes.gallery_urls[0]} alt='no existe'></img>
                //         </div>
                //         <div className="bg-blue-400 max-h-full rounded-r-lg border-r-2 border-fuchsia-600 col-span-3 col-start-4,5 z-0 ">A</div>
                //         <div className="bg-blue-400 max-h-full rounded-r-lg col-span-2">A</div> 
                //     </>