import { useApp } from "../../states/AppState";

const Search: React.FC = () => {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <div className="px-6 md:px-0">
      <div className="container mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">Search</h5>
        <div className="w-full md:flex-1">
          <input
            type="text"
            className="w-full rounded-full px-10 py-3 focus:outline-none dark:text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Stock Name"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
