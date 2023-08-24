import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"
import { useEffect, useState } from "react";
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
            if (repoResponse.status == 200) {
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

            <div className="container-flex vertically-centered mx-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <h1 className="text-white mb-3">&#60;Hello World/&#62;</h1>
                            <p className="text-white-50 px-2 ms-3 border-desc">I'm Legoncio (Raymond), a {age} year old Computer Science Student,
                            living in Puerto Rico passionate about Front-End and Back-End Developer, dedicating my time doing some stuff and projects
                             with technologies like JavaScript, PHP, React, Express and more!</p>
                        </div>
                        <div className="col-lg">
                            <h3 className="text-white mb-4">My Projects</h3>
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
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </body>
        </div>
    )
}

export default Home