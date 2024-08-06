
import React, { Component } from 'react';

class Subject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            subject: '',
            message: ''
        };


    }

    componentDidMount() {
        this.showStep();
    }

    showStep = (stepNumber) => {
        if (stepNumber) {
            const steps = document.querySelectorAll('.step');

            console.log(steps);

            steps.forEach(step => {
                step.style.display = 'none';
            });

            const currentStepElement = document.querySelector(`.step[data-step="${stepNumber}"]`);

            console.log(currentStepElement);

            if (currentStepElement) {
                currentStepElement.style.display = 'block';
            } else {
                console.error(`Element with data-step="${stepNumber}" not found.`);
            }
        } else {
            stepNumber = 1;
            const currentStepElement = document.querySelector(`.step[data-step="${stepNumber}"]`);

            console.log(currentStepElement);

            if (currentStepElement) {
                currentStepElement.style.display = 'block';
            } else {
                console.error(`Element with data-step="${stepNumber}" not found.`);
            }
        }


    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSendMessage = () => {
        const { subject, message } = this.state;
        const email = 'mailto:sanjayarhwork@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
        window.location.href = email;
    };

    nextStep = (stepNumber) => {
        if (this.state.currentStep < 6) {
            this.setState((prevState) => ({ currentStep: prevState.currentStep + 1 }), () => {
                this.showStep(this.state.currentStep);
            });
        }
    }

    prevStep = (stepNumber) => {
        if (this.state.currentStep > 0) {
            this.setState((prevState) => ({ currentStep: prevState.currentStep - 1 }), () => {
                this.showStep(this.state.currentStep);
            });
        }
    }



    render() {
        return (
            <div className="container">

                {/* <!--About me--> */}
                <div className="subject-container step" data-step="1" style={{ display: "block" }}>
                    <div className="current-subject">
                        <div
                        >
                            <div className="subject-title">About me</div>
                            <p style={{ marginTop: "2vh" }}>
                                I am a web developer and programmer from Bangalore, India, who is passionate about programming and building web apps. I hold a Bachelor's in Mechanical Engineering. I have 1.7 years of experience in designing and developing efficient web apps, and I am currently working at Dheeyantra, Bangalore. I code mostly using JavaScript and Java, and I use frameworks such as React and Spring-Boot. I am familiar with SQL and NoSQL databases such as MySql and Cassandra. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers.
                            </p>
                            <div>
                                <h4>Skills</h4>
                                <ul>
                                    <li>JavaScript: ECMAScript6, Promises, Async/Await, DOM manipulation.</li>
                                    <li>React.js: JSX, Components, Hooks, Fetching data from APIs, JSON Server, Error Handling.</li>
                                    <li>HTML/CSS and SQL functions, Joins, Normalization, Subqueries.</li>
                                    <li>jQuery: DOM Manipulation, event handling, AJAX for asynchronous communication with the server.</li>
                                    <li>Java: OOP Concepts, Exception Handling, Collections, Threads, SpringBoot, Hibernate.</li>
                                </ul>
                            </div>


                            <div className="subject-btn desktop-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.nextStep(1)}>Next</button>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="subject-btn mobile-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.nextStep(1)}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="other-subject">
                        <div>02 Work</div>
                        <div>03 Get in touch</div>
                    </div>
                </div>

                {/* <!--WORK--> */}
                <div className="subject-container step" data-step="2" >
                    <div className="other-subject other-previous-subject">
                        <div>01 About me</div>
                    </div>
                    <div className="current-subject">
                        <div className="left-column">
                            <div className="subject-title">Work <span>(Personal)</span></div>
                            <div className="subject-btn desktop-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.prevStep(1)} className="prev-btn">Prev</button> <button
                                    type="button" onClick={() => this.nextStep(2)}>Next</button>
                            </div>
                        </div>
                        <div className="right-column">
                            <div>
                                <h2>1.Restaurant Management System</h2>
                                <div className="project-description">
                                    <p>
                                        Developed a menu board display and configuration system using ReactJS.
                                    </p>
                                    <h3>Key Features:</h3>
                                    <ul>
                                        <li>Implemented CRUD operations (Create, Read, Update, Delete) for managing menu items.</li>
                                        <li>Enabled dynamic updates to menu items, prices, and images without code modifications.</li>
                                        <li>Ensured user-friendly interface for direct modification of menu components through database operations.</li>
                                    </ul>
                                    <h3>Technologies Used:</h3>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>JSX</li>
                                        <li>JSON</li>
                                        <li>ReactJS</li>
                                    </ul>
                                </div>
                                <div className="project-container">
                                    <h2>2.Sticky Notes</h2>
                                    <div className="project-description">
                                        <ul>
                                            <li>No database is incorporated in this project,</li>
                                            <li>It is designed to handle CRUD operations.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <h2>3.Portfolio and CRUDs</h2>
                                    <div className="project-description">
                                        <ul>
                                            <li>This portfolio site is developed using React and features media queries to ensure a responsive design for both desktop and mobile devices.</li>
                                            <li>Also built React CRUDs, and other spring boot projects.</li>
                                            <li>Visit my <a href="https://github.com/sanjaya2357" target="_blank" rel="noopener noreferrer">GitHub account</a> for more information.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="subject-btn mobile-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.prevStep(1)} className="prev-btn">Prev</button>
                                <button
                                    type="button" onClick={() => this.nextStep(2)}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="other-subject">
                        <div>03 Get in touch</div>
                    </div>
                </div>

                <div className="subject-container step" data-step="3">
                    <div className="other-subject other-previous-subject">
                        <div>01 About me</div>
                        <div>02 Work</div>
                    </div>
                    <div className="current-subject">
                        <div className="left-subject">
                            <div className="subject-title">Get in touch</div>
                            <div className="subject-btn desktop-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.prevStep(2)}>Prev</button>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="full-width-fields" >
                                <div>
                                    <label htmlFor="fname">Subject</label>
                                    <input type="text"
                                        id="fname"
                                        name="fname"
                                        value={this.state.subject}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div >
                                    <label>Write a message</label>
                                    <textarea rows="5" cols="30" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className="subject-btn">
                                <button style={{ marginTop: "2vh" }} type="button" onClick={this.handleSendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="subject-btn mobile-btn">
                        <button style={{ marginTop: "2vh" }} type="button" onClick={() => this.prevStep(2)}>Prev</button>
                    </div>

                </div>

            </div >
        );
    }
}

export default Subject;
