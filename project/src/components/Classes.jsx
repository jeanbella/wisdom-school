const Classes = () => {
    return (
        <div>

            <h1 className="text-3xl font-bold mb-6">
                Classes
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl">
                        Primary 1
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Students: 60
                    </p>

                    <p className="text-gray-500">
                        Teacher: Mr. David
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="font-bold text-xl">
                        Primary 2
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Students: 54
                    </p>

                    <p className="text-gray-500">
                        Teacher: Mrs. Alice
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Classes;