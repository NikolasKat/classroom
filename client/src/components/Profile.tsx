const Profile = () => {
    return (
        <>
            <div className="px-9 font-bold">
                <div>
                    <img
                        className="rounded-full"
                        src="../../public/avatar-img.jpg"
                        alt="face"
                    />
                    <h2 className="text-5xl mt-6">Kotovenko Nikolai</h2>
                    <h2 className="text-3xl">status: Student</h2>
                    <h4 className="font-normal text-cyan-300 text-xl">
                        Online
                    </h4>
                </div>
                <div className="text-center mt-20">
                    <h2 className="text-5xl">My available courses</h2>
                </div>
            </div>
        </>
    );
};

export default Profile;
