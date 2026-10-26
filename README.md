HomeHelp Connect

Project Overview

HomeHelp Connect is a web application designed to help users discover and access reliable home-help services. The platform connects users with home-help workers who provide services such as cleaning, cooking, and childcare.

The application aims to make it easier for users to explore available services, learn about workers, compare service prices with their monthly budgets, and submit booking requests through a simple and user-friendly interface.

Project Objectives

The main objectives of HomeHelp Connect are to:

1. Develop a user-friendly web application that helps users find home-help services conveniently.
2. Provide information about available services, including cleaning, cooking, and childcare.
3. Help users view worker profiles and access information about their training or verification where available.
4. Enable users to compare service prices with their monthly budgets to support informed decisions.
5. Allow users to submit and manage booking requests.
6. Integrate a local API to retrieve, create, update, and delete application data.
7. Implement appropriate loading indicators, error messages, and successful response feedback when communicating with the API.
8. Create a responsive and consistent interface that is easy to navigate.
9. Apply Git and GitHub collaboration practices, including feature branches, commits, pull requests, and project board management.
10. Deploy the application and document its setup, features, and API endpoints.

Minimum Viable Product (MVP)

The initial version of HomeHelp Connect includes the following core features:

* Home Page: Introduces the platform and helps users navigate to other pages.
* Services Page: Displays available home-help services.
* Worker Information: Provides information about home-help workers, including profiles and verification or training details when available.
* Budget Comparison: Helps users compare service prices with their monthly budgets.
* Booking Requests: Allows users to submit requests for home-help services.
* About Us Page: Explains the purpose and mission of HomeHelp Connect.
* Contact Us Page: Provides users with a way to contact the platform.
* API Integration: Connects the frontend to a local API for retrieving and managing data.
* User Feedback: Displays loading states, error messages, and relevant success messages.

Technologies Used

* HTML5 — application structure and content.
* CSS3 — styling, layout, and responsive design.
* JavaScript (ES6+) — application logic and interactivity.
* JSON Server — local REST API and data storage during development.
* Fetch API — communication between the frontend and backend data source.
* Git — version control.
* GitHub — source code hosting, collaboration, and project management.
* Visual Studio Code — development environment.
* Figma — desktop wireframe and interface planning.
* Live Server — local frontend development and preview.

API Endpoints

The application uses JSON Server to provide a local REST API. The endpoints below assume the database contains services and requests resources.

Method	Endpoint	Purpose
GET	/services	Retrieve all available services.
GET	/services/:id	Retrieve a specific service.
POST	/services	Create a new service record.
PUT	/services/:id	Replace an existing service record.
PATCH	/services/:id	Update selected fields of a service record.
DELETE	/services/:id	Delete a service record.
GET	/requests	Retrieve booking requests.
GET	/requests/:id	Retrieve a specific booking request.
POST	/requests	Submit a new booking request.
PUT	/requests/:id	Replace an existing booking request.
PATCH	/requests/:id	Update a booking request, such as its status.
DELETE	/requests/:id	Delete a booking request.

Note: These endpoints describe the intended API structure. Confirm that each endpoint and operation is implemented in the project before presenting it as completed functionality.

Getting Started

Prerequisites

Install the following tools:

* Node.js and npm
* Visual Studio Code
* Git




Error Handling

HomeHelp Connect is designed to provide appropriate feedback when interacting with the API.

* Loading messages or indicators while data is being retrieved.
* Error messages when requests fail or the API is unavailable.
* Success feedback when an operation completes successfully.
* Empty-state messages when no services or booking requests are available.

Project Pages

* Home: Introduction to HomeHelp Connect and navigation to the main features.
* Services: Displays available home-help services.
* About Us: Explains the platform’s purpose.
* Contact Us: Provides contact information or a contact form.

User Stories

1. As a user, I want to browse available home-help services so that I can find assistance that meets my needs.
2. As a user, I want to view worker information so that I can make a more informed choice.
3. As a user, I want to compare service prices with my monthly budget so that I can choose an affordable service.
4. As a user, I want to submit a booking request so that I can request the service I need.
5. As a user, I want to receive feedback when an action succeeds or fails so that I understand what is happening.

Development Workflow

The project uses Git and GitHub for version control and project tracking.

* Feature branches are used to organize development work.
* Meaningful commits document project progress.
* Pull requests are used to review and integrate changes.
* A GitHub Project Board tracks tasks and project progress.
* A Figma desktop wireframe guides the interface design.

Deployment

The frontend will be deployed using GitHub Pages or another suitable hosting platform.

If the application requires a separate API, the API must also be deployed to an accessible hosting service. A local address such as localhost:3001 is only accessible on the developer’s machine and will not work for public users.





License

This project is intended to be released under the MIT License. Add a LICENSE file containing the MIT License text to the repository.


github Live App : https://rodha-dev.github.io/HomeHelp-Connect/

github repo : https://github.com/rodha-dev/HomeHelp-Connect
API LINK"https://homehelp-connect-irl5.onrender.com"

figma link : (https://www.figma.com/proto/QQMaIKR4xsyaOTUtvAVEXN/Untitled?node-id=2011-14909&t=u4boiEB9FTvKcP5n-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)





Author

Developed as a web development coursework project.



API link "https://homehelp-connect-irl5.onrender.com"