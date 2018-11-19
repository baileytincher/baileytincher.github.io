import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const scrollTo = (el) => {
    const elementPosition = el.offsetTop;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    });
}

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>2018 Bailey Tincher</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><NavLink scroll={el => scrollTo(el)} to="#home"><i className="icon-up-open"></i></NavLink></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
