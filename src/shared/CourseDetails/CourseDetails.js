import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaEye } from "react-icons/fa";

import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detail = useLoaderData();
    const { picture,  category,  rating, totalView, title, details}=detail;
    return (
        <div className='m-3'>
           
            <Card style={{ width: '30rem' }}>
            
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Button variant="primary"><Link className='text-black' to={'/'}>Home</Link></Button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center ">
                    <div className='m-2'>
                        <FaStar className='me-2'></FaStar> {rating}
                       
                    </div>
                    <div className='m-2'>               
                    <FaEye className='me-2'></FaEye>{totalView}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;