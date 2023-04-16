//Please ReadmeFile befor Evaluation


import React from "react";
import { useLocation } from "react-router-dom";

function Home() {

    const location = useLocation()
    return ( 
        <div className="home">
            <h1> Hello  {location.state.id} welcome to Home Page</h1>
            <p className="paragraph text-center">Back to Main Page <a href="/">Back</a></p>

        </div>
        
     );
}

export default Home;