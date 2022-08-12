import React, { useEffect, useState } from 'react'
import ShopCart from '../ShopCart/ShopCart'
// import img from '../../assets/images/logo-white.png'
import './PageCart.css'
const PageCart = () => {
  const [subTotal, setSubTotal] = useState(0)
//  const [totalPrice, setTotalPrice] = useState(0)
  
  
  const cart = [
          {
            "_id": 3,
            "name": "Celular Samsung A02s",
            "price": 20,
            "category": "Celular",
            "description": "Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.",
            "img": "https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png",
            "stock": 5,
            "__v": 0,
            "imgFavorite": "https://www.cronista.com/files/image/449/449213/621670f4ec1c1.jpg",
            "isAproved": false
        },
        {
          "_id": 2,
          "name": "Celular Samsung A02s",
          "price": 20,
          "category": "Celular",
          "description": "Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.",
          "img": "https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png",
          "stock": 3,
          "__v": 0,
          "imgFavorite": "https://www.cronista.com/files/image/449/449213/621670f4ec1c1.jpg",
          "isAproved": false
      },
        
  ]

    // const sumTotal = () => {
    //   setTotalPrice(
    //     cart
    //       .map((prod) => prod.price * cantidad)
    //       .reduce((total, valor) => total + valor)
    //   );
    // }

    // useEffect(() => {
    //   sumTotal()
    // }, [])
   
    
     return (
    
     <div className='page_cart container-lg card shadow'>
       <h1>Carrito</h1>
       <div className='cart-container'>
           {
            cart.map((prod) => (
             <ShopCart key={prod._id} prod={prod}  setSubTotal={setSubTotal}/>
            ))
           }
            <div className='card-buy-container'>
             <div className='card-buy'>
              <h1>Total $ {subTotal}</h1>
              <button type="button" className="btn btn-success">Comprar</button>
             </div>
          </div>
     </div>
     </div>
    
  )
}

export default PageCart