import React from 'react'
import Container from '../layouts/Container'
import img1 from '../../assets/testimonialImage1.png'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const Reviews = () => {
  const reviews=[
    {
      img: img1,
      title: '24/7 Emergency Services',
      content: "Highly trained and certified HVAC experts with years of industry experience."
    },
    {
      img: img1,
      title: '24/7 Emergency Services',
      content: "Highly trained and certified HVAC experts with years of industry experience."
    },
    {
      img: img1,
      title: '24/7 Emergency Services',
      content: "Highly trained and certified HVAC experts with years of industry experience."
    },
  ]
  return (
    <div  className='py-[50px] bg-secondary'>
      <Container>
        <h2 className='text-center mb-10 font-bold text-[40px]'>The Benefits of Choosing Us</h2>

        <Flex>
          {
            reviews.map((review)=>(
              <div className='py-[32px] rounded-[20px] w-[360px] bg-white group hover:bg-primary text-center px-[25px] text-black'>
                <Flex className="flex-col group-hover:text-white justify-center">
                  <img src={review.img} alt="" />
                  <h3 className='mt-3 text-heading3 font-medium leading-[32px] mb-1'>{review.title}</h3>
                  <p className='py-5 text-[#666666]'>{review.content}</p>
                  



                </Flex>

              </div>

            ))
          }
        </Flex>

      </Container>
    </div>
  )
}

export default Reviews