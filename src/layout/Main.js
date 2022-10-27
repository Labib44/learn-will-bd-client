import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Review from '../pages/Review/Review';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import SideNav from '../shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                    
                    <SideNav></SideNav>
                    </Col>
                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>
                   
                </Row>
            </Container>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Main;