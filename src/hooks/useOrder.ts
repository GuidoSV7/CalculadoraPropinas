import { useState } from "react"
import type { MenuItem, OrderItem } from '../types/index';




export default function useOrder() {
  
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExist = order.findIndex(order => order.id === item.id)
        if(itemExist !== -1){
            const updateOrder = [...order]
            updateOrder[itemExist].quantity++
            setOrder(updateOrder)
        }else{
            const newItem:OrderItem = {...item, quantity:1}
            setOrder([...order, newItem]) 
        }
        
       
        
    }

    const removeItem = (id:number) => {
        setOrder(order.filter(item => item.id !== id))  
    }

    const rebootOrders = ( ) =>{
        setOrder([])
        setTip(0)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        removeItem,
        order,
        tip,
        setTip,
        rebootOrders,
        placeOrder

    }


}
