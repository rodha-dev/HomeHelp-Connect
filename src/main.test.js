import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, waitFor } from "@testing-library/dom";

vi.mock("../src/api.js", () => ({
  getServices: vi.fn(),
  createRequest: vi.fn(),
}));

import { getServices, createRequest } from "../src/api.js";

describe("HomeHelp Connect main.js", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
    document.body.innerHTML = "";
  });

  async function loadMain() {
    await import("../src/main.js");
  }

  it("should log when the application starts", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    getServices.mockResolvedValue([]);

    await loadMain();

    expect(logSpy).toHaveBeenCalledWith(
      "HomeHelp Connect is starting..."
    );
  });

  it("should log services when loading succeeds", async () => {
    const services = [{ id: 1, name: "Cleaning" }];
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    getServices.mockResolvedValue(services);

    await loadMain();

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(
        "Services loaded:",
        services
      );
    });
  });

  it("should log an error when services fail to load", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    getServices.mockRejectedValue(new Error("Server unavailable"));

    await loadMain();

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith(
        "Error loading services:",
        "Server unavailable"
      );
    });
  });

  it("should submit the booking form successfully", async () => {
    document.body.innerHTML = `
      <form id="service-request-form">
        <input name="name" value="Amina" />
        <input name="service" value="Cleaning" />
        <button type="submit">Submit</button>
      </form>
    `;

    getServices.mockResolvedValue([]);
    createRequest.mockResolvedValue({ id: 1 });

    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    await loadMain();

    const form = document.querySelector("#service-request-form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(createRequest).toHaveBeenCalledWith({
        name: "Amina",
        service: "Cleaning",
      });
      expect(alertSpy).toHaveBeenCalledWith(
        "Your service request was submitted successfully!"
      );
    });

    expect(form.querySelector('[name="name"]').value).toBe("");
    expect(form.querySelector('[name="service"]').value).toBe("");
  });

  it("should show an error when booking submission fails", async () => {
    document.body.innerHTML = `
      <form id="service-request-form">
        <input name="name" value="Amina" />
        <button type="submit">Submit</button>
      </form>
    `;

    getServices.mockResolvedValue([]);
    createRequest.mockRejectedValue(new Error("Request failed"));

    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    await loadMain();

    const form = document.querySelector("#service-request-form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        "Unable to submit your request. Please try again."
      );
    });

    expect(errorSpy).toHaveBeenCalledWith(
      "Error submitting request:",
      expect.any(Error)
    );

    expect(form.querySelector('[name="name"]').value).toBe("Amina");
  });

  it("should not fail when the booking form is absent", async () => {
    document.body.innerHTML = "";
    getServices.mockResolvedValue([]);

    await expect(loadMain()).resolves.toBeUndefined();
  });
});