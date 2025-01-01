import { FC, useState } from "react";
import { BiSolidMessageEdit } from "react-icons/bi";
import InfoALert from "./InfoALert";

interface UserData {
    name: string;
    surname: string;
    img?: string;
    score: number;
}

const UserCard: FC<UserData> = ({ name, surname, img, score }) => {
    const [isLHover, setIsLHover] = useState<boolean>(false);

    return (
        <div className="relative w-[360px] bg-slate-100 rounded-2xl py-9 px-7 text-center text-2xl font-medium">
            {img ? (
                <img src={img} alt="user-img" className="rounded-full mb-2" />
            ) : (
                <img
                    src="../../public/avatar-img.jpg"
                    alt="user-img"
                    className="rounded-full mb-2"
                />
            )}
            <h3>
                {surname} {name}
            </h3>
            <h4>Средний балл: {score}</h4>
            <div className="relative flex justify-center items-center">
                <button
                    className="text-4xl mt-2"
                    onMouseEnter={() => {
                        setIsLHover((isLHover) => true);
                    }}
                    onMouseLeave={() => {
                        setIsLHover((isLHover) => false);
                    }}
                >
                    <BiSolidMessageEdit />
                </button>
                {isLHover ? (
                    <div className="absolute top-2 left-3">
                        <InfoALert text="Написать" />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default UserCard;
