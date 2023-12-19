import prismaDb from "../../../../../lib/prismaDb";
import { format } from "date-fns";
import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";

interface CategoriesPageProps {
  params: { storeId: string };
}
const CategoriesPage: React.FC<CategoriesPageProps> = async ({ params }) => {
  const categories = await prismaDb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
