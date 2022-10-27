import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../shared/CourseCard/CourseCard';

const Course = () => {
    const allCourse=useLoaderData();
    return (
        <div className='m-3'>
            
            <div className='m-3'>
            <h1 className='text-center'>All Courses: {allCourse.length}</h1>
            
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