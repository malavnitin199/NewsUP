import React, { Component } from 'react'
import {Link} from "react-router-dom";
 
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{color : 'white'}}>NewsUP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color : 'white'}}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color : 'white'}}>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" style={{color : 'white'}}>Home</Link>
                                </li>
                                
                                    <li className="nav-item"> <Link className="nav-link" to="/business" style={{color : 'blue'}}>Business</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/entertainment" style={{color : 'blue'}}>Entertainment</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/general" style={{color : 'blue'}}>General</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/health" style={{color : 'blue'}}>Health</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/science" style={{color : 'blue'}}>Science</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/sports" style={{color : 'blue'}}>Sports</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="/technology" style={{color : 'blue'}}>Technology</Link></li>

                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
