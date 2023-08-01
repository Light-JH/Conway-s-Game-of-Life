import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={`text-white font-bold py-2 px-4 rounded w-24 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {children}
        </button>
    );
}