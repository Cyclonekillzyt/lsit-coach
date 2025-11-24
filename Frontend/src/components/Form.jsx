import { GrGoogle } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import toast from "react-hot-toast";
import api from "../lib/axios";
import { useState } from "react";
import { Link } from "react-router";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { useNavigate } from "react-router";

function SignUpForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [show, setShow] = useState(true);
  const [type, setType] = useState("password");

  const toggle = () => {
    setShow((prev) => !prev);
    show ? setType("text") : setType("password");
  };

  const checkPassword = (e) => {
    setVerifyPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verifyPassword !== password) {
      setIsValid(false);
      toast.error("Password is not the same");
      return;
    }

    try {
      const res = await api.post("/auth/register", { name, email, password });
      toast.success("registration successful");
      navigate("/login");
      console.log(res);
    } catch (error) {
      toast.error("failed to register", error);
      console.log(error);
    } finally {
      toast.success("done");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-neutral">
          Create Account
        </h2>

        <p className="text-center text-sm text-neutral/60 mb-6">
          Join the journey and start building your progress
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {isValid ? (
            <>
              <span className="relative">
                <input
                  type={type}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {show ? (
                  <Eye className="absolute top-2 right-3" onClick={toggle} />
                ) : (
                  <EyeClosed
                    className="absolute top-2 right-3"
                    onClick={toggle}
                  />
                )}
              </span>
              <span className="relative">
                <input
                  type={type}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                  minLength={8}
                  value={verifyPassword}
                  onChange={(e) => checkPassword(e)}
                  required
                />
                {show ? (
                  <Eye className="absolute top-2 right-3" onClick={toggle} />
                ) : (
                  <EyeClosed
                    className="absolute top-2 right-3"
                    onClick={toggle}
                  />
                )}
              </span>
            </>
          ) : (
            <>
              <span className="relative">
                <input
                  type={type}
                  placeholder="Password"
                  className="input input-bordered border-red-500 w-full"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {show ? (
                  <Eye className="absolute top-2 right-3" onClick={toggle} />
                ) : (
                  <EyeClosed
                    className="absolute top-2 right-3"
                    onClick={toggle}
                  />
                )}
              </span>
              <span className="relative">
                <input
                  type={type}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full border-red-500"
                  minLength={8}
                  value={verifyPassword}
                  onChange={(e) => checkPassword(e)}
                  required
                />
                {show ? (
                  <Eye className="absolute top-2 right-3" onClick={toggle} />
                ) : (
                  <EyeClosed
                    className="absolute top-2 right-3"
                    onClick={toggle}
                  />
                )}
              </span>
            </>
          )}

          <button className="btn btn-primary w-full mt-2">Sign Up</button>
        </form>

        <div className="my-6 relative">
          <div className="w-full h-0.5 bg-black"></div>
          <span className="absolute bg-base-100 -top-2.5 left-20 px-2 text-sm text-neutral/60">
            Sign up with social accounts
          </span>

          <div className="flex gap-8 mt-6 justify-center">
            <GrGoogle className="size-8" />
            <FaTwitter className="size-8" />
            <FaGithub className="size-8" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p>Already have an account?</p>
          <Link
            to={"/login"}
            className="text-accent text-lg ml-1 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [type, setType] = useState("password");

  const toggle = () => {
    setShow((prev) => !prev);
    show ? setType("text") : setType("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      toast.success("Login successful");
      const user = res.data.user;
      console.log(user)
      navigate("/");
    } catch (error) {
      toast.error("failed to login", error);
      console.log(error);
    } finally {
      toast.success("done");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-neutral">
          Welcome Back
        </h2>

        <p className="text-center text-sm text-neutral/60 mb-6">
          Log in to continue your journey
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <span className="relative">
            <input
              type={type}
              placeholder="Password"
              className="input input-bordered w-full"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {show ? (
              <Eye className="absolute top-2 right-3" onClick={toggle} />
            ) : (
              <EyeClosed className="absolute top-2 right-3" onClick={toggle} />
            )}
          </span>
          <div className="mt-4 text-end">
            <a className="text-primary text-sm hover:underline">
              Forgot your password?
            </a>
          </div>

          <button className="btn btn-primary w-full">Login</button>
        </form>

        <div className="my-6 relative">
          <div className="w-full h-0.5 bg-black "></div>
          <span className="absolute bg-base-100 -top-2.5 left-20 px-2 text-sm text-neutral/60">
            Login with social accounts
          </span>
          <div className="flex gap-8 mt-6 justify-center">
            <GrGoogle className="size-8" />
            <FaTwitter className="size-8" />
            <FaGithub className="size-8" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p> Don't have an account?</p>
          <Link
            to={"/register"}
            className="text-accent text-lg ml-1 cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
