import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Background from './Background/Background'

const scrollTo = (el) => {
    const elementPosition = el.offsetTop;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    });
}

class Header extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var school = this.props.data.school;
            var schoolclass = this.props.data.schoolclass;
            var major1 = this.props.data.major1;
            var major2 = this.props.data.major2;
            var location = this.props.data.location;
            var networks = this.props.data.social.map(function(network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (

            <header id="home">
            <Background/>

            <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
            <li className="current"><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#home">Home</NavLink></li>
            <li><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#about">My Story</NavLink></li>
            <li><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#resume">Resume</NavLink></li>
            <li><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#portfolio">Projects</NavLink></li>
            <li><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#testimonials">Testimonials</NavLink></li>
            <li><NavLink activeClassName="active" scroll={el => scrollTo(el)} to="#contact">Contact</NavLink></li>
            </ul>

            </nav>

            <div className="row banner">
            <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}<span id="cursor">_</span></h1>
            <h3>I am a <span>{schoolclass}</span> studying <span>{major1}</span> and <span>{major2}</span></h3>
            <h3>at the <span>{school}</span> at <span>{location}</span>.</h3>
            <h3><span id="tagline">{description}</span>.</h3>
            <hr />
            <ul className="social">
            {networks}
            </ul>
            </div>
            </div>

            <p className="scrolldown">
            <NavLink scroll={el => scrollTo(el)} to="#about"><i className="icon-down-circle"></i></NavLink >
            </p>

            </header>
        );
    }
}

export default Header;
