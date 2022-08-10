import React from "react";
import "./styles/About.css";


const About = () => {
    return (
            <>
                    <h1>About QA Cinema</h1>
                    
                    <h2>
                    ABOUT US:
                    </h2>
                    <p>
                        QA Cinemas are a company dedicated to giving the customer
                        the best cinema experience possible. 
                    </p>
                    <h2>MEET THE TEAM:</h2>
                    <table>
                        
                        
                        <tr>
                            <th>
                                Cameron Black <br/>
                                Project Lead <br/>
                                <br/>                                
                            </th>
                            <th>
                                Lewis Pearson <br/>
                                Scrum Master <br/>
                                <br/> 
                            </th>
                            
                        </tr>
                        <tr>
                            <th>
                                Ridwan Kawsar <br/>
                                Software Developer <br/>
                                <br/>                                
                            </th>
                            <th>
                                Saif Hussain <br/>
                                Software Developer <br/>
                                <br/> 
                            </th>
                        </tr>
                        
                    </table>
                    <h2>SCRUM PROCESS</h2>
                    <p>
                        This project was developed through using Scrum.
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
                    </p>
                    <p> 
                        If you would like to read more about scrum, <a href="https://www.scrum.org/">visit the scrum website.</a>
                    </p>
                    
                    <p style={{marginTop: '100px'}}>
                        If you would like to get in touch with us, visit our <a href="/Contact">contact us</a> section 
                    </p>
            </>
    );
};

export default About;
