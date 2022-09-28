import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined= "outlined",
    primary= "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant?: CardVariant;
    onClick: (num: number) => void
}

const Card: FC<CardProps> =
    ({
         variant,
         width,
         height,
         children,
         onClick
    }) => {
    const [value, setValue] = useState(0)
    return (
        <div onClick={() => onClick(value)} style={{width,
            height,
            border: variant === CardVariant.outlined ?  "2px solid gray" : 'none',
            background: variant === CardVariant.primary? 'green': ""
            }}>
            {children}
        </div>
    );
};

export default Card;