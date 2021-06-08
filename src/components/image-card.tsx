import React, {FC, ReactElement} from "react";
import { Image } from "../elements/image";

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
    imgSrc,
    imgDescription,
    reverse,
    text

}) => (
    <div className={getClassNames(reverse)}>
            <Image width="w-1/2" src={imgSrc} alt={imgDescription} />
        <div className="flex flex-col gap-4 items-start">
            {text}
        </div>
    </div>
);
