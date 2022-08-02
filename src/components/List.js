import React, { useState } from "react";
// import {Container,Col,Row } from 'react-bootstrap';
// import {Container,Row,Col} from 'react-bootstrap'



function List() {


    const [state, setState] = useState({

        products: [
            {

                sno: "001",
                img: "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
                name: "samsung",
                price: "1500",
                qty: "0",
            },
            {

                sno: "002",
                img: "https://rukminim1.flixcart.com/image/332/398/kpsnzww0/watch/4/0/f/men-sport-watch-high-end-silicone-strap-military-wrist-watch-led-original-imag3yesmmjkhupy.jpeg?q=50",
                name: "mi-watch",
                price: "1500",
                qty: "2",
            },
            {

                sno: "003",
                img: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398806-sm-r865fzsainu-481079675?$730_584_PNG$",
                name: "oppo",
                price: "2500",
                qty: "4",
            },
            {

                sno: "4",
                img: "https://secureservercdn.net/160.153.138.217/gvt.827.myftpupload.com/wp-content/uploads/2022/04/92c939862e9e72039dff598bd54c8795d93a22db_original_1024x_6e0c3957-2557-40e1-89d6-2ec8ea77e279_823x-1.jpg?time=1658398459",
                name: "LG",
                price: "2000",
                qty: "30",
            },
            {

                sno: "005",
                img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/LG%EC%A0%84%EC%9E%90%2C_%EC%84%B8%EA%B3%84_%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%9B%8C%EC%B9%98_%EC%8B%9C%EC%9E%A5_%EB%B3%B8%EA%B2%A9_%EA%B3%B5%EB%9E%B5_-_14507399524.jpg/450px-LG%EC%A0%84%EC%9E%90%2C_%EC%84%B8%EA%B3%84_%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%9B%8C%EC%B9%98_%EC%8B%9C%EC%9E%A5_%EB%B3%B8%EA%B2%A9_%EA%B3%B5%EB%9E%B5_-_14507399524.jpg",
                name: "redmi",
                price: "2800",
                qty: "25",
            },
        ]
    })
    let { products } = state;



    return (


        <React.Fragment>


            <div className="container mt-3">
                <div className="row">

                    <div className="col">
                        <p className="h3 text-success">product cart</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">


                        {

                            products.map((product) => {


                                return (
                                    <div key={product.sno} className="card shadow-lg mt-2">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={product.img} alt="no img"  width="200" height={200}/>
                                                </div>
                                                <div className="col-md-6">

                                                    <b> <h2 className="display-4">{product.name}</h2></b>
                                                    <h6 className="display-6">&#8377;{product.price}</h6>
                                                    <h6 className="display-6">

                                                        {
                                                            product.qty >= 10 && <span className="text-success">available</span>
                                                        }
                                                        {
                                                            product.qty <= 10 && product.qty >= 1 && <span className="text-warning">almost out of stock</span>
                                                        }

                                                        {
                                                            product.qty == 0 && <span className="text-danger">out of stock </span>
                                                        }
                                                    </h6>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )

                            })



                        }

                    </div>
                </div>
            </div>




        </React.Fragment >

    )

}
export default List;