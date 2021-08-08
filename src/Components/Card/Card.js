import React from 'react';

export default function Card() {
    return (

        <>
        <div className="grid grid-cols-9 gap-0 my-2 bg-red-200 w-64 h-48 rounded-2xl">
            <div className="bg-blue-400 max-h-full rounded-lg border-r-2 border-fuchsia-600 col-span-4 z-10" >A</div>
            <div className="bg-blue-400 max-h-full rounded-r-lg border-r-2 border-fuchsia-600 col-span-3 col-start-4,5 z-0 ">A</div>
            <div className="bg-blue-400 max-h-full rounded-r-lg col-span-2">A</div> 
        </div>
        <div>

        </div>
        <div>
            
        </div>
        </>
    )
}
