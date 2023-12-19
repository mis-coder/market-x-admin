import prismaDb from "../../../../../lib/prismaDb";
import { format } from "date-fns";
import SizeClient from "./components/client";
import { SizeColumn } from "./components/columns";

interface SizePageProps {
  params: { storeId: string };
}
const SizePage: React.FC<SizePageProps> = async ({ params }) => {
  const sizes = await prismaDb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizePage;
