import { useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { SubjectData } from "../models/interfaces";
import SubjectCard from "./SubjectCard";
import { fetchCourses } from "../store/slices/subjectsSlice";

function SubjectList() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    const courses = useSelector((state: RootState) => state.subjects.subjects);
    const userId = useSelector((state: RootState) => state.user.user.id);

    return (
        <>
            {courses.length ? (
                <div className="flex justify-center gap-16 flex-wrap">
                    {courses.map((item: SubjectData, i: number) => (
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
