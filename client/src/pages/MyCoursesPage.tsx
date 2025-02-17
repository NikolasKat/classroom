import { useDispatch, useSelector } from "react-redux";
import SubjectList from "../components/SubjectList";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchCourses } from "../store/slices/subjectsSlice";

export default function MyCoursesPage() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    const courses = useSelector((state: RootState) => state.subjects.subjects);
    const userId = useSelector((state: RootState) => state.user.user.id);
    const sortedCourses = courses.filter(
        (item) =>
            item.connectedUsers.some((item) => item._id == userId) === true,
    );

    return (
        <div className="px-9">
            {sortedCourses.length ? (
                <SubjectList data={sortedCourses} />
            ) : (
                <div className="flex flex-col items-center gap-7">
                    <h1 className="font-medium">
                        На данный момент Вы не добавлены ни на один из курсов!
                    </h1>
                </div>
            )}
        </div>
    );
}
