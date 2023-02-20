import React from 'react'
import CourseRecommend from './CourseRecommend/CourseRecommend'

const course = [
    {
     id: 1,
     title: "Creating 3D environments in Blender",
     image: "https://img-b.udemycdn.com/course/240x135/683198_ef78_7.jpg",
     author: "Rob Tuytel, Erik Selin",
     rating: "4.6 ⭐⭐⭐⭐⭐",
     review: "(10,092)",
     price: "RS 455",
     originalprice: "3499",
     tag: "Bestseller"
    },
    {
     id: 2,
     title: "The Blender 2.8 Encyclopedia",
     image: "https://img-b.udemycdn.com/course/240x135/2302354_4ddd_8.jpg",
     author: "Lee Salvemini, Chris Plush, CG Masters",
     rating: "4.7 ⭐⭐⭐⭐⭐",
     review: "(6,023)",
     price: "RS 455",
     originalprice: "3499",
     tag: "Bestseller"
    },
    {
     id: 3,
     title: "The Web Developer Bootcamp 2022",
     image: "https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg",
     author: "Colt Steele",
     rating: "4.7 ⭐⭐⭐⭐⭐",
     review: "(224,925)",
     price: "RS 455",
     originalprice: "3499",
     tag: "Bestseller"
    },
    {
     id: 4,
     title: "The Complete 2022 Web Development Bootcamp",
     image: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_15.jpg",
     author: "Dr. Angela Yu",
     rating: "4.7 ⭐⭐⭐⭐⭐",
     review: "(166,816)",
     price: "RS 455",
     originalprice: "3499",
     tag: "Bestseller"
    },
    {
     id: 5,
     title: "Creating 3D environments in Blender",
     image: "https://img-b.udemycdn.com/course/240x135/683198_ef78_7.jpg",
     author: "Rob Tuytel, Erik Selin",
     rating: "4.6 ⭐⭐⭐⭐⭐",
     review: "(10,092)",
     price: "RS 455",
     originalprice: "3499",
     tag: "Bestseller"
    },
]

function Recommendation() {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:mt-2 mx-auto'>
        {course.map(({id,title,image,author,rating,review,price,originalprice, tag}) => (
            <CourseRecommend 
                key={id}
                id={id}
                title={title}
                image={image}
                author={author}
                rating={rating}
                review={review}
                price={price}
                originalprice={originalprice}
                tag={tag}
            />
        ))}
    </div>
  )
}

export default Recommendation