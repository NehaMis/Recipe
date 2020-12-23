import React from "react";
import RandomMeal from "./components/RandomMeal";

function App() {
    return (
        <div className="App">
            <div className="text-center" style={{ width: "100%" }}>
                <h2>Recipe</h2>
                <RandomMeal />
            </div>
        </div>
    );
}

export default App;
