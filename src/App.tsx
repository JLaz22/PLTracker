import React from "react";
import MatchList from "./components/MatchList";

const App: React.FC = () => {
    return (
        <div className= "container mx-auto p-8">
            <h1 className="text-3x1 font-bold text-center">Sports Stats</h1>
            <MatchList/>
        </div>

    );
};

export default App;