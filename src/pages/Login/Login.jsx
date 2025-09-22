import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(login("coffeeshop"))
        navigate("/coffeeshop")
    }

    return(
        <>
        <h1>login page</h1>
        <button className="w-[200px] bg-red-400 text-white" onClick={handleLogin}>login</button>
        </>
    )
}
export default Login;