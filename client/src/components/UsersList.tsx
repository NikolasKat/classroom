import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { UserCardData } from "../models/interfaces";

function SubjectList() {
    const [usersData, setUsersData] = useState<UserCardData[]>([]);

    const userId = useSelector((state: RootState) => state.user.user.id);

    useEffect(() => {
        const getAds = async () => {
            const response = await axios
                .get("http://localhost:4444/api/client")
                .then((response) =>
                    response.data.filter(
                        (item: unknown) => item._id !== userId,
                    ),
                )
                .then((response) => setUsersData(response));
        };
        getAds();
    }, []);

    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {usersData.length ? (
                    usersData.map((item, i) => (
                        <UserCard
                            key={i}
                            lastName={item.lastName}
                            firstName={item.firstName}
                            img=""
                        />
                    ))
                ) : (
                    <div className="text-4xl text-center font-bold mt-64">
                        Вы пока единственный пользователь! <br /> Поделитесь
                        данным приложением со своими кентами :)
                    </div>
                )}
            </div>
        </>
    );
}

export default SubjectList;
