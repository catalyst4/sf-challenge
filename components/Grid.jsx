import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useItemsGetter } from '../hooks/useItemsGetter'

export const Grid = () => {

    const [pageNumber, setPageNumber] = useState(1)
    
    const {
        items,
        loading,
        hasMore
    } = useItemsGetter(pageNumber)

    const observer = useRef()
    const lastItem = useCallback((node) => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(pageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading])

    let disabledItems = []
    if(process.browser) {
        disabledItems = JSON.parse(localStorage.getItem('disabledItems'))
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((item, i) => {
                if(disabledItems && disabledItems.find(disabledItem => disabledItem === item.id)) {
                    if(items.length === i + 1) {
                        return <Item localDisabled={true} ref={lastItem} key={item.id} id={item.id} name={item.name} />                    
                    } else {
                        return <Item localDisabled={true} key={item.id} id={item.id} name={item.name} />
                    }  
                } else {
                    if(items.length === i + 1) {
                        return <Item ref={lastItem} key={item.id} id={item.id} name={item.name} />                    
                    } else {
                        return <Item key={item.id} id={item.id} name={item.name} />
                    }    
                }
            })}
            {
                [...Array(27)].map((item, i) => (
                    <div
                        key={i}
                        className={`animate-pulse bg-gray-100 w-full h-32 flex justify-center items-center font-bold rounded-2xl text-center`}
                    >
                        <div className="w-3/5 h-5 rounded-lg bg-gray-300"></div>
                    </div>    
                ))
            }
        </div>
    )
}

const Item = forwardRef(({ id, name, localDisabled }, ref) => {

    const [disabled, setDisabled] = useState(localDisabled ? localDisabled : false)

    useEffect(() => {
        if(disabled) {
            const disabledItems = JSON.parse(localStorage.getItem('disabledItems'))
            if(disabledItems?.find(disabledItem => disabledItem === id)) return
            if(disabledItems) {
                localStorage.setItem('disabledItems', JSON.stringify([...disabledItems, id]))
            } else {
                localStorage.setItem('disabledItems', JSON.stringify([id]))                
            }
        }
    }, [disabled])

    return (
        <button 
            ref={ref} 
            onClick={() => setDisabled(true)}
            className={`${disabled ? 'bg-blue-100 text-blue-600 opacity-30' : 'bg-blue-100 text-blue-600'} w-full h-32 flex justify-center items-center font-bold rounded-2xl text-center`}
        >{name}</button>
    )
})