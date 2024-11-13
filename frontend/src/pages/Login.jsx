import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg text-zinc-600 shadow-lg ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="">
          Please {state === "Sign Up" ? "sign up" : "login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p className="">Full name: </p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
            />
          </div>
        )}

        <div className="w-full">
          <p className="">Email: </p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
          />
        </div>

        <div className="w-full">
          <p className="">Password: </p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
              className="cursor-pointer text-primary underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="">
            Create a new account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="cursor-pointer text-primary underline"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
