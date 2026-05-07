import { useEffect, useState } from 'react'
import AddResourceForm from './AddResourceForm'
import FilterBar from './FilterBar'
import ResourceCard from './ResourceCard'

const initialFilters = {
  type: 'All',
  availability: 'All',
  location: '',
}

const resourceTypes = ['All', 'Food', 'Medicine', 'Shelter', 'Water', 'Clothing']
const availabilityOptions = ['All', 'Available', 'Limited']

function Dashboard() {
  const [resources, setResources] = useState([])
  const [filters, setFilters] = useState(initialFilters)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/resources.json')
        const data = await response.json()
        setResources(data)
      } catch (error) {
        console.error('Unable to fetch resources:', error)
        setResources([])
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  useEffect(() => {
    if (!resources.length) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setResources((currentResources) =>
        currentResources.map((resource, index) => {
          const quantityChange = index % 2 === 0 ? 5 : -3
          const nextQuantity = Math.max(resource.quantity + quantityChange, 0)

          return {
            ...resource,
            quantity: nextQuantity,
            availability: nextQuantity > 25 ? 'Available' : 'Limited',
            updatedAt: new Date().toLocaleTimeString(),
          }
        }),
      )
    }, 12000)

    return () => window.clearInterval(intervalId)
  }, [resources])

  const handleFilterChange = (event) => {
    const { name, value } = event.target

    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }))
  }

  const handleAddResource = (newResource) => {
    setResources((currentResources) => [
      {
        id: Date.now(),
        isUserAdded: true,
        ...newResource,
        updatedAt: new Date().toLocaleTimeString(),
      },
      ...currentResources,
    ])
  }

  const handleRemoveResource = (resourceId) => {
    setResources((currentResources) =>
      currentResources.filter((resource) => resource.id !== resourceId),
    )
  }

  const filteredResources = resources.filter((resource) => {
    const typeMatches = filters.type === 'All' || resource.type === filters.type
    const availabilityMatches =
      filters.availability === 'All' || resource.availability === filters.availability
    const locationMatches =
      filters.location.trim() === '' ||
      resource.location.toLowerCase().includes(filters.location.toLowerCase())

    return typeMatches && availabilityMatches && locationMatches
  })

  const availableCount = resources.filter(
    (resource) => resource.availability === 'Available',
  ).length

  return (
    <div className={`app-shell theme-${theme}`}>
      <div className="dashboard">
        <section className="hero-panel">
          <div>
            <p className="eyebrow">Disaster Relief Resource Tracker</p>
            <h1>Find nearby support when every minute matters.</h1>
            <p>
              This real-time dashboard helps NGOs, volunteers, and affected families
              track food, medicine, shelter, water, and clothing support from one
              shared place.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>{resources.length}</strong>
              <span>Total resources shared</span>
            </div>
            <div className="stat-card">
              <strong>{availableCount}</strong>
              <span>Currently available</span>
            </div>
            <div className="stat-card">
              <strong>{filteredResources.length}</strong>
              <span>Matching current filters</span>
            </div>
            <div className="stat-card">
              <strong>12 sec</strong>
              <span>Simulated live refresh cycle</span>
            </div>
          </div>
        </section>

        <div className="theme-toggle-row">
          <button
            className="theme-toggle-button"
            type="button"
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === 'light' ? 'dark' : 'light',
              )
            }
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>

        <div className="dashboard-layout">
          <aside className="dashboard-panel">
            <h2 className="panel-title">Add New Resource</h2>
            <AddResourceForm onAddResource={handleAddResource} />
          </aside>

          <main className="dashboard-panel">
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              resourceTypes={resourceTypes}
              availabilityOptions={availabilityOptions}
            />

            <div className="resource-header">
              <div>
                <h2 className="panel-title">Available Relief Support</h2>
                <p>
                  Filter by type, location, or current availability to discover the
                  most relevant help quickly.
                </p>
              </div>
              <span className="secondary-chip">
                Live status updates every 12 seconds
              </span>
            </div>

            {loading ? (
              <div className="loading-state">Loading nearby resource information...</div>
            ) : filteredResources.length === 0 ? (
              <div className="empty-state">
                No resources match these filters right now. Try another location or
                add a new relief entry.
              </div>
            ) : (
              <div className="resource-grid">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    onRemoveResource={handleRemoveResource}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
