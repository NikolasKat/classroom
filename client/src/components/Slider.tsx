import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchCourses } from "../store/slices/subjectsSlice";
import SubjectCard from "./SubjectCard";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdArrowBackIos className="arrows" />
        </div>
    );
}

const MultipleItems = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="next" />,
        prevArrow: <SamplePrevArrow className="prev" />,
    };

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    const courses = useSelector((state: RootState) => state.subjects.subjects);
    const userId = useSelector((state: RootState) => state.user.user.id);

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {courses.map((item, i) => {
                    return (
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
                    );
                })}
            </Slider>
        </div>
    );
};

export default MultipleItems;
