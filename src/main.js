import { getServices, createRequest } from "./api.js";

console.log("HomeHelp Connect is starting...");

getServices()
  .then((services) => {
    console.log("Services loaded:", services);
  })
  .catch((error) => {
    console.error("Error loading services:", error.message);
  });

const requestForm = document.querySelector("#service-request-form");

if (requestForm) {
  requestForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(requestForm);
    const requestData = Object.fromEntries(formData.entries());

    try {
      await createRequest(requestData);
      alert("Your service request was submitted successfully!");
      requestForm.reset();
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Unable to submit your request. Please try again.");
    }
  });
}
































