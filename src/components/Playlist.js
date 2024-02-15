import React, { useEffect, useState } from 'react'

const items = [
    {
        desc : 'A scene from Lucia',
        id :1
    },
    {
        desc : 'Post Trailer Talks',
        id :2
    },
    {
        desc : 'Rakshith shetty promo',
        id :3
    },
    {
        desc : 'Irfan Khan About Lucia',
        id :4
    },
    {
        desc : 'Lucia Trailer',
        id :5
    },
    {
        desc : 'Pawan Kumar Vlog 2',
        id :6
    },
    {
        desc : 'Satheesh Interview',
        id :7
    },
    {
        desc : 'Song Reaction at London',
        id :8
    }
]

function shuffleArray() {
    let array = [...items]
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const Playlist = ({setCurrent}) => {
    const [list , setList] = useState([])
    useEffect(()=>{
        setList(items)
    },[])
  return (
    <div className='h-[490px] overflow-y-scroll cursor-pointer pl-2'>
        <button
            className='m-2 px-2 border w-1/3 bg-slate-400 hover:bg-slate-300 rounded' 
            onClick={()=>{
            console.log('clikked')
            setList(shuffleArray())
            console.log(list)}
            }>Reorder</button>
        {list.map((item)=>{
            return (
            <div
            className='p-2 flex' key={item.id}
            onClick={()=>{
                console.log('image clicked')
                setCurrent(item.id)}}
            ><img  src={'./thumbnails/t'+item.id+'.png'} className='rounded' alt='lucia'/>
            <div>
                 <h1 className='p-2 font-bold text-xl'>{item.desc}</h1>
                <h1 className='p-2 text-slate-400'>By Pawan Kuymar</h1>  
            </div>
                
            </div>
            )
        })}
    </div>
  )
}

export default Playlist