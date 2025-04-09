import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/slices/userSlice";
import { AppDispatch } from "../store/store";
import { LoginData } from "../models/interfaces";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        try {
            await dispatch(login(data));
        } catch (error) {
            reset();
            console.log(error);
        }
    };

    return (
        <div className="pt-64">
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-medium text-gray-900"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="name@flowbite.com"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors.email?.type === "required" && (
                        <p role="alert">Email is required</p>
                    )}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-lg font-medium text-gray-900"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter the password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register("password", {
                            required: true,
                            minLength: 5,
                        })}
                    />
                    {errors.password?.type === "required" && (
                        <p role="alert">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p role="alert">Password is too small</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Log in
                </button>
            </form>
            <h3 className="text-xl mt-5 text-center">
                or{" "}
                <Link to="/register" className="font-semibold ">
                    Register
                </Link>{" "}
                if you don`t have an account
            </h3>
        </div>
    );
};

export default LoginPage;
