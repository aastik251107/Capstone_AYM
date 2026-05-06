function ResourceCard({ resource, onRemoveResource }) {
  const badgeClassName =
    resource.availability === 'Available'
      ? 'availability-badge availability-available'
      : 'availability-badge availability-limited'

  return (
    <article className="resource-card">
      <h3>{resource.title}</h3>
      <p className="resource-meta">
        <span>Type: {resource.type}</span>
        <span>Provider: {resource.organization}</span>
        <span>Location: {resource.location}</span>
        <span>Quantity: {resource.quantity}</span>
        <span>Contact: {resource.contact}</span>
      </p>
      <p className="resource-notes">{resource.notes}</p>
      <div className="resource-footer">
        <span className={badgeClassName}>{resource.availability}</span>
        <div className="resource-actions">
          <span className="last-updated">Updated at {resource.updatedAt}</span>
          {resource.isUserAdded ? (
            <button
              className="remove-button"
              type="button"
              onClick={() => onRemoveResource(resource.id)}
            >
              Remove Card
            </button>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ResourceCard
