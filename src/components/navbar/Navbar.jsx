import React from 'react'
import Flex from '../layouts/Flex'
import Container from '../layouts/Container'

const Navbar = () => {
  const navItems= ["About Us", "Services", "Past Work", "Reviews"]
  return (
    <div className='navbar fixed top-[26px] w-full'>
      <Container>
      <div className=' bg-white px-[27px] py-[7px] pr-[13px] rounded-[35px]'>
      <Flex>
        <div className="logo">Logo</div>
        <div className="navItems">
          <ul>
            <Flex className="gap-[20px]">
            {
              navItems.map((item)=>(
                <li>{item}</li>
              ))
            }
            </Flex>
          </ul>
        </div>
        <div className="button">
          <button className='px-[24px] rounded-[28px] bg-blue-400 py-[16px]'><a href="#">Get Free Quote</a></button>
        </div>
      </Flex>
      </div>
      </Container>

    </div>
  )
}

export default Navbar