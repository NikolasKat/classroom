import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import InfoALert from "./InfoALert";
import { FC, useState } from "react";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
    connectStudent,
    disconnectStudent,
} from "../store/slices/subjectsSlice";
// import { AppDispatch } from "../store/store";

interface SubjectCardProps {
    subjectName: string;
    teacherName: string;
    color: string;
    id: string;
    isUserConnected: boolean;
}

const SubjectCard: FC<SubjectCardProps> = ({
    subjectName,
    teacherName,
    color,
    id,
    isUserConnected,
}) => {
    const [isSHover, setIsSHover] = useState<boolean>(false);
    const [isLHover, setIsLHover] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex relative bg-slate-100 rounded-3xl border border-solid-black">
                <div className="flex flex-col justify-between font-medium relative w-[260px] h-[240px] md:w-[450px] md:h-[350px]">
                    <div
                        style={{ backgroundColor: "#dfe442" }}
                        className="flex justify-between p-6 rounded-t-xl"
                    >
                        <div>
                            <Link
                                to={`/${subjectName}`}
                                className="transition duration-200 ease-in-out text-xl md:text-4xl hover:text-gray-500"
                            >
                                {subjectName}
                            </Link>
                            <h4 className="text-base md:text-xl mt-1 md:mt-3">
                                {teacherName}
                            </h4>
                        </div>
                        <div>
                            <button
                                className="text-4xl bg-transparent"
                                onMouseEnter={() => {
                                    setIsLHover((_isLHover) => true);
                                }}
                                onMouseLeave={() => {
                                    setIsLHover((_isLHover) => false);
                                }}
                                onClick={() => {
                                    if (isUserConnected) {
                                        dispatch(disconnectStudent({ id: id }));
                                        window.location.reload();
                                    } else {
                                        dispatch(connectStudent({ id: id }));
                                        window.location.reload();
                                    }
                                }}
                            >
                                {isUserConnected ? (
                                    <IoLogOutOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                ) : (
                                    <IoLogInOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                )}
                            </button>
                            {isLHover ? (
                                <div className="absolute top-6 right-20">
                                    <InfoALert
                                        text={
                                            isUserConnected
                                                ? "Покинуть курс"
                                                : "Присоединиться к курсу"
                                        }
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="p-6 flex justify-end border-t border-solid-black relative text-2xl">
                        <Link
                            to="#"
                            className="text-3xl md:text-4xl bg-transparent hover:text-gray-600"
                            onMouseEnter={() => {
                                setIsSHover((_isSHover) => true);
                            }}
                            onMouseLeave={() => {
                                setIsSHover((_isSHover) => false);
                            }}
                        >
                            <MdOutlineAccessibilityNew className="transition duration-200 ease-in-out hover:text-gray-500" />
                        </Link>
                        {isSHover ? (
                            <div className="absolute text-lg top-6 right-20">
                                <InfoALert text="Твоя статистика" />
                            </div>
                        ) : null}
                    </div>
                    <div
                        style={{ backgroundColor: color }}
                        className="hidden md:absolute right-3 top-24 w-[100px] h-[100px] md:flex justify-center pt-4 rounded-full text-7xl font-normal text-white"
                    >
                        {teacherName.slice(0, 1)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
