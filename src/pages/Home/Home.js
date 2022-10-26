import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCourse=useLoaderData();
    return (
        <div className='m-3'>
            <h1>all Course{allCourse.length}</h1>
            
        </div>
    );
};

export default Home;