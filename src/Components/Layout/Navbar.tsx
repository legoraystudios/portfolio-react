import Logo from "../../Images/logo2.png"

const Navbar = () => {
    return (
    <div>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
            <header>
                <nav className="navbar bg-transparent">
                    <div className="container-fluid mx-5 fs-4">
                        <a className="navbar-brand btn-custom fs-4" href="/"><img src={Logo} alt="" height="50" /></a>
                            <div className="d-flex">
                                <a className="btn-custom px-2" href="mailto:hola@legoray.com"><i className="bi bi-envelope"></i></a>
                                <a className="btn-custom px-2" href="http://github.com/legoraystudios" rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                                <button type="button" className="ms-2 btn btn-bd-primary">Download CV/Resume</button>
                            </div>
                    </div>
                </nav>
            </header>
    </div>
    )
}

export default Navbar