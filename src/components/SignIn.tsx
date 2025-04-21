import { useState } from "react";
import { login } from "../common/api/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });

    console.log(`res`);
    console.log(res);
  };

  return (
    <div className="container flex justify-center py-[60px]">
      <form onSubmit={handleSubmit} className="border p-8">
        <div className=" w-[300px]">
          <div className="text-2xl font-semibold text-center">Log in</div>

          <div>
            <div className="border-b my-[30px]">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="border-b my-[30px]">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full border cursor-pointer h-[40px] hover:bg-black hover:text-white"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
