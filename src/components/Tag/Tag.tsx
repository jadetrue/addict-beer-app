import React from "react";

const Tag: React.FC = ({children}) => {
    return (
        <div className="bg-pink-100 w-max px-2.5 py-1.5 rounded-lg mt-2 font-bold tracking-wider">
            {children}
        </div>
    );
};

export default Tag;
