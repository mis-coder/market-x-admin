import prismaDb from "@/lib/prismaDb";

export const getStockCount = async (storeId: string) => {
  const stockCount = await prismaDb.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
};
