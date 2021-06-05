import React, {FC, ReactElement} from "react";

type Props = {
    icon: ReactElement,
    text: string,
    link: ReactElement
};

export const IconCardSmall: FC<Props> = ({
       children,
       icon,
       text,
       link
}) => (
    <div className="inline-grid  rounded border-2 border-gray-500 p-4">
        <div className="flex flex-col items-center gap-4">
            <div className="flex-auto">
                {icon}
            </div>
            <div className="flex-auto">
                <h4>
                    {text}
                </h4>
            </div>
            <div className="flex-auto">
                {link}
            </div>
        </div>
    </div>
);