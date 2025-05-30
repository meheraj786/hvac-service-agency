import React from 'react'
import Container from '../layouts/Container'
import img1 from '../../assets/testimonialImage1.png'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const Reviews = () => {
  const reviews=[
    {
      img: img1,
      name: 'Chloe Anderson',
      star: "star",
      review: "“Very happy with their work! The team was efficient and the new system runs great.”"
    },
    {
      img: img1,
      name: 'Chloe Anderson',
      star: "star",
      review: "“Very happy with their work! The team was efficient and the new system runs great.”"
    },
    {
      img: img1,
      name: 'Chloe Anderson',
      star: "star",
      review: "“Very happy with their work! The team was efficient and the new system runs great.”"
    },
  ]
  return (
    <div id='reviews' className='pt-[80px] pb-[50px]'>
      <Container>
        <h2 className='text-center mb-10 font-bold text-[40px]'>Trusted by Families Like Yours</h2>

        <Flex>
          {
            reviews.map((review)=>(
              <div className='py-[23px] rounded-[50px] w-[360px] shadow-2xl group hover:bg-primary text-center px-[58px] text-black'>
                <Flex className="flex-col group-hover:text-white justify-center">
                  <img src={review.img} alt="" />
                  <h3 className='mt-2'>{review.name}</h3>
                  <span>{review.star}</span>
                  <p className='py-5'>{review.review}</p>
                  <span>goIcon</span>
                  <p>Reviewed on Google</p>



                </Flex>

              </div>

            ))
          }
        </Flex>
        <div className='text-center'>
        <Button className="mt-8 !py-[12px] !px-[24px] text-center">View More</Button>
        </div>

      </Container>
    </div>
  )
}

export default Reviews