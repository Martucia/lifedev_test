import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { CustomerType } from "../../shared/constants/types";
import styles from "./Customers.module.sass";
import { columns, theme } from "./data";
import SearchIcon from "../../shared/ui/icons/search-icon";
import { useState, useEffect, useCallback } from "react";
import { usePagination } from "@table-library/react-table-library/pagination";
import { ParamsType, getData } from "../../hooks/fetching";

type DataType = {
  nodes: CustomerType[];
  pageInfo: {
    totalPages: number;
    totalItems: number;
    offset: number;
  };
};

export default function Customers() {
  const LIMIT = 8;
  const [data, setData] = useState<DataType>({
    nodes: [],
    pageInfo: {
      totalPages: 0,
      totalItems: 0,
      offset: 0,
    },
  });

  const [search, setSearch] = useState("");

  const doGet = useCallback(async (params: ParamsType) => {
    setData(await getData(params));
  }, []);

  useEffect(() => {
    doGet({
      offset: 0,
      limit: LIMIT,
      search,
    });
  }, [doGet, search]);

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  function onPaginationChange(_: any, state: any) {
    doGet({
      offset: state.page * LIMIT,
      limit: LIMIT,
      search,
    });
  }

  const pagination = usePagination(
    data,
    {
      state: {
        page: 0,
        size: LIMIT,
      },
      onChange: onPaginationChange,
    },
    {
      isServer: true,
    }
  );

  return (
    <div className={styles.customers}>
      <div className={styles.customers__header}>
        <div>
          <h2 className={styles.title}>All Customers</h2>
          <span className={styles.subtitle}>Active Members</span>
        </div>
        <div className={styles.search}>
          <SearchIcon />
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
      </div>

      <Table
        data={data}
        columns={columns}
        theme={theme}
        pagination={pagination}
      >
        {(tableList: CustomerType[]) => (
          <>
            <Header>
              <HeaderRow>
                {columns.map((column) => (
                  <HeaderCell key={column.label}>{column.label}</HeaderCell>
                ))}
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.company}</Cell>
                  <Cell>{item.phone}</Cell>
                  <Cell>{item.email}</Cell>
                  <Cell>{item.country}</Cell>
                  <Cell>
                    <span
                      className={`${
                        item.status ? "active" : "inactive"
                      } status`}
                    >
                      {item.status ? "Active" : "Inactive"}
                    </span>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      <div className={styles.customers__footer}>
        <div className={styles.customers__footer__info}>
          Showing data {data.pageInfo.offset + 1} to{" "}
          {data.pageInfo.totalItems > data.pageInfo.offset + LIMIT
            ? data.pageInfo.offset + LIMIT
            : data.pageInfo.totalItems}{" "}
          of {data.pageInfo.totalItems} entries
        </div>
        {data.pageInfo && (
          <div className={styles.pagination}>
            <button
              type="button"
              disabled={pagination.state.page === 0}
              className={styles.pagination__button}
              onClick={() =>
                pagination.fns.onSetPage(pagination.state.page - 1)
              }
            >
              {"<"}
            </button>
            {Array(data.pageInfo.totalPages)
              .fill(null)
              .map((_, index) => (
                <button
                  key={"pag" + index}
                  type="button"
                  className={`${styles.pagination__button} ${
                    pagination.state.page === index && styles.active
                  }`}
                  onClick={() => pagination.fns.onSetPage(index)}
                >
                  {index + 1}
                </button>
              ))}
            <button
              type="button"
              disabled={pagination.state.page + 1 === data.pageInfo.totalPages}
              className={styles.pagination__button}
              onClick={() =>
                pagination.fns.onSetPage(pagination.state.page + 1)
              }
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
