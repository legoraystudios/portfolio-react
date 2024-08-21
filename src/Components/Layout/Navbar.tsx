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
                        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand btn-custom fs-4" href="/"><img src={Logo} alt="" height="50" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav">
                                <a className="nav-item text-decoration-none btn-custom px-2 active" href="#">Home</a>
                                <a className="nav-item text-decoration-none btn-custom px-2" href="#">Projects</a>
                                <a className="nav-item text-decoration-none btn-custom px-2" href="#">Contact</a>
                                <li className="nav-item dropdown">
                                    <a className="nav-item text-decoration-none dropdown-toggle btn-custom px-2" href="#"
                                    data-bs-toggle="dropdown" aria-expanded="false">Developer Hub</a>
                                        <ul className="dropdown-menu">
                                          <li><a className="dropdown-item" href="#">Service Status</a></li>
                                          <li><a className="dropdown-item" href="#">Intranet</a></li>
                                          <li><hr className="dropdown-divider"></hr></li>
                                          <li><a className="dropdown-item" href="#"></a></li>
                                        </ul>
                                </li>
                            </div>
                        </div>
                        <div className="d-flex">
                            <a className="btn-custom px-2" href="mailto:hola@legoray.com"><i className="bi bi-envelope"></i></a>
                            <a className="btn-custom px-2" href="https://www.linkedin.com/in/raymond-negron-27360024a/" rel="noreferrer" target="_blank"><i className="bi bi-linkedin"></i></a>
                            <a className="btn-custom px-2" href="http://github.com/legoraystudios" rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </nav>
            </header>
    </div>
    )
}

export default Navbar