import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Prescripto Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is your trusted partner in healthcare management. We connect patients with qualified healthcare professionals, making appointment booking simple, fast, and convenient. Your health, our priority.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link to='/' className='hover:text-primary transition-all duration-300'>
              <li>Home</li>
            </Link>
            <Link to='/about' className='hover:text-primary transition-all duration-300'>
              <li>About us</li>
            </Link>
            <Link to='/contact' className='hover:text-primary transition-all duration-300'>
              <li>Contact</li>
            </Link>
            <Link to='/doctors' className='hover:text-primary transition-all duration-300'>
              <li>All Doctors</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-primary transition-all duration-300'>
              <a href="tel:+12124567890">+1-212-456-7890</a>
            </li>
            <li className='hover:text-primary transition-all duration-300'>
              <a href="mailto:rashii.malik02@gmail.com">rashii.malik02@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <div className='py-5 text-sm text-center space-y-2'>
          <p>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
          <p className='text-gray-500'>Developed by <span className='font-semibold text-primary'>Rashi Malik</span> - One Man Army 💪</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
