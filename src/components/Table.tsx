import { TableData } from '@/utils/types';

const Table = ({ data }: { data: TableData }) => {
  console.log('table data...', data);

  const LoadingSkeleton = () => {
    return [...Array(10)].map((_, count) => (
      <tr className={`${count % 2 ? 'bg-white' : 'bg-gray-200'}`} key={count}>
        {data.headers.map((_, index) => {
          let classes = 'py-7 px-4';
          if (index === 0) classes += ' rounded-l-md';
          if (index === data.headers.length - 1) classes += ' rounded-r-md';
          return (
            <td className={classes} key={index}>
              <div className="h-3 animate-pulse rounded-md bg-gray-300"></div>
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto text-left text-sm">
        <thead className="rounded text-xs font-bold uppercase">
          <tr>
            {data.headers.map((header, index) => {
              return (
                <th className="p-4" key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="font-light">
          {data.rows.length ? (
            data.rows.map((row, rowIndex) => {
              return (
                <tr
                  className={`${rowIndex % 2 ? 'bg-white' : 'bg-gray-100'}`}
                  key={rowIndex}
                >
                  {row.map((column, columnIndex) => {
                    let classes = 'p-4';
                    if (columnIndex === 0) classes += ' rounded-l-md';
                    if (columnIndex === row.length - 1)
                      classes += ' rounded-r-md';
                    return (
                      <td className={classes} key={columnIndex}>
                        <div className="flex flex-col">{column}</div>
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <LoadingSkeleton />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
