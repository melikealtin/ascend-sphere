import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="nav_container">
      <nav className="nav_content">
        <Link href="/">
          <h1 className="nav_brand">
            Ascend<span className="font-extrabold">Sphere</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" className="nav_link">
                Create Startup
              </Link>

              <Link href={`/user/${session?.user?.name}`} className="nav_link">
                {session?.user?.name}
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="nav_button">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="nav_button">
                <span className="flex items-center gap-2">
                  Login with GitHub
                </span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
