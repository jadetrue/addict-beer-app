import React from "react";

export interface Props {
    title: string; // title: [{name: string}];
    description: string;
    tagline?: string;
    imageUrl?: string;
    alt?: string;
}

const Card: React.FC<Props> = ({
    title,
    description,
    tagline,
    imageUrl,
    alt,
    children,
}) => {
    return (
        <div className="w-full border border-blue shadow-lg bg-white rounded-lg h-full p-5">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={alt}
                    className="object-scale-down h-48 w-96"
                />
            )}
            <h1 className="text-3xl font-bold my-3 tracking-wider">{title}</h1>
            <h3 className="italic font-bold mt-3 mb-1.5 text-pink-900 tracking-wider">
                {tagline}
            </h3>
            <p className="text-lg tracking-wide">
                {description.length > 250
                    ? description.slice(0, 250) + "..."
                    : description}
            </p>
            {children}
        </div>
    );
};

export default Card;
