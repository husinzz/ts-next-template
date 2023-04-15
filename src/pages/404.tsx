import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Some header */}
      <div className="flex flex-grow items-center justify-center">
        <div className="text-center">
          <p className="font-bold text-3xl">404</p>
          <Link className="hover:text-blue-600" href={"/"}>
            Go back
          </Link>
        </div>
      </div>
      {/* Some footer */}
    </div>
  );
};

export default NotFound;
