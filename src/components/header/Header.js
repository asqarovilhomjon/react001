import "./Header.css"
import logo from "../assets/Escape..svg"

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="container">
                    <div className="nav__img">
                        <img src={logo} alt="logo" />
                        <div className="nav__categories">
                            <a href="#"><span>Home</span></a>
                            <a href="#"><span>Categories</span></a>
                            <a href="#"><span>About</span></a>
                            <a href="#"><span>Contact</span></a>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero__title">
                            <span>Let's do it together.</span>
                        </div>
                        <div className="hero__text">
                            <p>We travel the world in search of stories. Come along for the ride.</p>
                        </div>
                        <div className="hero__btn">
                            <button>View Latest Posts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header