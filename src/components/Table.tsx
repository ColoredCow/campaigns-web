const Table = ({ children }: { children: React.ReactNode }) => {
  const headers = ['Details', 'Sent on', 'Sender identity'];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto text-left text-sm">
        <thead className="rounded text-xs font-bold uppercase">
          <tr>
            {headers.map((header, index) => {
              return (
                <th className="p-4" key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="font-light">
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              <div className="flex flex-col">
                <span className="truncate">
                  Congratulations on completing Graduation! Discover Job-ready
                  Skills with ColoredCow Software Training.{' '}
                </span>
                <span className="text-xs text-gray-500">THDC-IHET</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Jun 24, 2023</span>
                <span className="text-xs text-gray-500">07:36 pm</span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex flex-col ">
                <span>Satendra Rawat</span>
                <span className="text-xs text-gray-500">
                  satendra@coloredcow.com
                </span>
              </div>
            </td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
