/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { SubjectData } from "../models/interfaces";
import { RootState } from "../store/store";
import SubjectCard from "./SubjectCard";

function SubjectList({ data }) {
    const userId = useSelector((state: RootState) => state.user.user.id);

    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {data.map((item: SubjectData, i: number) => (
                    <SubjectCard
                        key={i}
                        id={item._id}
                        teacherName={item.teacher.lastName}
                        subjectName={item.subjectName}
                        color="#129941e2"
                        isUserConnected={
                            !!item.connectedUsers.some(
                                (item) => item._id == userId,
                            )
                        }
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
