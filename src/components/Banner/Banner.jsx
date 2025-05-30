import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'
import bannerImg from '../../assets/bannerImg.png'
import bannerLogo1 from '../../assets/bannerLogo1.png'
import bannerLogo2 from '../../assets/bannerLogo2.png'
import bannerLogo3 from '../../assets/bannerLogo3.png'


const Banner = () => {
  return (
    <div className="bg-[url(assets/bannerbg.jpg)] bg-cover pt-[191px] pb-[76px] text-white">
      <Container>
        <Flex>
<div className="left w-1/2">
<h1 className='text-[64px] font-bold leading-[72px] tracking-[-0.2%]'>Reliable HVAC for Every Season</h1>
          <ul className='mt-[20px] mb-10'>
            <li><span>icon </span>Certified & Experienced Technicians</li>
            <li className='my-[10px]'><span>icon </span>Fast, Reliable Service</li>
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
          <div className="installer mt-[40px]">
            <p>Certified Installer</p>
            <Flex className="justify-start mt-[10px] gap-x-10">
              <img src={bannerLogo1} alt="" />
              <img src={bannerLogo2} alt="" />
              <img src={bannerLogo3} alt="" />

            </Flex>
          </div>
</div>
<div className="right w-1/2">
<img src={bannerImg} alt="" />

</div>

        </Flex>

      </Container>

    </div>
  )
}

export default Banner