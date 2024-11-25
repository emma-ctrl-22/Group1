import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex bg-gray-100 w-full h-screen items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="font-bold text-3xl text-center text-[#079b31] mb-4">Hotel Management System</h1>
                <h2 className="text-xl text-center text-gray-700 mb-6">Login</h2>
                <form className="flex flex-col">
                    <input
                        className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#079b31]"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#079b31]"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-[#079b31] text-white rounded-lg p-3 hover:bg-[#067a24] transition duration-200">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;
