import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

 function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>Contact Us</h4>
                    <p>For inquiries and support:</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                    <p>Website: <a href="https://www.example.com" className="text-light">www.example.com</a></p>
                </div>
                <div className="col-md-6">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com">Facebook<i className="fab fa-facebook text-primary mx-2"></i></a><br></br>
                        <a href="https://www.twitter.com">Twitter<i className="fab fa-twitter text-info mx-2"></i></a><br></br>
                        <a href="https://www.youtube.com">Youtube<i className="fab fa-youtube text-danger mx-2"></i></a><br></br>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;