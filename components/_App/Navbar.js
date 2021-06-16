import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                    <img src="/img/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                   {/* <li className="nav-item">
                                        <Link href="/index" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Home  <i className='bx bx-chevron-down'></i> 
                                            </a>
                                        </Link>                                       
                                    </li>*/}

                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home</a>
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link href="/how-it-works" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-link">How It Works</a>
                                        </Link>
                                        </li>

                                        <li className="nav-item">
                                        <Link href="/about-us" activeClassName="active">
                                            <a onClick={() => setCollapsed(true)} className="nav-link">About Us</a>
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link href="/why-us" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-link">Why Us</a>
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link href="/register-your-interests" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-link">Register Your Interest</a>
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-link">Contact Us</a>
                                        </Link>
                                        </li>                               
                                </ul> 
                            
                                <div className="others-option d-flex align-items-center">
                            

                                    <div className="option-item">
                                        <Link href="/contact">
                                            <a onClick={() => setCollapsed(true)} className="default-btn">
                                                <i className="flaticon-right"></i> Get Started <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
