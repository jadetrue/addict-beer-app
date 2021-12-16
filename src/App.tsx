import React from "react";
import Card from "./components/Card/Card";
import "./styles/typography.css";

function App() {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold underline">
                Hello world!
            </h1>
            <Card
                title="Beer Name"
                description="An example description of this beer"
            ></Card>
        </div>
    );
}

export default App;
