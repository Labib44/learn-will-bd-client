import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../shared/CourseCard/CourseCard';

const Course = () => {
    const allCourse=useLoaderData();
    return (
        <div>
            <h1>this is  Course component</h1>
            <div className='m-3'>
            <h1>all Course{allCourse.length}</h1>
            
            {
                allCourse.map(course=> <CourseCard
                key={course.id}
                course={course}
                ></CourseCard>)
            }
        </div>
        </div>
    );
};

export default Course;