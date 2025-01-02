import React from 'react';

interface Column {
  heading: string;
  accessor: string;
  Cell?: (props: { value: any; row: Record<string, any> }) => JSX.Element;
}

interface TableProps {
  data: Record<string, any>[];
  column: Column[];
  button?: boolean;
  border?: boolean;
}

const Table: React.FC<TableProps> = ({ data, column, button, border }) => {
  return (
    <section className="max-w-[1800px] mx-auto p-0">
      <div className="shadow-lg">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm mb-0 bg-[#0071BA] text-left text-gray-500">
            <thead className="text-[14px] text-white text-center bg-[#0071BA]">
              <tr>
                {column.map(({ heading }, index) => (
                  <th
                    key={index}
                    className={`whitespace-nowrap px-6 py-3 [&:nth-child(1)]:pl-[2.3rem] [&:nth-child(1)]:rounded-[10px_0px_0px_0px] [&:nth-last-child(1)]:rounded-[0px_10px_0px_0px]`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data && data.length > 0 ? (
                data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    } hover:bg-[#F2F2F2]`}
                  >
                    {column.map((header, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 [&:nth-child(1)]:pl-[2.3rem] text-center py-4 font-medium whitespace-nowrap ${
                          button && colIndex === column.length - 1
                            ? 'bg-[#F8F8F8] hover:bg-black cursor-pointer button-hover hover:text-white group'
                            : ''
                        } ${border ? 'border-2 border-[#0071BA]' : ''}`}
                      >
                        {header.Cell ? (
                          header.Cell({ value: row[header.accessor], row })
                        ) : (
                          row[header.accessor]
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : 
              null
            }
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
