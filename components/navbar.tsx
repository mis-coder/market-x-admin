import prismaDb from "../lib/prismaDb";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MainNav from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismaDb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <div className="hidden md:hidden lg:flex">
          <MainNav className="mx-6" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:hidden lg:block ">
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex md:flex lg:hidden">
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
