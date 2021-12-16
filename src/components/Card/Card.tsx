import React from "react";

const Card: React.FC = ({children}) => {
    return (
        <div className="w-full border border-red-200 rounded-lg h-full p-2.5">
            {children}
        </div>
    );
};

export default Card;
