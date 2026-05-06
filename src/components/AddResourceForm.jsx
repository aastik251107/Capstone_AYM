import { useState } from 'react'

const initialFormData = {
  title: '',
  type: 'Food',
  organization: '',
  location: '',
  quantity: '',
  availability: 'Available',
  contact: '',
  notes: '',
}

function AddResourceForm({ onAddResource }) {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onAddResource({
      ...formData,
      quantity: Number(formData.quantity),
    })

    setFormData(initialFormData)
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label>
        Resource Title
        <input
          type="text"
          name="title"
          placeholder="Emergency food kits"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Resource Type
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
          <option value="Shelter">Shelter</option>
          <option value="Water">Water</option>
          <option value="Clothing">Clothing</option>
        </select>
      </label>

      <label>
        NGO or Volunteer Name
        <input
          type="text"
          name="organization"
          placeholder="ReliefCare Network"
          value={formData.organization}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Location
        <input
          type="text"
          name="location"
          placeholder="Sector 12 Community Hall"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Quantity Available
        <input
          type="number"
          name="quantity"
          min="1"
          placeholder="50"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Availability
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="Limited">Limited</option>
        </select>
      </label>

      <label>
        Contact Details
        <input
          type="text"
          name="contact"
          placeholder="+91 98765 43210"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Notes
        <textarea
          name="notes"
          placeholder="Distribution timings, eligibility, or pickup instructions"
          value={formData.notes}
          onChange={handleChange}
          required
        />
      </label>

      <button className="primary-button" type="submit">
        Post Resource
      </button>
    </form>
  )
}

export default AddResourceForm
