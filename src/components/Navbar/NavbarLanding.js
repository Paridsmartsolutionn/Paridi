
import React from 'react'
import Login from '../authenticate/signIn/Login'
import { Link } from 'react-router-dom';
import "./NavStyles/NavBar.scss"
import MenuIcon from '@mui/icons-material/Menu';




const NavbarLanding = () => {
  return (
    <main className='sticky top-0 z-10'>
        <section style={{background:'#1971c2'}} className='  section container h-16  flex justify-around'>
       
          <div className=' flex items-center basis-7'>
           <Link className='font-bold pss-logo drop-shadow-md  text-white text-5xl ' to={'/'}><h1> PSS</h1></Link>
            
          </div>
         
          <div className=' links-outside text-md tracking-wide text-white font-normal basis-2/3 flex justify-start items-center  '>
  
             <Link  to={'/'} className=' py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30 transition duration-200 ease-in-out'>Sherbime</Link>
             <Link to={'/'} className='  py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30  transition duration-200 ease-in-out '>Evente</Link>
             <Link to={'/'} className='  py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30  transition duration-200 ease-in-out  '>Paketat</Link>
             <Link to={'/'} className='  py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30  transition duration-200 ease-in-out '>Kontakt</Link>
             <Link to={'/'} className='  py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30  transition duration-200 ease-in-out '>Gjuhet</Link>
         
          </div>

          <div className='text-white text-lg mt-2.5 mb-2.5 links-outside  font-bold flex
            items-center  py-2 px-3 rounded-md transform hover:bg-blue-400  hover:bg-opacity-30
            transition duration-300 ease-in-out  '>
            

             <Login />
          </div>
          <div className='icona  flex items-center mr-4 text-white'>
            <MenuIcon/>
          </div>



        </section>
    </main>
  )
}

export default NavbarLanding