import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { id, balance, picture, lecture, Quiz, category, Duration, Language, rating, totalView, title, details } = useLoaderData();
    const checkOut=()=>{
 toast.success('succrss',{autoClose:3000,position:"top-center"})
 alert('success')
    }
    return (
       
            
           <div className='d-flex  justify-content-center '>
           <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                     <p>Price: {balance}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center ">
                    <Button onClick={checkOut} variant="primary">Check Out</Button>
                    <Button  variant="primary">Download pdf </Button>
                    </div>
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

export default CheckOut;