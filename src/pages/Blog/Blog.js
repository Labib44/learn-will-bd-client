import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container p-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is CORS ?</Accordion.Header>
                    <Accordion.Body>
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>why are you using firebase ? What others options do you have to implement authentication</Accordion.Header>
                    <Accordion.Body>
                    Firebase is a free service that lets users log in with their Google account. Firebase is a good choice if you plan to either write a brand-new application or rewrite an existing one from scratch. Additionally, Firebase helps in the easy storing and retrieval of dynamic content. If you decide to develop the application without any form of custom coding the backend, Firebase makes this easy. Firebase is also serverless which means that Firebase runs on the cloud and you don’t need a physical server that’s constantly running.
                    <br/>
                    Token Authentication: A token is a material device that is used to access secure systems. Common forms include a dongle, card, or RFID chip. A token makes it more difficult for a hacker to access an account since they must have long credentials and the tangible device itself, which is much harder for a hacker to obtain.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route works ?</Accordion.Header>
                    <Accordion.Body>
                       The react private route component renders child components (children) if the user is logged in. if not logged in the user is redirected to the / login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is node ? how does node work</Accordion.Header>
                    <Accordion.Body>
                       Node.js is an open sourse, cross-platform, back-end javaScript runtime enviornment that runs on a javaScript Engine and executes javaScript code outSide a wab browser , which was designed to build scalable network application.
                       <br/>
                       It is used as backend service where javaScript works on the server-side of the application. This way javaScript is used on both fontEnd and backend.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;