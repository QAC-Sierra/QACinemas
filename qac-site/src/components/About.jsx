import React from "react";
import "./styles/About.css";


const About = () => {
    return (
            <div>
                    <h1>About QA Cinema</h1>
                    
                    <h2>
                    ABOUT US:
                    </h2>
                    <p>
                        We are a software development team that were tasked with creating, and designing, a website for QA Cinemas 
                        and this is the result of that. We hope that you find it easy to navigate, and easy to access what you need.
                        Feel free to contact us via our emails or twitter handles, and learn about the process we used to manage our project below.
                        
                    </p>
                    <h2>MEET THE TEAM:</h2>
                    <table id="team">
                        
                        
                        <tr>
                            <td id="col">
                                Cameron Black <br/>
                                Project Lead <br/>
                                cameron.black@qa.com <br/>
                                @CameronBlackQA on Twitter<br/>
                                <br/>                                
                            </td>
                            <td id="col">
                                Lewis Pearson <br/>
                                Scrum Master <br/>
                                lewis.pearson@qa.com <br/>
                                @LewisPearsonQA on Twitter<br/>
                                <br/> 
                            </td>
                            
                        </tr>
                        <tr>
                            <td id="col">
                                Ridwan Kawsar <br/>
                                Software Developer <br/>
                                ridwan.kawsar@qa.com <br/>
                                @RidwanKawsarQA on Twitter<br/>
                                <br/>                                
                            </td>
                            <td id="col">
                                Saif Hussain <br/>
                                Software Developer <br/>
                                saif.hussain@qa.com <br/>
                                @SaifHussainQA on Twitter <br/>
                                <br/> 
                            </td>
                        </tr>
                        
                    </table>
                    <h2>SCRUM PROCESS</h2>
                    <table>
                        <tr>
                            <td>
                                <p>
                                    This project was developed through using a Scrum process.
                                    <br/><br/>
                                    Scrum is a framework that aims to help a team work iteratively and incrementally on a complex project. It does this by splitting development time into sprints, during a sprint
                                    developers will complete tasks off of a Sprint Backlog which will be determined at the start of the sprint. 
                                    <br/><br/>
                                    An important part of Scrum is the Daily Scrum meeting, or the daily standup. This is a short meeting at the start
                                    of each day that allows developers in a team to discuss what work they completed yesterday, what they will work on today, and
                                    anything that is blocking them for completing their work. This keeps everyone in the loop, and allows problems to be solved quickly.
                                    <br/><br/>
                                    Our team used Scrum in this way, and we found it to be very useful at first planning at tasks, delegating them, and then keeping track of progress and any issues
                                    that occurred. It allowed us to deconstruct the complex task of building the site and all the different components into more easily completed tasks.
                                    <br/><br/> 
                                    If you would like to read more about scrum, <a href="https://www.scrum.org/">visit the scrum website.</a>
                                </p>
                            </td>
                            <td>
                                <img src="https://thinkthyme.com/wp-content/uploads/2017/11/Scrum-Management-Explained.png" alt="Scrum.org logo" />
                            </td>
                        </tr>
                    </table>
                    <p>
                        If you would like to get in touch with us, please visit our <a href="/contact">contact us</a> section 
                    </p>
            </div>
    );
};

export default About;