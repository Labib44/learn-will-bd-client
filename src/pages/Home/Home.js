import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../shared/CourseCard/CourseCard';


const Home = () => {
    const allCourse=useLoaderData();
    return (
        <div className='m-3'>
            <h1>this is Home</h1>
            {/* <h1>all Course{allCourse.length}</h1>
            
            {
                allCourse.map(course=> <CourseCard
                key={course.id}
                course={course}
                ></CourseCard>)
            } */}
        </div>
    );
};

export default Home;