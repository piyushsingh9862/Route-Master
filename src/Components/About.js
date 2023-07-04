import React from 'react'
export default function About() 
{
    return (
        <>
            <div className='about'>
                <div className="col">

                    <div className="row abt-row">
                        <div className="container jumbotron">
                            <h1 className="display-3 text-center">Route Master</h1>
                            <p className="lead fs-4" id='discription'>
                                It is a route visualizer for delivery of item on multiple locations. 
                                It shows two routes one random represented by Orange line and other using BFS algorithm (goes to next closest location by route) represented by Green line. 
                                It compares both the distances and displays the distance saved by following BFS route and the cost of fuel saved. 
                                Map rendering is done via tom-tom API and shortest route using Breath-first-Search Algorithm.
                                The use case is that it will give shortest route which which use less time and fuel hence decreasing transport cost of the delivery company where multiple items are needed to be delivered in one go.
                                It`s a single page web application made using React.js for frontend and Node.js for backed.
                            </p>
                            <p>
                                <a className="btn btn-secondary btn-lg ms-5 button" href="/" target="_blank" role="button">Try Now &raquo;</a>
                                <a className="btn btn-secondary btn-lg ms-5 button" href="https://github.com/piyushsingh9862/Route-Master" target="_blank" role="button" rel="noreferrer">Github Repository  &raquo;</a>
                            </p>
                        </div>
                    </div>

                    <hr className='row abt-row'></hr>

                    <div className="row jumbotron abt-row" id="using">
                        <h1 className='text-center' id="made-using-title">Made Using</h1>
                        <div className="row mu">
                            <div className="col-md-3">
                                <h2>React.js</h2>
                                <p className="lead fs-5">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. The project is made using create-react-app maintained by Meta</p>
                                <p><a className="btn btn-secondary" href="https://github.com/facebook/create-react-app" target="_blank" role="button" rel="noreferrer">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-3">
                                <h2>Node.js</h2>
                                <p className="lead fs-5">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
                                <p><a className="btn btn-secondary button" href="https://nodejs.org/en/about/" target="_blank" role="button" rel="noreferrer">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-3">
                                <h2>Javascript</h2>
                                <p className="lead fs-5">JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known for the development of web pages. JavaScript can be used for Client-side developments as well as Server-side developments.</p>
                                <p><a className="btn btn-secondary button" href="https://www.geeksforgeeks.org/introduction-to-javascript/#:~:text=JavaScript%20is%20a%20lightweight%2C%20cross,well%20as%20Server%2Dside%20developments."  role="button">View details &raquo;</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
