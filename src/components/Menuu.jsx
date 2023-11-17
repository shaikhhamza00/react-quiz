import React from 'react'
import img1 from '../assets/img/Rectangle 2.png'
import img3 from '../assets/img/Rectangle 3.png'
import img4 from '../assets/img/Rectangle 4.png'
import img5 from '../assets/img/Rectangle 5.png'
import img6 from '../assets/img/Rectangle 6.png'
import img7 from '../assets/img/Rectangle 7.png'

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'A rich and moist chocolate cake.',
      price: '$10.99',
      image: img1,
    },
    {
      id: 2,
      name: 'Strawberry Cheesecake',
      description: 'Creamy cheesecake with fresh strawberries.',
      price: '$12.99',
      image: img3,
    },
    {
      id: 3,
      name: 'Apple Pie',
      description: 'Classic apple pie with a flaky crust.',
      price: '$8.99',
      image: img4,
    },
    {
      id: 4,
      name: 'Red Velvet Cupcake',
      description: 'Delicious red velvet cupcake with cream cheese frosting.',
      price: '$3.99',
      image: img5,
    },
    {
      id: 5,
      name: 'Blueberry Muffin',
      description: 'Moist blueberry muffin bursting with flavor.',
      price: '$4.99',
      image: img6,
    },
    {
      id: 6,
      name: 'Tiramisu',
      description:
        'Italian tiramisu with layers of coffee-soaked ladyfingers and mascarpone.',
      price: '$14.99',
      image: img7,
    },
    // Add more dishes as needed
  ]

  return (
    <section className='menu'>
      <h2>Our Offering</h2>
      <div className='menu-grid'>
        {dishes.map((dish) => (
          <div key={dish.id} className='menu-card'>
            <img src={dish.image} alt={dish.name} className='dish-image' />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
