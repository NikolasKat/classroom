import { FC, useState } from "react";
import {
    MdOutlineAccessibilityNew,
    MdOutlineAccessibleForward,
} from "react-icons/md";

import { Link } from "react-router-dom";
import InfoALert from "./InfoALert";

interface ICardData {
    subjectName: string;
    teacherName: string;
    bgImg: string;
    color: string;
}

const SubjectCard: FC<ICardData> = ({
    subjectName,
    teacherName,
    bgImg,
    color,
}) => {
    const [isLHover, setIsLHover] = useState<boolean>(false);
    const [isSHover, setIsSHover] = useState<boolean>(false);

    return (
        <>
            <div className="flex relative">
                <div className="flex flex-col justify-between min-w-[450px] min-h-[350px] border border-solid-black font-medium relative rounded-xl">
                    <div
                        style={{ backgroundColor: bgImg }}
                        className="flex justify-between p-6 rounded-t-xl"
                    >
                        <div>
                            <Link
                                to="#"
                                className="text-4xl hover:text-gray-500"
                            >
                                {subjectName}
                            </Link>
                            <h4 className="text-xl mt-3">{teacherName}</h4>
                        </div>
                        <div>
                            <button
                                className="text-4xl bg-transparent"
                                onMouseEnter={() => {
                                    setIsLHover((isLHover) => true);
                                }}
                                onMouseLeave={() => {
                                    setIsLHover((isLHover) => false);
                                }}
                            >
                                <MdOutlineAccessibleForward className="hover:text-gray-500" />
                            </button>
                            {isLHover ? (
                                <div className="absolute top-6 right-20">
                                    <InfoALert text="Покинуть курс" />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="p-6 flex justify-end border-t border-solid-black relative">
                        <Link
                            to="#"
                            className="text-4xl bg-transparent hover:text-gray-600"
                            onMouseEnter={() => {
                                setIsSHover((isSHover) => true);
                            }}
                            onMouseLeave={() => {
                                setIsSHover((isSHover) => false);
                            }}
                        >
                            <MdOutlineAccessibilityNew className="hover:text-gray-500" />
                        </Link>
                        {isSHover ? (
                            <div className="absolute top-6 right-20">
                                <InfoALert text="Твоя статистика" />
                            </div>
                        ) : null}
                    </div>
                    <div
                        style={{ backgroundColor: color }}
                        className="absolute right-3 top-24 w-[100px] h-[100px] flex justify-center pt-2 rounded-full text-7xl font-normal text-white"
                    >
                        {teacherName.slice(0, 1)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
