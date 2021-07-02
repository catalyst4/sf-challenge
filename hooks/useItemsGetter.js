import { useEffect, useState } from 'react'
import axios from 'axios'

export const useItemsGetter = (pageNumber) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        getItems()
    }, [pageNumber])

    const getItems = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://sf-legacy-api.now.sh/items?page=${pageNumber}`)
        if(pageNumber === 10_000) {
            setHasMore(false)
        }
        setItems(currentData => { return [...new Set([...currentData, ...data.data])] })
        setLoading(false)
    }
    
    return { items, loading, hasMore }
}