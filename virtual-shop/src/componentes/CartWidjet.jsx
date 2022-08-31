import React from 'react'

const CartWidjet = (props) => {

const {
    items,

    

    } = props;



  return (
    <div>
        {
            items.map( (elemento)=>{
                return <li>{elemento}</li>
            })
        }
    </div>
  )
}

export default CartWidjet