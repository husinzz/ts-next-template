import type { NextPage } from "next";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOT FOUND",
  description: "github.com/husinzz",
};

const NotFound: NextPage = () => {
  return (
    <>
      <div className="flex h-full flex-col">
        {/* Some header */}
        <div className="flex flex-grow items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold">404</p>
            <Link className="hover:text-blue-600" href={"/"}>
              Go back
            </Link>
          </div>
        </div>
        {/* Some footer */}
      </div>
    </>
  );
};

export default NotFound;
