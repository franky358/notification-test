import React from "react";
import { useTable } from "react-table";

const LogsTable = () => {
  const data = React.useMemo(
    () => [
      {
        messageType: "Sports",
        notificationType: "SMS",
        name: "Martin Barragan",
        email: "martin_97@gmai.com",
      },
      {
        messageType: "Finance",
        notificationType: "E-Mail",
        name: "Juan Valdez",
        email: "juan.valdez@gmai.com",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Message",
        accessor: "messageType",
      },
      {
        Header: "Notification",
        accessor: "notificationType",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LogsTable;
