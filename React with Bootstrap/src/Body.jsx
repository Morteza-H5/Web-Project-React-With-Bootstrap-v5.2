
import { Component } from "react";

class Body extends Component {
    state = {  }
    render() { 
        return (
        <body>
            <div className="container text-center">
                <div className="row" id="about">
                  <h3>ABOUT THE COMPANY</h3>
                  <h6>Key features of our company</h6>
                </div>
                <br/><br/><br/>
                <div className="row" >
                    <div className="col-md-3 ">
                                    <svg width="120" height="120" fill="currentColor" className="bi bi-tv color6" viewBox="0 0 16 16">
                                     <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                                    </svg>
                                    <p>Responsive</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="col-md-3">
                                 <svg width="120" height="120" fill="currentColor" className="bi bi-gem color7" viewBox="0 0 16 16">
                                      <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                                  </svg>
                                  <p>Design</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="col-md-3">
                                <svg width="120" height="120" fill="currentColor" className="bi bi-gear color4" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                                 <p>Support</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="col-md-3">
                                <svg  width="120" height="120" fill="currentColor" className="bi bi-heart-half color5" viewBox="0 0 16 16">
                                   <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                                <p>Passion</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>                        
                    </div>
                </div>
            </div>              
            <br/><br/><br/><br/><br/>  
            {/* ////////////////////////////////Promo Section - "We know design" ///////////////////////////////////// */}
            <div className=" container-fluid bu2 text-center">
                <div className=" row">
                    <div className="col-md-6">
                        <br/><br/><br/>
                          <h3 style={{fontFamily:'apple-system'}} >We know design</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore. </p>
                          <a href="#work" className="bu3">
                                <i><svg  width="25" height="25" fill="currentColor" class="bi bi-grid-3x2-gap-fill" viewBox="0 0 16 16">
                                     <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"/>
                                    </svg>
                                </i>
                                &nbsp; View Our Works
                            </a>
                    </div>
                    <div className="col-md-6">
                             <img src="01001.jpg" className=" img-fluid rounded-pill shadow" alt="phone"/>
                    </div>
                </div>
            </div>
                {/* ////////////////////////////////////Team Section/////////////////////////////////////       */}
            <div className="container" style={{marginTop:'8%'}}>
                <h3 className="text-center" style={{fontFamily:'apple-system'}}>THE TEAM</h3>
                <p className="text-center">The ones who runs this company</p>

                <div className="row" style={{marginTop:'7%'}}>
                     <div className="col-md-3 shadow text-center" style={{padding:'0px'}}>
                         <img src="team1.jpg" className="img-fluid" alt="team1"/><br/><br/>
                         <h3>Anja Doe</h3><br/>
                         <p>Art Director</p><br/>
                         <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                         <button style={{padding:'8px 28%'}} >
                             <i>
                             <svg width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                             </svg>
                             </i>
                             &nbsp;
                             Contect
                         </button><br/><br/>
                     </div>
                     <div className="col-md-3 shadow  text-center" style={{padding:'0px'}}>
                     <img src="team2.jpg" className="img-fluid" alt="team1"/><br/><br/>
                         <h3>John Doe</h3><br/>
                         <p>CEO & Founder</p><br/>
                         <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                         <button style={{padding:'8px 28%'}} >
                             <i>
                             <svg width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                             </svg>
                             </i>
                             &nbsp;
                             Contect
                         </button><br/><br/>
                     </div>
                     <div className="col-md-3 shadow text-center" style={{padding:'0px'}}>
                     <img src="team3.jpg" className="img-fluid" alt="team1"/><br/><br/>
                         <h3>Mike Ross</h3><br/>
                         <p>Web Designer</p><br/>
                         <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                         <button style={{padding:'8px 28%'}} >
                             <i>
                             <svg width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                             </svg>
                             </i>
                             &nbsp;
                             Contect
                         </button><br/><br/>
                     </div>
                     <div className="col-md-3 shadow text-center" style={{padding:'0px'}}>
                     <img src="team4.jpg" className="img-fluid" alt="team1"/><br/><br/>
                         <h3>Dan Star</h3><br/>
                         <p>Designer</p><br/>
                         <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                         <button style={{padding:'8px 28%'}} >
                             <i>
                             <svg width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                             </svg>
                             </i>
                             &nbsp;
                             Contect
                         </button><br/><br/>        
                     </div>
                </div>
            </div>
            {/* //////////////////////////// Promo Section "Statistics"//////////////////////////// */}
            <div className="bu4">
                <div className="row text-center">
                   <span className="col-md-3"><h2>14+ </h2>Partners</span>
                   <span className="col-md-3"><h2>55+</h2>Projects Done</span>
                   <span className="col-md-3"><h2>89+</h2>Happy Clients</span>
                   <span className="col-md-3"><h2>150+</h2>Meetings</span>
                </div>
            </div>
           {/* /////////////////////////////////Work Section//////////////////////////////////////////// */}
           <div className="container text-center" id="work" style={{marginTop:'10%'}}>
               <h3 style={{fontFamily:'apple-system'}}>OUR WORK</h3>
               <p>What we've done for people</p>
               <br/><br/>
               <div className="row">
                   <img src="tech_camera.jpg" alt="camera" className="img-fluid col-md-3" />
                   <img src="tech_drone.jpg" alt="camera" className="img-fluid col-md-3" />
                   <img src="tech_mic.jpg" alt="camera" className="img-fluid col-md-3" />
                   <img src="tech_phone.jpg" alt="camera" className="img-fluid col-md-3" />
               </div>
               <br/>
               <div className="row">
               <img src="tech_sound.jpg" alt="camera" className="img-fluid col-md-3" />
               <img src="tech_tablet.jpg" alt="camera" className="img-fluid col-md-3" />
               <img src="tech_tableturner.jpg" alt="camera" className="img-fluid col-md-3" />
               <img src="tech_typewriter.jpg" alt="camera" className="img-fluid col-md-3" />
               </div>
           </div>
           {/* ////////////////////////////////Skills Section///////////////////////////////// */}
           <div className="container-fluid bu5 ">
               <div className=" row">
                   <div className="col-md-4" style={{marginLeft:'5%'}}>
                     <h3 style={{fontFamily:'apple-system'}} >Our Skills</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore.</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore.</p>
                   </div>
                   <div className="col-md-4 bu6" style={{marginLeft:'10%'}}>
                     <p>
                        <i>
                                <svg width="25" height="25" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8.5a2.5 2.5 0 1  1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                               </svg> 
                        </i>
                    &nbsp; Photography
                      </p>
                       <div class="progress">
                          <div className="progress-bar bg-success progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>90%</div>
                       </div>
                       <br/>
                     <p>
                       <i>
                            <svg  width="25" height="25" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                            </svg>
                       </i>
                       &nbsp; Web Design
                     </p>
                      <div class="progress">
                          <div className="progress-bar bg-success progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>85%</div>
                       </div>
                       <br/>
                       <p>
                       <i>
                           <svg width="25" height="25" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                               <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                               <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                           </svg>
                       </i>
                       &nbsp;Photoshop
                     </p>
                      <div class="progress">
                          <div className="progress-bar bg-success progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>75%</div>
                       </div>
                       
                   </div>
               </div>
             </div>
             {/* ////////////////////////////////////Contact Section////////////////////////////////////////// */}
             <div className="container-fluid bu7">
                 <div className="text-center">
                 <h3 style={{fontFamily:'apple-system',marginTop:'-5%'}}>CONTECT</h3>
                 <p >Lets get in touch. Send us a message:</p>
                 </div>
                 <br/>
                 <p style={{marginLeft:'2%'}}>
                     <i>
                            <svg  width="34" height="34" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                     </i>
                     &nbsp;&nbsp;khorasan, Iran
                 </p>
                 <p style={{marginLeft:'2%'}}>
                     <i>
                            <svg width="34" height="34" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                     </i>
                     &nbsp; &nbsp;Phone: +00 151515
                 </p>
                 <p style={{marginLeft:'2%'}}>
                     <i>
                        <svg  width="34" height="34" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                         <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                     </i>
                     &nbsp; &nbsp;Email: mail@mail.com
                 </p>
                 <br/>
                 <form action="" target="_blank"  style={{marginLeft:'2%'}} >
                 <p className="form-floating">
                     <input type="text" placeholder="Name" requiredname="Name" id="name" className=" form-control form-control-lg " />
                     <label for="name">Name</label>
                 </p>
                 <p className="form-floating">
                     <input type="email" placeholder="Email" requiredname="email" id="email" className=" form-control form-control-lg" />
                     <label for="email">Email</label>
                 </p>
                 <p className="form-floating">
                     <input type="text" placeholder="subject" requiredname="subject" id="subject" className=" form-control form-control-lg" />
                     <label for="subject">Subject</label>
                 </p>
                 <p className="form-floating">
                     <input type="text" placeholder="mas" requiredname="mas" id="mass" className=" form-control form-control-lg" />
                     <label for="mass">Message</label>
                 </p>
                 <button type="submit" className="bu8">
                             <i>
                               <svg width="25" height="25" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                 </svg>
                             </i>
                             &nbsp;SEND MESSAGE
                 </button>
                 </form>
                 <br/><br/>
                 <img src="map.jpg" className="img-fluid" alt="map" style={{marginLeft:'2%'}} />
             </div>
        </body>
         );
    }
}
 
export default Body;