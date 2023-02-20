import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner({title}) {
  return (
    <div className='relative'>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading='lazy' src="/images/homebg.jpg" alt="" />
                <div className='ml-2 xl:ml-[25px] 2xl:ml-[40px] text-left absolute xl:top-[60px] 2xl:top-[70px]  space-y-4 bg-white py-8 px-12 shadow-lg rounded-sm'>
                    <h3 className='text-5xl mb-3 w-84 text-black font-bold font-[RoganRegular]'>{title}</h3>
                    <p className="text-xl mb-3 w-84 text-gray-600 w-[500px] font-[Roboto] font-normal">Attain a world of knowledge — at home or on the go. Courses as low as ₹455 through tomorrow.</p>
                    <p className='underline text-[#5624d0] text-xl'>Learn More</p>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Banner