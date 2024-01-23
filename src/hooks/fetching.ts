import { customers } from "../components/customers/data";

export type ParamsType = {
  offset: number;
  limit: number;
  search: string;
};

export const getData = async ({ offset, limit, search }: ParamsType) => {
  const filteredData =
    search.length > 0
      ? customers.filter((customer) =>
          customer.name.toLowerCase().includes(search.toLowerCase())
        )
      : customers;

  const total = Math.ceil(filteredData.length / limit);

  const paginatedData = filteredData.slice(offset, offset + limit);

  return {
    nodes: paginatedData,
    pageInfo: {
      totalPages: total,
      totalItems: customers.length,
      offset
    },
  };
};
