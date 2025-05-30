import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'


const Banner = () => {
  return (
    <div className="bg-[url(assets/bannerbg.jpg)] bg-cover pt-[191px] pb-[76px] text-white">
      <Container>
        <Flex>
<div className="left">
<h1>Reliable HVAC for Every Season</h1>
          <ul>
            <li><span>icon </span>Certified & Experienced Technicians</li>
            <li><span>icon </span>Fast, Reliable Service</li>
            <li><span>icon </span>Transparent, Affordable Pricing</li>
          </ul>
          <Flex className="inputs gap-[10px] p-[10px] text-black bg-white w-[390px] rounded-[8px]">
            <input type="text" className='pl-[12px] py-[10px] border border-primary rounded-[8px] outline-none  pr-[0px] w-[180px]' placeholder='Name'/>
            <input type="text" className='pl-[12px] py-[10px] border border-primary rounded-[8px] outline-none  pr-[0px] w-[180px]' placeholder='Phone'/>
            <select className='pl-[12px] py-[10px] pr-[0px] border border-primary rounded-[8px] outline-none w-[180px]'>
  <option value="Service">Service</option>
  <option value="Knowing">Knowing</option>
  <option value="Newsletter">Newsletter</option>
</select>
            <Button>Submit</Button>
          </Flex>
</div>

        </Flex>

      </Container>

    </div>
  )
}

export default Banner