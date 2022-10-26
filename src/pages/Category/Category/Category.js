import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/fa";

const Category = () => {
    const course = useLoaderData();
    return (
        <div className='m-3'>
            
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={course.picture} />
                <Card.Body>
                    <Card.Title>{course.category}</Card.Title>
                    <p>Lecture: {course.lecture}</p>
                    <p>Total Quiz: {course.Quiz}</p>
                    <p>Course Duration: {course.Duration}</p>
                    <p>Language: {course.Language}</p>
                    <p>Price: {course.balance}</p>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer>
                    
          <small className="text-muted"> Rating: {course.rating}</small>
          <small className="text-muted ">Views: {course.totalView}</small>
        </Card.Footer>
            </Card>
        </div>
    );
};

export default Category;