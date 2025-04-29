import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { SlChemistry } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { FC, useState } from "react";
import InfoALert from "./InfoALert";
import { ETypeOfTask, TaskData } from "../models/interfaces";
import { Link } from "react-router-dom";

const TaskCard: FC<TaskData> = ({ title, subjectName, type, id }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    return (
        <div className="relative flex items-center w-11/12 lg:w-4/5 justify-between border border-solid-black px-5 py-4 rounded-2xl">
            <div className="flex items-center gap-6">
                <div className="bg-slate-100 text-3xl lg:text-4xl p-4 rounded-full">
                    {/* <SlBookOpen /> */}
                    {type === ETypeOfTask.LAB ? (
                        <SlChemistry />
                    ) : type === ETypeOfTask.NOTES ? (
                        <SlBookOpen />
                    ) : (
                        <GrSchedule />
                    )}
                </div>
                <div>
                    <Link
                        className="text-xl lg:text-2xl font-bold lg:font-semibold"
                        to={`/courses/${subjectName}/tasks/${id}`}
                    >
                        {title}
                    </Link>
                    <h4>{subjectName}</h4>
                </div>
            </div>
            <button
                className="text-3xl lg:text-4xl"
                onMouseEnter={() => {
                    setIsHover((_isHover) => true);
                }}
                onMouseLeave={() => {
                    setIsHover((_isHover) => false);
                }}
                onClick={() => {
                    setIsCompleted((isCompleted) => !isCompleted);
                }}
            >
                {isCompleted ? (
                    <BiTask className="text-green-600" />
                ) : (
                    <BiTaskX className="text-red-800" />
                )}
            </button>
            {isHover ? (
                <div className="absolute top-9 right-20 text-lg">
                    <InfoALert
                        text={isCompleted ? "Выполнено" : "Сдать работу"}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default TaskCard;
