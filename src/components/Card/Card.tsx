import React from "react";

export interface Props {
    title: string;
    description: string;
    tagline?: string;
}

const Card: React.FC<Props> = ({title, description, tagline}) => {
    return (
        <div className="w-full border border-pink-900 shadow-md bg-white rounded-lg h-full p-5">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <h3 className="italic font-bold mb-3 text-pink-900">{tagline}</h3>
            <p className="text-lg">
                {description.length > 250
                    ? description.slice(0, 250) + "..."
                    : description}
            </p>
        </div>
    );
};

export default Card;
