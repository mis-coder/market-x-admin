import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Navbar from "../../../components/navbar";
import { SIGN_IN } from "../../../constants/routes";
import prismaDb from "../../../lib/prismaDb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect(SIGN_IN);
  }

  const store = await prismaDb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
