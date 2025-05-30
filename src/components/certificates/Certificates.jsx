import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import cer1 from '../../assets/cer1.png'
import cer2 from '../../assets/cer2.png'
import cer3 from '../../assets/cer3.png'
import cer4 from '../../assets/cer4.png'
import cer5 from '../../assets/cer5.png'

const Certificates = () => {
  return (
    <div className='py-[50px]'>
      <Container>
        <h2 className='text-heading2 text-center mb-10 font-bold'>Your Trusted HVAC Experts</h2>
        <Flex className="justify-center mx-auto w-[756px] gap-x-10">
          <img className='' src={cer1} alt="" />
          <img src={cer2} alt="" />
          <img src={cer3} alt="" />
          <img src={cer4} alt="" />
          <img src={cer5} alt="" />
        </Flex>
      </Container>

    </div>
  )
}

export default Certificates