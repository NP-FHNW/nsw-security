import React, {FC, ReactElement} from "react";

type Props = {
    icon: ReactElement,
    button: ReactElement
};

export const IconCardBig: FC<Props> = ({
    children,
    icon,
    button
}) => (
    <div className="flex gap-8 items-center">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <div className="flex-auto">
            <div className="flex flex-col gap-4">
                {children}
                <div>
                    {button}
                </div>
            </div>
        </div>
    </div>
);