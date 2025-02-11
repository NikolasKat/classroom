import axios from "axios";
import { useEffect, useState } from "react";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { SubjectData } from "../models/interfaces";
import SubjectCard from "./SubjectCard";

function SubjectList() {
    const [state, setState] = useState([]);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const getAds = async () => {
            const response = await axios
                .get("http://localhost:4444/api/getSubjects")
                .then((response) => {
                    setState(response.data);
                });
        };
        getAds();
    }, [dispatch]);

    return (
        <>
            {state.length ? (
                <div className="flex justify-center gap-16 flex-wrap">
                    {state.map((item: SubjectData, i: number) => (
                        <SubjectCard
                            key={i}
                            id={item._id}
                            teacherName={item.teacher.lastName}
                            subjectName={item.subjectName}
                            connectedUsers={item.connectedUsers}
                            color="#129941e2"
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-7">
                    <h1 className="font-medium">
                        На данный момент нет открытых курсов!!
                    </h1>
                </div>
            )}
        </>
    );
}

export default SubjectList;
