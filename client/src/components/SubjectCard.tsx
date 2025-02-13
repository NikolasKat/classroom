import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import InfoALert from "./InfoALert";
import { FC, useEffect, useState } from "react";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ConnectedUsers } from "../models/interfaces";
import {
    connectStudent,
    disconnectStudent,
} from "../store/slices/subjectsSlice";

interface SubjectCardProps {
    subjectName: string;
    teacherName: string;
    color: string;
    id: string;
    connectedUsers: ConnectedUsers[];
}

const SubjectCard: FC<SubjectCardProps> = ({
    subjectName,
    teacherName,
    color,
    id,
    connectedUsers,
}) => {
    const [isSHover, setIsSHover] = useState<boolean>(false);
    const [isLHover, setIsLHover] = useState<boolean>(false);
    const [isJoin, setIsJoin] = useState<boolean>(false);

    const userId = useSelector((state: RootState) => state.user.user.id);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!connectedUsers.length || typeof connectedUsers !== "object") {
            setIsJoin((_isJoin) => true);
        }
        const candidate = connectedUsers.find((item) => item.id === userId);

        setIsJoin((_isJoin) => !!candidate);
    }, [connectedUsers, userId]);

    return (
        <>
            <div className="flex relative bg-slate-100 rounded-3xl border border-solid-black">
                <div className="flex flex-col justify-between min-w-[450px] min-h-[350px] font-medium relative">
                    <div
                        style={{ backgroundColor: "#dfe442" }}
                        className="flex justify-between p-6 rounded-t-xl"
                    >
                        <div>
                            <Link
                                to={`/${subjectName}`}
                                className="transition duration-200 ease-in-out text-4xl hover:text-gray-500"
                            >
                                {subjectName}
                            </Link>
                            <h4 className="text-xl mt-3">{teacherName}</h4>
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
                                onClick={() =>
                                    dispatch(disconnectStudent({ id: id }))
                                }
                            >
                                {isJoin ? (
                                    <IoLogOutOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                ) : (
                                    <IoLogInOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                )}
                            </button>
                            {isLHover ? (
                                <div className="absolute top-6 right-20">
                                    <InfoALert
                                        text={
                                            isJoin
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
                            className="text-4xl bg-transparent hover:text-gray-600"
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
                        className="absolute right-3 top-24 w-[100px] h-[100px] flex justify-center pt-4 rounded-full text-7xl font-normal text-white"
                    >
                        {teacherName.slice(0, 1)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
