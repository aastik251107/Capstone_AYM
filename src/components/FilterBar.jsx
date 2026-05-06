function FilterBar({
  filters,
  onFilterChange,
  resourceTypes,
  availabilityOptions,
}) {
  return (
    <section>
      <div className="filter-grid">
        <label>
          Resource Type
          <select name="type" value={filters.type} onChange={onFilterChange}>
            {resourceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          Availability
          <select
            name="availability"
            value={filters.availability}
            onChange={onFilterChange}
          >
            {availabilityOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label>
          Location
          <input
            type="text"
            name="location"
            placeholder="Search by area or city"
            value={filters.location}
            onChange={onFilterChange}
          />
        </label>
      </div>
    </section>
  )
}

export default FilterBar
