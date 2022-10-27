import React from 'react';
import working from '../../assets/img/working.png'

const Review = () => {
    return (
        <div className="container mt-5">
             
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={working} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Explore The learning
                                Institute</h5>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are going
                                to use a passage of Lorem Ipsum, you need to be sure.</p><br/>
                            <p className="card-text">Anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                                generators on the Internet tend to repeat predefined.</p><br/><br/><br/>

                            <div className=" row">
                                <div className="col-4">
                                    <h1>3.2k +</h1>
                                    <p>Online Course</p>
                                </div>
                                <div className="col-4">
                                    <h1>600k +</h1>
                                    <p>Expert member</p>
                                </div>
                                <div className="col-4">
                                    <h1>5.2k +</h1>
                                    <p>Rating & Review</p>
                                </div>
                            </div><br/><br/><br/>
                            <p>
                                <button type="button" className="btn btn-warning">Read More</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Review;