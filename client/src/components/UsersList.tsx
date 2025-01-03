import UserCard from "./UserCard";

// пока пусть будет так. Потом переделаем уже под бэк
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function SubjectList() {
    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {data.map((item, i: number) => (
                    <UserCard
                        key={i}
                        name="Иван"
                        surname="Иванов"
                        img=""
                        score={item}
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
