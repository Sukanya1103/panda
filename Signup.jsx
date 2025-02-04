import { Link } from "react-router-dom";

const Signup = () => {

    return (
        <>
            <div className="form-page">
                <div className="previous-page">
                    <Link to ="/">Home</Link>
                </div>
                <div className="form-logo-box">
                    <img src="./assest/Images/Panda.jpg" alt=""/>
                    <h5>Panda</h5>
                </div>
                <div className="signIn-form-content">
                    <form>
                        <div className="form-content">
                            <div className="form-details">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    id=""
                                    defaultValue=""
                                    name="Name"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-details">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    id=""
                                    defaultValue=""
                                    name="Name"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-details">
                                <label>Mobile No.:</label>
                                <input
                                    type="number"
                                    id=""
                                    defaultValue=""
                                    name="Mobile"
                                    placeholder=""
                                />
                            </div>
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
                                <label>Gender:</label>
                                <div className="form-detail-gender">
                                    <div>
                                        Male
                                        <input
                                            type="radio"
                                            id=""
                                            defaultValue=""
                                            name="gender"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        Female
                                        <input
                                            type="radio"
                                            id=""
                                            defaultValue=""
                                            name="gender"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        Other
                                        <input
                                            type="radio"
                                            id=""
                                            defaultValue=""
                                            name="gender"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-details">
                                <button type="submit">Sign Up</button>
                            </div>
                        </div>
                        <p>OR</p>
                        <div>
                            <Link to="/Login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
};

export default Signup;