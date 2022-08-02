import React from "react";
import image1 from '../images/bangkok.jpg';
import image2 from '../images/indonesia.jpg';
import image3 from '../images/malasiya.jpg';
import image4 from '../images/paris.jpg';
import './BcardDesign.css';


function CountryCard() {
    return (
        <React.Fragment>
            <div className="container mt-10">
                <div className="Main">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={image1} className="image" alt='' />
                            <div className="body1">
                                <h3>Bangkok</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing alit.
                                    Beatae enim eveniet illo nesciunt,praesentium quia reprehenderit.Corporis optio perspiciatis voluptas.
                                </p>
                                <button className="btn btn-dark btn-sm">Read More</button>

                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="col-md-3">
                        <div className="card ">
                            <img src={image2} className="image" alt='' />
                            <div className="body1">
                                <h3>Indonesia</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing alit.
                                    Beatae enim eveniet illo nesciunt,praesentium quia reprehenderit.Corporis optio perspiciatis voluptas.
                                </p>
                                <button className="btn btn-dark btn-sm">Read More</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image3} className="image" alt='' />
                            <div className="body1">
                                <h3>Malasiya</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing alit.
                                    Beatae enim eveniet illo nesciunt,praesentium quia reprehenderit.Corporis optio perspiciatis voluptas.
                                </p>
                                <button className="btn btn-dark btn-sm">Read More</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image4} className="image" alt='' />
                            <div className="body1">
                                <h3>Paris</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing alit.
                                    Beatae enim eveniet illo nesciunt,praesentium quia reprehenderit.Corporis optio perspiciatis voluptas.
                                </p>
                                <button className="btn btn-dark btn-sm">Read More</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>

    )
}
export default CountryCard;