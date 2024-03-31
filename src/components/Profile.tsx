import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const { user }: any = useContext(UserContext);    

    if (!user) return <h1 className="text-center mt-24">Please Login!</h1>

    return (
        <div className="text-center mt-24">
            <h1>Welcome, {user.username}!</h1>
        </div>
    )
}

export default Profile