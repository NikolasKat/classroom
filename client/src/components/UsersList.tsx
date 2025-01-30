import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// пока пусть будет так. Потом переделаем уже под бэк

interface UserData {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
}

function SubjectList() {
    const [usersData, setUsersData] = useState<UserData[]>([]);

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
                {usersData.map((item) => (
                    <UserCard
                        key={item._id}
                        name={item.lastName}
                        surname={item.firstName}
                        img=""
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
