import React, {FC, ReactElement} from "react";

type Props = {
    imgSrc: string,
    imgDescription?: string,
    reverse: boolean
};

function getClassNames(reverse) {
    if(reverse) {
        return "flex flex-row-reverse items-center gap-8";
    }

    return "flex flex-row items-center gap-8";
}

export const ImageCard: FC<Props> = ({
    children,
    imgSrc,
    imgDescription,
    reverse
}) => (
    <div className={getClassNames(reverse)}>
        <div className="flex-grow flex-shrink-0">
            <img src={imgSrc} alt={imgDescription} />
        </div>
        <div className="flex flex-col gap-4 items-start">
            {children}
        </div>
    </div>
);