import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Members = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const isActive=searchParams.get('filter')==='active'
  return (
    <>
    <div>Members</div>
    <button onClick={()=>setSearchParams({filter:'active'})}> Aktiv üzvlər</button>
    <button onClick={()=>setSearchParams()}>Bütün üzvlər</button>
    {isActive? <h2>Aktiv üzvlər</h2>:<h2>Bütün üzvlə</h2>}
    </>
  )
}

export default Members