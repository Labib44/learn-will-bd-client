import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar, FaEye } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const {id, balance, picture, lecture, Quiz, category, Duration, Language, rating, totalView, title, details}=course;
    return (
        <div>         
            <Card className="mb-3">
                <Card.Header>{category}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={picture} />
                    <div className="p-3 ">
                        <p className='mb-2 '>Lecture: {lecture}</p>
                        <p className='mb-2 '>Total Quiz: {Quiz}</p>
                        <p className='mb-2 '>Course Duration: {Duration}</p>
                        <p className='mb-2 '>Language: {Language}</p>
                        <p className='mb-2 '>Price:{balance}</p>
                    </div>
                    <Card.Text>
                       {
                       details.length >200 ?
                       <p>{details.slice(0,200) + '...'} <Link>Read More</Link></p>
                       :
                       <p>{details}</p>
                       }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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

export default CourseCard;