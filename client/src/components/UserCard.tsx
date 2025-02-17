import { FC, useState } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidMessageEdit } from "react-icons/bi";
import InfoALert from "./InfoALert";
import { UserCardData } from "../models/interfaces";

const UserCard: FC<UserCardData> = ({ firstName, lastName, img, userRole }) => {
    const [isLHover, setIsLHover] = useState<boolean>(false);

    console.log(userRole);

    return (
        <div className="relative w-[380px] bg-slate-100 rounded-2xl py-9 px-7 text-center text-2xl font-medium">
            {img ? (
                <img src={img} alt="user-img" className="rounded-full mb-2" />
            ) : (
                <img
                    src="../../public/avatar-img.jpg"
                    alt="user-img"
                    className="rounded-full mb-2"
                />
            )}
            <h3 className="mt-7 text-3xl font-semibold">
                {firstName} {lastName}
            </h3>
            <div className="relative flex justify-center items-center">
                <button
                    className="text-4xl mt-4"
                    onMouseEnter={() => {
                        setIsLHover((_isLHover) => true);
                    }}
                    onMouseLeave={() => {
                        setIsLHover((_isLHover) => false);
                    }}
                >
                    <BiSolidMessageEdit className="text-5xl transition duration-200 ease-in-out hover:text-gray-500" />
                </button>
                {isLHover ? (
                    <div className="absolute text-base top-[15px] left-1">
                        <InfoALert text="Написать" />
                    </div>
                ) : null}
            </div>
            <div className="absolute top-1 right-2 text-5xl rounded-full p-3">
                {userRole === "STUDENT" ? (
                    <PiStudentFill />
                ) : (
                    <LiaChalkboardTeacherSolid />
                )}
            </div>
        </div>
    );
};

export default UserCard;
