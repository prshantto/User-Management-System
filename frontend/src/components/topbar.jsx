import React, { useState } from 'react'
import { UserCard } from './CreateUser'
import { Button } from './ui/button'
import { PlusCircleOutlined, HeartOutlined } from '@ant-design/icons'

function Topbar() {
const [showCard,setShowCard] = useState(false)
    
  return (
    <div className='w-full h-10 flex justify-end items-center gap-2 bg-gray-200 fixed'>
        <Button size="sm"><HeartOutlined /> Favourites </Button>
        <PlusCircleOutlined style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>setShowCard(true)} className='m-2'/>
        {showCard && <UserCard onclose={()=>setShowCard(false)}/>}
    </div>
  )
}

export default Topbar