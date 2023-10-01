import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/ProviderContext";

const Login = () => {

    const navigate = useNavigate();
    const { signInUser, signInGoogle } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(result =>{
            console.log(result.use)
        })
        .catch(error =>{
            console.log(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body w-96">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New here? <Link to="/register" className="text-blue-400 underline">Pleaser Register</Link></p>
                    </div>

                </div>
                <div className="form-control mt-6">

                    <button onClick={handleGoogleSignIn} className="btn btn-warning">Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;