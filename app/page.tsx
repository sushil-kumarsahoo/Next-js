import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        hi there
        <br />
        <Link className="text-md border-2" href={"/signin"}>Sign in to Todo app</Link>
        <br />
        <Link className="text-md border-2" href={"/signup"}>Sign up to Todo app</Link>
        <br />
      </div>
    </div>
  );
}
