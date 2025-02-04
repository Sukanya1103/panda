import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <div className="form-page">
                <div className="previous-page">
                    <Link to="/">Home</Link>
                </div>
                <div className="form-logo-box2">
                    <img src="./assest/Images/Panda.jpg" alt=""/>
                    <h5>Panda</h5>
                </div>
                <div className="signIn-form-content">
                    <form>
                        <div className="form-content">
                            <div className="form-details">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    id=""
                                    defaultValue=""
                                    name="Email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-details">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    id=""
                                    defaultValue=""
                                    name="Password"
                                    placeholder="******"
                                />
                            </div>
                            <div className="form-details">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                        <p>OR</p>
                        <div>
                            <Link to="/Signup">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
};

export default Login;