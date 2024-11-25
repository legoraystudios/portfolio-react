import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"
import { useEffect } from "react";
import LegorayLogo from "../Images/logo2.png";
import OrganizationLogo from "../Images/project-images/InterServiceCenter/SVGCSA.png";
import InterServiceCenterImage from "../Images/project-images/InterServiceCenter/InterServiceCenter.png";
import Carrousel2 from "../Images/project-images/InterServiceCenter/carrousel1.png";
import Carrousel3 from "../Images/project-images/InterServiceCenter/carrousel3.png";
import Carrousel4 from "../Images/project-images/InterServiceCenter/carrousel4.png";
import Carrousel5 from "../Images/project-images/InterServiceCenter/carrousel5.png";
import InterServiceCenterLogo from "../Images/project-images/InterServiceCenter/InterServiceCenter-Logo-White.png";

const InterServiceCenter = () => {

    useEffect(() => {
        document.title = "INTER Service Center | LEGORAY";
    }, []);

    return (
        <div>

        <body>

            <div className="alert bg-black text-white" role="alert">
                <p>
                    <img src={LegorayLogo} height={30} alt=""></img> |
                    <img src={OrganizationLogo} height={50} alt=""></img>
                    This project was developed with  
                    <i className="bi bi-balloon-heart text-danger mx-1"></i>
                    by the Student's Video Game & Computer Science Association and LEGORAY.COM
                </p>  
            </div>

            <Navbar/>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

            <div className="container-flex mx-auto mx-5">
                <div className="container">
                    <div className="d-flex justify-content-center text-center align-items-center vh-100 flex-column">
                            <h2 className="text-white">INTER - Student Service Center.</h2>
                            <h5 className="text-secondary mb-4">Connecting our university community, together.</h5>
                            <img className="w-75" src={InterServiceCenterImage} alt="" />
                        <div className="arrow-scroll-down text-center mt-5">
                            <a className="text-decoration-none" href="#about">
                                <i className="fs-1 bi bi-arrow-down-short text-success"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="grad-dark-green"></div>
            <div className="container-fluid p-3 py-5 bg-success" id="about">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="img-fluid w-75" src={InterServiceCenterLogo} alt="An screenshot of the INTER Service Center homepage."></img>
                    </div>
                    <div className="col text-white mx-3">
                        <h5>About the project</h5>
                        <p>
                            The Student Service Center is a internal web portal intended to display all upcoming student activities to connect the heart of the campus community.
                        </p>
                    </div>
                </div>
            </div>
            <div id="grad-green-dark"></div>
            <div className="container-fluid p-3">
                <div className="row">
                <div className="col text-white mx-5">
                        <h5>Features and Advantages:</h5>
                        <ul>
                            <li className="my-1">Custom Blog/Post system, where you can publish everything that is happening on the campus (activities, news & updates, alerts and so on).</li>
                            <li className="my-1">Direct links to student tools, student services and contact options making all process easier to each student.</li>
                            <li className="my-1">Administrative Panel: A custom panel where promotion staff can create and edit existing posts.</li>
                            <li className="my-1">Status Bar: A highlight feature where you can add an important message at the top of the website.</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={InterServiceCenterImage} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                              <img src={Carrousel5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                              <img src={Carrousel2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                              <img src={Carrousel3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                              <img src={Carrousel4} className="d-block w-100" alt="..." />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="grad4"></div>
            <div className="p-3 bg-secondary text-white">
                <div className="text-white mx-5">
                    <h5>And... How it will work?:</h5>
                    <ul>
                        <li>
                            This project aims to replace the default browser's webpage assigned of every device or computer configuration within the campus internal network. In this way, when a user or student
                            opens a web browser on a computer, it will be redirected to the Student Service Center, sending all network traffic to the home page and all students
                            will be able to see the latest campus activities and posts.
                        </li>
                    </ul>
                </div>
            </div>
            <div id="grad1"></div>
            <div className="p-3 bg-dark-blue text-white">
                <div className="text-white mx-5 pb-3 text-center">
                    <h5>Because every grain of sand counts. Doesn't matter how big the contribution was.</h5>
                    <p className="text-secondary">Here is the development team that contributed every bit of its effort.</p>
                </div>

                <div className="d-flex justify-content-center flex-wrap py-3">
                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/legoraystudios.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Raymond</h5>
                                <p className="text-secondary">Project Manager - Fullstack Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/NikM210.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Nikioly</h5>
                                <p className="text-secondary">FrontEnd Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/XLRock.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Xander</h5>
                                <p className="text-secondary">FrontEnd Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/XLRock.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Jason</h5>
                                <p className="text-secondary">GitHub Documentation</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/Kir1975.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Sofia</h5>
                                <p className="text-secondary">Spanish Documentation</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/XLRock.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Arturo</h5>
                                <p className="text-secondary">Project Secretary</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/XLRock.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Alejandro</h5>
                                <p className="text-secondary">Software Tester</p>
                            </div>
                        </div>
                    </div>

                    <div className="container border rounded border-secondary w-25 py-2 mx-1 my-2">
                        <div className="row">
                            <div className="col-md-2 me-2">
                                <img src="https://github.com/XLRock.png" className="rounded-circle" height={60} alt="..." />
                            </div>
                            <div className="col">
                                <h5>Edwin</h5>
                                <p className="text-secondary">Software Tester</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="grad5"></div>

            <div className="my-5">
                <Footer/>
            </div>
        </body>
        </div>
    )
}

export default InterServiceCenter