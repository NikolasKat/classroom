import { SubmitHandler, useForm } from "react-hook-form";
import { SubjectData } from "../models/interfaces";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addSubject } from "../store/slices/subjectsSlice";

const SubjectForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SubjectData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit: SubmitHandler<SubjectData> = async (data) => {
        try {
            await dispatch(addSubject(data));
        } catch (error) {
            alert("Проблемы присоздании курса!");
            reset();
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-9 bg-slate-100 absolute right-6 top-36 rounded-2xl w-2/6 z-10"
        >
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    placeholder=" "
                    id="floating_firstName"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    {...register("subjectName", {
                        required: true,
                        maxLength: 20,
                    })}
                />
                <label
                    htmlFor="floating_firstName"
                    className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Subject name
                </label>
                {errors.subjectName?.type === "required" && (
                    <p role="alert">Subject name is required</p>
                )}
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Create course
            </button>
        </form>
    );
};

export default SubjectForm;
