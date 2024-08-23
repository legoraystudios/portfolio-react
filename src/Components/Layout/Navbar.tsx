import Logo from "../../Images/logo2.png"

const Navbar = () => {
    return (
    <div>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
            <header>
                <nav className="navbar navbar-expand-md bg-transparent">
                    <div className="container-fluid mx-5 fs-4">
                        <a className="navbar-brand" href="/"><img src={Logo} alt="" height="50" /></a>
                        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="bi bi-list fs-1 text-white"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="text-decoration-none btn-custom px-2 active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item text-decoration-none btn-custom px-2" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item text-decoration-none btn-custom px-2" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-item text-decoration-none dropdown-toggle btn-custom px-2" href="#"
                                    data-bs-toggle="dropdown" aria-expanded="false">Developer Hub</a>
                                        <ul className="dropdown-menu" data-bs-theme="dark">
                                          <li><a className="dropdown-item" href="#">Service Status</a></li>
                                          <li><a className="dropdown-item" href="#">Intranet</a></li>
                                          <li><hr className="dropdown-divider"></hr></li>
                                          <li><a className="dropdown-item" href="#"></a></li>
                                        </ul>
                                </li>
                            </ul>
                                <div className="d-flex">
                                    <a className="nav-item btn-custom px-2" href="mailto:hola@legoray.com"><i className="bi bi-envelope"></i></a>
                                    <a className="nav-item btn-custom px-2" href="https://www.linkedin.com/in/raymond-negron-27360024a/" rel="noreferrer" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    <a className="nav-item btn-custom px-2" href="http://github.com/legoraystudios" rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                </div>
                        </div>
                    </div>
                </nav>
            </header>
    </div>
    )
}

export default Navbar