import {React, useState} from 'react'
import { hamburger, navLinks } from '../constants';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return (
      <header className="py-4 font-sans px-8 sm:px-16 z-10 w-full bg text-black font-medium">
        <nav className="flex justify-between items-center max-container font-Montserrat">
          <ul className="flex justify-center items-center gap-10 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-base leading-normal hover:text-[#559adb]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <a href="/" className='font-Lilita text-2xl font-medium mr-24 text-[#559adb]'>
            {/* <img src={logo} width={60} alt="logo" /> */}
            <span className="bg-[#559adb] mr-1 px-3 rounded-full text-[#559adb]">.</span>
            Pulse.ai
          </a>
          <div className="flex justify-center text-base items-center max-lg:hidden gap-4">
            <span>
                English
            </span>
                <span className="cursor-pointer border border-black text-black px-5 py-1 rounded-full hover:text-white hover:border-[#559adb] hover:bg-gradient-to-br from-[#77b6e0] to-[#3598db]">
                  SignUp
                </span>
          </div>
          <div className="lg:hidden">
            <button onClick={toogleNavbar}>
              {isOpen ? <p className='text-lg font-semibold'>X</p> : <img src={hamburger} width="19" alt="menu" />}
            </button>
          </div>
        </nav>
        <div className='flex justify-end'>
          {isOpen &&
          <div className="lg:hidden list-none px-4 py-2  bg-[#559adb] rounded-lg absolute">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-slate-600leading-normal hover:text-r-logo w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          <div className="flex flex-col mt-2 text-lg font-medium"> 

                <span className="cursor-pointer hover:text-r-dbtn">
                  SignUp
                </span>
          </div>
          </div>}
        </div>
      </header>
    );
}

export default Nav