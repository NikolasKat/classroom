import SubjectCard from "./SubjectCard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSubject } from "../store/slices/subjectsSlice";
import { AppDispatch, RootState } from "../store/store";

function SubjectList() {
    const dispatch = useDispatch<AppDispatch>();
    const subjectsData = useSelector(
        (state: RootState) => state.subjects.subjects,
    );

    useEffect(() => {
        const getAds = async () => {
            const response = await axios
                .get("http://localhost:4444/api/getSubjects")
                .then((response) => {
                    console.log("MY DATA", response.data);
                    dispatch(addSubject(response.data));
                });
        };
        getAds();
    }, [dispatch, subjectsData]);

    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {subjectsData.map((item, i: number) => (
                    <SubjectCard
                        key={i}
                        color="#106464"
                        bgImg="#cfdf68"
                        subjectName={item.subjectName}
                        teacherEmail=""
                        // teacherName={item.teacherEmail}
                        id={item.id}
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
