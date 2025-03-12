import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                <span className="max-sm:hidden"> Create Startup</span>
                <BadgePlus className="size-4 sm:hidden text-slate-800 hover:text-slate-900 mb-1" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="nav_link cursor-pointer">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-4 sm:hidden  text-slate-800 hover:text-slate-900" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`} className="nav_link">
                <Avatar className="size-19">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="nav_button">
                <span className="flex items-center gap-2 cursor-pointer">
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
