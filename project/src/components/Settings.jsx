const Setings = () => {
    return (
        <div>

            <h1 className="text-3xl font-bold mb-6">
                Settings
            </h1>

            <div className="bg-white rounded-xl shadow p-8 space-y-6">

                <div>

                    <label className="block mb-2 font-semibold">
                        School Name
                    </label>

                    <input
                        type="text"
                        defaultValue="Wisdom School"
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        School Email
                    </label>

                    <input
                        type="email"
                        defaultValue="wisdomschools385@gmail.com"
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Phone Number
                    </label>

                    <input
                        type="text"
                        defaultValue="+250788478469"
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Save Changes
                </button>

            </div>

        </div>
    );
};

export default Setings;