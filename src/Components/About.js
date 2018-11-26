import React, { Component } from 'react';

class About extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Bailey Tincher Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>My Story</h2>
            <p>
            &emsp;My journey into computer science started when I fairly young. At the time, like many others that were my age, I played the popular computer game Minecraft and even hosted my own server. However, I quickly felt limited by the default offerings and wanted to create my own mods, which is what introduced me to object oriented programming in Java. From there my interest sky rocketed and I quickly became engrossed in the capability to create something of my own with no resources necessary other than my own time and effort.<br /><br />
            &emsp;Ironically though, it was in a physics course my senior year in high school that I knew my heart was set on computer science. My teacher proposed a challenge problem to the class; it was a multivariate carnot engine optimization problem with the goal to tune the parameters to achieve the most efficient engine. Though he meant for us to solve the problem by hand via trial and error, I quickly realized this was the exact challenge computers were meant for and I came up with an algorithm that could attack the problem. The approach was simple but effective, and with that short little script I won the challenge by a land slide--even besting my teachers attempt.<br /><br />
            &emsp;By the time I came to this realization though, it was almost too little too late as I was already coming into Illinois as a physics major. They told me it would be nearly impossible to transfer, and that I would have to stay at the top of my class, maintaining a near perfect record for over three semesters. This would be no easy feat, however I kept my head up and made every effort to put myself in the best position possible. I was determined to be successful, and I am proud to say that the perseverance was worth the late nights and countless personal sacrifices I had to make to get to where I am today. Currently, I am pending transfer to the Department of Computer Science in the College of Engineering at the University of Illinois at Urbana-Champaign, and, if accepted, I will be declaring a dual degree with Engineering Physics.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
					   	<span>{name}</span><br />
					   	<span>{street}<br />
					         {city} {state}, {zip}
                   		</span><br />
					   	<span>{phone}</span><br />
                     	<span>{email}</span>
				   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
        );
    }
}

export default About;
