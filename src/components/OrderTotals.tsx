import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    rebootOrders: () => void,
    placeOrder: () => void
}



export default function OrderTotals({order, tip, rebootOrders, placeOrder}:OrderTotalsProps) {


    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order])
    const tipAmount = useMemo(()=> subtotalAmount * tip ,[tip, order])
    const totalAmount = useMemo(()=> subtotalAmount + tipAmount,[tip, order])


  return (
    <>
            
        <div className="space-y-3">
            <h2 className="font-black text-2xl"> Total y Propina:</h2>
            <p> Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>

            </p>

            <p> Propina {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>

            </p>

            <p> Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>

            </p>

            

        </div>
        <button
            className="w-full bg-red-600 text-white p-3 rounded-lg mt-5 disabled:opacity-10"
            onClick={rebootOrders}
            disabled={totalAmount === 0}
        >
            Limpiar
        </button>

        <button
            className="w-full bg-green-600 text-white p-3 rounded-lg mt-5 disabled:opacity-10"
            onClick={placeOrder}
            disabled={totalAmount === 0}
        >
            Guardar Orden

        </button>
    </>
  )
}
