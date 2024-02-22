import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function Home() {
    const[items,SetItems]=useState("");
    console.log(items)
    const refData=useRef();
    useEffect(()=>{
        refData.current.focus()
    },[])
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <input type="text"ref={refData} name="" id="" value={items} onChange={(e)=>SetItems(e.target.value)} placeholder='enter search items'/>
      </div>
    </div>
  )
}

export default Home
