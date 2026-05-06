<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
>>>>>>> origin/main
