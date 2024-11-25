import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"
import { useEffect, useState } from "react";
import DevIcons from "../Components/Layout/DevIcons";
import AstronautImage from "../Images/th.png";
import EZAvailabilityImage from "../Images/project-images/ezavailability.png";
import MANAMovieStudiosImage from "../Images/project-images/MANAMovieStudios.png";
const moment = require("moment");

interface ReposProperties {
    id: number
    name: string
    stargazers_count: number
    language: string
  }

const Home = () => {

    const [repo, setRepo] = useState<ReposProperties[]>([])
    var birth = moment('2003');
    var now = moment().format("YYYY"); 
    const age = Math.abs(birth.diff(now, 'year'));

    const fetchData = () => {
        fetch("https://api.github.com/users/legoraystudios/repos?per_page=5", {
          method: "GET",
          headers: {
          'Content-Type': 'application/json'
          }
        })
  
          .then(repoResponse => {
            if (repoResponse.status === 200) {
              return repoResponse.json()
            } else {

            }
            
          })
          .then(data => {
            setRepo(data)
          })
          
        }

    useEffect(() => {
        document.title = "Home | LEGORAY";
        fetchData()
    }, []);

    return (
        <div>


        <body>
            <Navbar/>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

            <div className="container-flex mx-auto mx-5">
                <div className="container">
                    <div className="row align-items-center vh-100">
                        <div className="col-xl">
                            <h1 className="text-white mb-3">&#60;Hello World/&#62;</h1>
                            <p className="text-white-50 px-2 ms-3 border-desc">I'm Legoncio (Raymond), a {age} year old Computer Science Student,
                            living in Puerto Rico passionate about FullStack & Mobile Developer, dedicating my time doing some stuff and projects
                             with technologies like JavaScript, PHP, React, .NET Core and more!</p>

                             <div className="mt-4">
                                <DevIcons />
                             </div>
                             <div className="mt-5">
                                <a type="button" className="ms-2 btn btn-bd-secondary" href="">
                                    <i className="bi bi-envelope me-1"></i>
                                Contact me!</a>
                                <a type="button" className="ms-2 btn btn-bd-primary" href="https://legoray.com/assets/documents/resume.pdf" target="_blank">
                                    <i className="bi bi-file-earmark-text me-1"></i>
                                Download CV/Resume</a>
                             </div>
                        </div>
                        <div className="col-md-5 text-center arrow-scroll-down">
                            <img src={AstronautImage} height={350}></img>
                        </div>
                        <div className="arrow-scroll-down text-center">
                            <a className="text-decoration-none" href="#projects">
                                <i className="fs-1 bi bi-arrow-down-short purple"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-3" id="projects">
                <h4 className="text-white text-center">My Projects</h4>
                <p className="text-center text-white-50">Here are some of my personal projects and prototypes that I made during my journey:</p>
            </div>
            <div className="container-fluid p-3 bg-dark-blue">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="img-fluid" src={EZAvailabilityImage}></img>
                    </div>
                    <div className="col text-white mx-3">
                        <h5>EZAvailability</h5>
                        <p>A web and mobile inventory management system prototype built with Node.js, Express, React, MySQL, and .NET MAUI. It allows users to create, manage, and track products and categories through a web panel and a mobile app.</p>
                        <div className="mt-5">
                           <a type="button" className="ms-2 btn btn-bd-primary" href="https://github.com/legoraystudios/EZAvailability-frontend" target="_blank">
                               <i className="bi bi-globe me-1"></i>
                           EZAvailability Web</a>
                           <a type="button" className="ms-2 btn btn-bd-primary" href="https://github.com/legoraystudios/EZAvailability-mobile" target="_blank">
                               <i className="bi bi-phone me-1"></i>
                           EZAvailability Mobile</a>
                        </div>
                        {
                        <div className="mt-5">
                            {/*<h5>
                                <i className="bi bi-star-fill text-warning mx-1"></i>1
                                <i className="bi bi-diagram-2 text-success mx-1"></i>0
                            </h5>*/}
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div id="grad2"></div>
            <div className="container-fluid p-3 bg-purple">
                <div className="row">
                <div className="col text-white mx-5">
                        <h5>Movie Database</h5>
                        <p>A web-based movie database built with NodeJS, React, Bootstrap, SpringBoot and MySQL. This project was created for a college class and it allows to create movies and make star rating with comments.</p>
                        <div className="mt-5">
                           <a type="button" className="ms-2 btn btn-bd-primary" href="https://github.com/legoraystudios/MANAMovieStudios-Web" target="_blank">
                               <i className="bi bi-globe me-1"></i>
                           MANAMovieStudios Web</a>
                        </div>
                        {
                        <div className="mt-5">
                            {/*<h5>
                                <i className="bi bi-star-fill text-warning mx-1"></i>1
                                <i className="bi bi-diagram-2 text-success mx-1"></i>0
                            </h5>*/}
                        </div>
                        }
                    </div>
                    <div className="col-sm-4">
                        <img className="img-fluid" src={MANAMovieStudiosImage}></img>
                    </div>
                </div>
            </div>
            <div id="grad3"></div>
            <div className="container-fluid p-3">
                <p className="text-center text-white-50">Find more proyects on my <a className="link text-decoration-none" href="https://github.com/legoraystudios" target="_blank" rel="noreferrer"><i className="bi bi-github"></i> GitHub website</a></p>
            </div>
            <div id="grad4"></div>
            <div className="container-fluid p-3 bg-secondary" id="contact">
                <h4 className="text-white text-center">Contact me!</h4>
                <p className="text-center text-white-50">For any inquiries, feel free to reach out to me at <a className="link text-decoration-none" href="mailto:hola@legoray.com">hola@legoray.com</a></p>
            </div>
            <div id="grad5"></div>

            <div className="my-5">
                <Footer/>
            </div>
        </body>
        </div>
    )
}

export default Home