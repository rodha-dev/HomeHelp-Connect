import { describe, it, expect, vi, afterEach } from "vitest";

import {
  testApi,
  getServices,
  createService,
  updateService,
  deleteService,
  createRequest,
} from "./src/api.js";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("HomeHelp Connect API", () => {
  it("should confirm that the API module is working", () => {
    expect(testApi()).toBe("API module is working!");
  });

  it("should load services successfully", async () => {
    const services = [{ id: 1, name: "Cleaning" }];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue(services),
      })
    );

    const result = await getServices();

    expect(result).toEqual(services);
  });

  it("should handle errors when loading services", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(getServices()).rejects.toThrow(
      "Unable to load services.please try again."
    );
  });

  it("should create a service successfully", async () => {
    const service = { name: "Cooking", price: 1500 };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({ id: 2, ...service }),
      })
    );

    const result = await createService(service);

    expect(result).toEqual({ id: 2, ...service });
    expect(fetch).toHaveBeenCalledWith(
      "https://homehelp-connect-irl5.onrender.com/services",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("should handle errors when creating a service", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(
      createService({ name: "Cooking" })
    ).rejects.toThrow("Unable to create service. please try again.");
  });

  it("should update a service successfully", async () => {
    const updatedService = { name: "Deep Cleaning" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({ id: 1, ...updatedService }),
      })
    );

    const result = await updateService(1, updatedService);

    expect(result).toEqual({ id: 1, ...updatedService });
    expect(fetch).toHaveBeenCalledWith(
      "https://homehelp-connect-irl5.onrender.com/services/1",
      expect.objectContaining({ method: "PATCH" })
    );
  });

  it("should handle errors when updating a service", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(
      updateService(1, { name: "Cleaning" })
    ).rejects.toThrow("Unable to update service. Please try again.");
  });

  it("should delete a service successfully", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true })
    );

    const result = await deleteService(1);

    expect(result).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      "https://homehelp-connect-irl5.onrender.com/services/1",
      { method: "DELETE" }
    );
  });

  it("should handle errors when deleting a service", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(deleteService(1)).rejects.toThrow(
      "Unable to delete service. Please try again."
    );
  });

  it("should submit a service request successfully", async () => {
    const request = { name: "Amina", service: "Cleaning" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({ id: 3, ...request }),
      })
    );

    const result = await createRequest(request);

    expect(result).toEqual({ id: 3, ...request });
    expect(fetch).toHaveBeenCalledWith(
      "https://homehelp-connect-irl5.onrender.com",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("should handle errors when submitting a service request", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(
      createRequest({ name: "Amina" })
    ).rejects.toThrow("Failed to submit service request");
  });
});