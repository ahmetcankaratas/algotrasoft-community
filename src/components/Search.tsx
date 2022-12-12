const Search: React.FC = () => {
    return (
        <div className="px-6 md:px-0">
            <div className="container max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
            <h5 className="text-2xl font-bold">Search</h5>
            <div className="w-full md:flex-1">
            <input
              type="text"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              placeholder="Enter Stock Name"
            />
          </div>

            </div>
        </div>
    )
};

export default Search;