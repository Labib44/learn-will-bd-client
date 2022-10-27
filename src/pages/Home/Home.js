import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CourseCard from '../../shared/CourseCard/CourseCard';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'


const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='m-3'>
           
            {/* <h1>all Course{allCourse.length}</h1>
            
            {
                allCourse.map(course=> <CourseCard
                key={course.id}
                course={course}
                ></CourseCard>)
            } */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"500px"}}
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn Language And Connect With The World</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"500px"}}
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Learn Language And Connect With The World</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"500px"}}
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Learn Language And Connect With The World</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;