import React from 'react'
import Card from './Parts/Card'

const laptops = [
  {
    id : "1",
    name: "MSI laptop",
    price : "200",
    description : "The best gaming laptop in the world",
  },
  {
    id : "2",
    name: "Asus laptop",
    price : "250",
    description : "The most compact laptop in the world",
  },
  {
    id : "3",
    name: "TUF laptop",
    price : "400",
    description : "The best design laptop in the world",
  },
  {
    id : "4",
    name: "Dell laptop",
    price : "500",
    description : "The greatest laptop in the world",
  },
  {
    id : "5",
    name: "Acer laptop",
    price : "430",
    description : "The most minimalist laptop in the world",
  },
  {
    id : "6",
    name: "Macbook",
    price : "800",
    description : "The thinnest laptop in the world",
  },
]

const Body = () => {
  return (
    <section className='body'>
      {
        laptops.map((laptop) => (
          <Card key ={laptop.id} laptop ={laptop}/>
        ))
      }
    </section>
  )
}

export default Body