import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="w-full rounded bg-white shadow-sm">
        <form className="flex items-center justify-between gap-4 p-4">
          <div className="md:5/6 flex w-4/5 flex-row items-center gap-3">
            <div className="text-2xl text-zinc-500">
              <HiMagnifyingGlass />
            </div>
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Find stall by name..."
            />
          </div>
          <div className="w-1/5 md:w-1/6">
            <button className="w-full rounded bg-outrageous-orange-900 p-2 text-outrageous-orange-50">
              Find
              <span className="hidden md:inline"> Stall</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
