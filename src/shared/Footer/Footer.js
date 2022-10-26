import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <div>
           
            <footer className='text-white py-2 bg-info'>
                <div className='container'>
                    <nav className=' d-flex align-items-center justify-content-center'>
                        <Link to='/' className='col-10 col-md3 '>
                            <img src={logo} className='mx-2' width='150'  alt=""/>  
                                        
                        </Link>
                        <h5>Copy Right @</h5>
                       
                    </nav>
                    
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;