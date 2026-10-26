export function testApi() {
    return "API module is working!";

}

const API_BASE_URL = "http://localhost:3001";

export async function getServices() {
    const response = await fetch( `${API_BASE_URL}/services`);

    if (!response.ok) {
        throw new Error("Unable to load services.please try again.");

    }
    return response.json();

}
 export async function createService(service) {
    const response = await fetch( `${API_BASE_URL}/services`, {
        method: "POST",
        headers: {
            "content-type": "application/json",

        },
        body: JSON.stringify(service),

    });

    if (!response.ok) {
        throw new Error("Unable to create service. please try again.");

    }
    return response.json();

 }

export async function updateService(id, service) {
  const response = await fetch(`${API_BASE_URL}/services/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });

  if (!response.ok) {
    throw new Error("Unable to update service. Please try again.");
  }

  return response.json();
}
export async function deleteService(id) {
  const response = await fetch(`${API_BASE_URL}/services/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Unable to delete service. Please try again.");
  }

  return true;
}

export async function createRequest(requestData) {
  const response = await fetch("http://localhost:3001/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  });

  if (!response.ok) {
    throw new Error("Failed to submit service request");
  }

  return await response.json();
}





























































