import React, { useState, useMemo } from 'react'

const SortableList = () => {
    const [keyword, setKeyword] = useState('')
    const [names] = useState(['David','Alice','Charlie','B0b'])

    const filtered=useMemo(()=>{
        console.log('정렬 및 필터링 중...')
        return names
        .filter((name)=>name.toLowerCase().includes(keyword.toLowerCase()))
        .sort()
    },[keyword,names])
    return (
        <div>
            <h2>
                useMemo 정렬리스트
            </h2>
            <input 
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
            type="text"/>
            <ul>
                {filtered.map((name, index)=>(

                    <li key={index}>{name}</li>
                ))}
            </ul>

        </div>
    )
}

export default SortableList