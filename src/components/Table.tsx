const Table = ({ children }: { children: React.ReactNode }) => {
  const headers = [''];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto text-left text-sm">
        <thead className="rounded bg-gray-600 text-xs uppercase text-white">
          <tr>
            <th className="rounded-l-md p-4">Details</th>
            <th className="p-4">Sent on</th>
            <th className="p-4">Sender identity</th>
            <th className="rounded-r-md p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">
              Congratulations on completing Graduation! Discover Job-ready
              Skills with ColoredCow Software Training. rounded-r-md{' '}
            </td>
            <td className="p-4">Silver</td>
            <td className="p-4">Laptop</td>
            <td className="p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">Microsoft Surface Pro</td>
            <td className="p-4">White</td>
            <td className="p-4">Laptop PC</td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">Magic Mouse 2</td>
            <td className="p-4">Black</td>
            <td className="p-4">Accessories</td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">Microsoft Surface Pro</td>
            <td className="p-4">White</td>
            <td className="p-4">Laptop PC</td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">Magic Mouse 2</td>
            <td className="p-4">Black</td>
            <td className="p-4">Accessories</td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="rounded-l-md p-4">Microsoft Surface Pro</td>
            <td className="p-4">White</td>
            <td className="p-4">Laptop PC</td>
            <td className="rounded-r-md p-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="rounded-l-md p-4">Magic Mouse 2</td>
            <td className="p-4">Black</td>
            <td className="p-4">Accessories</td>
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
