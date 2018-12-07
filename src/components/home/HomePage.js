import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1>Pluralsight Course Administration</h1>
                    <p>React, Redux application utilizing redux hot reaload features and written in ES6</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                </div>
            </div> 
        );
    }
}

export default HomePage;