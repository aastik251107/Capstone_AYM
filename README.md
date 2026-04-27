# Capstone_AYM
Disaster Relief Resource Tracker
A real-time web dashboard that enables NGOs and volunteers to post available disaster relief resources (food, medicine, shelter, etc.) and helps affected individuals discover nearby support quickly.

Problem Statement
During disasters, information about available resources is often scattered or delayed. This project aims to centralize real-time resource availability and make it easily accessible to those in need.

Solution Overview
This application provides:
* A dashboard displaying available resources
* Filtering options to quickly find relevant help
* A form for volunteers/NGOs to add new resources
* Real-time or simulated data updates using APIs

Tech Stack
* Frontend: React.js
* State Management: useState, useEffect
* Styling: CSS / Tailwind
* API Handling: Fetch API (Async/Await)

Features
*  View nearby disaster relief resources
*  Add new resources (food, shelter, medicine, etc.)
* Filter resources by type or availability
* Empty state handling when no data is available
*  Real-time updates (simulated or API-based)

Component Structure
* ResourceCard – Displays individual resource details
* FilterBar – Filters resources based on type/location
* AddResourceForm – Form to add new resources
* Dashboard – Main container combining all components

State Management
* useState
    * Manage resource list
    * Handle form inputs
    * Control UI visibility
* useEffect
    * Fetch initial resource data
    * Sync updates with backend/mock API


Future Enhancements
* Integrate Google Maps for location-based discovery
* Real-time updates using WebSockets or Firebase
* Authentication for verified NGOs
* Analytics dashboard for resource tracking


Acknowledgements
* SIH (Smart India Hackathon)
* NDMA & Ministry of Home Affairs
