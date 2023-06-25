const Table = ({ children }: { children: React.ReactNode }) => {
  const headers = [''];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-blue-400 text-xs uppercase text-white">
          <tr>
            <th scope="col" className="p-4">
              Details
            </th>
            <th scope="col" className="p-4">
              Sent on
            </th>
            <th scope="col" className="p-4">
              Sender identity
            </th>
            <th scope="col" className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white dark:border-gray-700">
            <th
              scope="row"
              className="whitespace-nowrap p-4 font-medium text-gray-900"
            >
              Congratulations on completing Graduation! Discover Job-ready
              Skills with ColoredCow Software Training.
            </th>
            <td className="p-4">Silver</td>
            <td className="p-4">Laptop</td>
            <td className="p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <th
              scope="row"
              className="whitespace-nowrap p-4 font-medium text-gray-900"
            >
              Microsoft Surface Pro
            </th>
            <td className="p-4">White</td>
            <td className="p-4">Laptop PC</td>
            <td className="p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap p-4 font-medium text-gray-900"
            >
              Magic Mouse 2
            </th>
            <td className="p-4">Black</td>
            <td className="p-4">Accessories</td>
            <td className="p-4 text-right">
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
