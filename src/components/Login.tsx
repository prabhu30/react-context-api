import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser }:any = useContext(UserContext);

    function handleSubmit(event: any) {
        event.preventDefault();
        setUser({username, password});
    }

    return (
        <div className="w-96 mx-auto my-4 bg-slate-600 text-white rounded-2xl py-8">
            <div className="text-center flex flex-col items-center gap-8">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <input 
                type="text" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
                className="outline-none text-black p-1 px-3 rounded" />
                
                <input 
                type="password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="outline-none text-black p-1 px-3 rounded" />
                
                <button type="submit" className="bg-blue-500 p-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login