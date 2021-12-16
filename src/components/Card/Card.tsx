import React from "react";

export interface Props {
    title: string;
    description: string;
}

const Card: React.FC<Props> = ({children, title, description}) => {
    return (
        <div className="w-full border border-pink-900 shadow-md bg-white rounded-lg h-full p-2.5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            {children}
        </div>
    );
};

export default Card;
