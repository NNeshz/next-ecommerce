import Products from "../ui/AllProducts/Products"
import FilterBar from "../ui/FilterBar/FilterBar"
import SearchBar from "../ui/SearcBar/SearchBar"

export default function page() {
  return (
    <div className="w-full flex px-10 md:px-20 justify-between">
      <section>
        <FilterBar />
      </section>
      <div>
          <SearchBar />
          <Products />
      </div>
    </div>
  )
}
