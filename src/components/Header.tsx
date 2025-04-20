import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex bg-green justify-between w-full mx-auto px-10 py-2 h-[60px] items-center">
      {/* Logo part */}
      <div className="font-bold text-xl">VoiceSeed</div>

      {/* Center part */}
      <nav className="flex space-x-10">
        <Link to="/">Home</Link>
        <Link to="/playground">Playground</Link>
        {/* <Link to="/usecases">Use cases</Link>
        <Link to="/pricing">Pricing</Link> */}
      </nav>
      {/* User part */}
      <div className="flex space-x-10 ">{/* <div>Login</div> */}</div>
    </header>
  );
}
