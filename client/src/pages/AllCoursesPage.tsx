import { useDispatch, useSelector } from "react-redux";
import SubjectList from "../components/SubjectList";
import { AppDispatch, RootState } from "../store/store";
import { fetchCourses } from "../store/slices/subjectsSlice";
import { useEffect } from "react";

export default function CoursesPage() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    const courses = useSelector((state: RootState) => state.subjects.subjects);

    return (
        <div className="px-9">
            {courses?.length ? (
                <SubjectList data={courses} />
            ) : (
                <div className="flex flex-col items-center gap-7">
                    <h1 className="font-medium">
                        На данный момент нет открытых курсов!
                    </h1>
                </div>
            )}
        </div>
    );
}
