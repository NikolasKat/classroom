import { useSelector } from "react-redux";
import SubjectList from "../components/SubjectList";
import { RootState } from "../store/store";

export default function CoursesPage() {
    const data = useSelector((state: RootState) => state.subjects.subjects);
    return (
        <div className="px-9">
            {data.length ? (
                <SubjectList />
            ) : (
                <div className="flex flex-col items-center gap-7">
                    <h1 className="font-medium">
                        На данный момент нет открытых курсов!!
                    </h1>
                </div>
            )}
        </div>
    );
}
