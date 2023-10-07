import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { SIGN_IN } from "@/constants/routes";
import prismaDb from "@/lib/prismaDb";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect(SIGN_IN);
  }

  const store = await prismaDb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }
  return <>{children}</>;
}
