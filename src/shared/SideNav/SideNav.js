import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='m-3 '>

            <Card className='text-center' border="info" >
                <Card.Header>All Course:{categories.length}</Card.Header>
                <Card.Body>
                    
                    <div >
                    <Card.Text className="">
                            {
                                categories.map(category => <p key={category.id}>                                  
                                        <Link to={`/category/${category.id}`}>{category.category}</Link>
                                       
                                </p>)
                            }                      
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SideNav;