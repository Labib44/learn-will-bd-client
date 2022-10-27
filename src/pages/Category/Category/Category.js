import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaEye } from "react-icons/fa";

const Category = () => {
    const course = useLoaderData();
    return (
        <div className='m-3'>
            
            <Card style={{ width: '30rem' }}>
                
                <Card.Img variant="top" src={course.picture} />
                <Card.Body>
                    <Card.Title>{course.category}</Card.Title>
                    <p className='mb-2'>Lecture: {course.lecture}</p>
                    <p className='mb-2'>Total Quiz: {course.Quiz}</p>
                    <p className='mb-2'>Course Duration: {course.Duration}</p>
                    <p className='mb-2'>Language: {course.Language}</p>
                    <p className='mb-2'>Price: {course.balance}</p>
                    <Card.Text>
                        
                        {
                       course.details.length >100 ?
                       <p>{course.details.slice(0,100) + '...'} <Link to={`/details/${course.id}`}>Read More</Link></p>
                       :
                       <p>{course.details}</p>
                       }
                    </Card.Text>
                    <Link className='btn btn-primary  me-2' to={`/checkOut/${course.id}`}>Get Premium</Link>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div>
                    <FaStar className='me-2'> </FaStar>{course?.rating}
                    </div>
                    <div>
                    <FaEye className='me-2'></FaEye>{course?.totalView}
                    </div>
          
        </Card.Footer>
            </Card>
        </div>
    );
};

export default Category;