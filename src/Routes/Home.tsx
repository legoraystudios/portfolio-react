import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"
import { useEffect, useState } from "react";
import DevIcons from "../Components/Layout/DevIcons";
import AstronautImage from "../Images/th.png";
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
                            {/*<h3 className="text-white mb-4">My Projects</h3>
                                <table className="table text-white-50 mb-5">
                                    <thead>
                                        <th scope="row">ID</th>
                                        <td className="">Project</td>
                                        <td>Stars</td>
                                        <td>Language</td>
                                    </thead>

                                    {
                                        repo && repo.map( record => {
                                            return(
                                            <tbody>
                                                <th scope="row" className="transparent text-white" key={record.id}>{record.id}</th>
                                                <td className="transparent"><a className="transparent project-link text-decoration-none" href={`https://github.com/legoraystudios/${record.name}`} target="_blank" rel="noreferrer">{record.name}</a></td>
                                                <td className="transparent text-white">{record.stargazers_count}</td>
                                                <td className="transparent text-white">{record.language}</td>
                                            </tbody>
                                            )
                                        })
                                    }
                                </table>
                                <p className="text-white-50">Find more proyects on my <a className="link text-decoration-none" href="https://github.com/legoraystudios" target="_blank" rel="noreferrer"><i className="bi bi-github"></i> GitHub website</a></p>
                        */}
                        </div>
                        <div className="arrow-scroll-down text-center">
                            <a className="text-decoration-none" href="#">
                                <i className="fs-1 bi bi-arrow-down-short purple"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5 secondary-color">
                <h4 className="text-white text-center">My Projects</h4>
                <p className="text-center text-white-50">Here you can see all the janky stuff that I made</p>
            </div>

            <div className="my-5">
                <Footer/>
            </div>
        </body>
        </div>
    )
}

export default Home