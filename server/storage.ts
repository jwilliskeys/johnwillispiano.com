import { db } from "./db";
import type { InsertBookingRequest, BookingRequest } from "@shared/schema";
import { bookingRequests } from "@shared/schema";

export interface IStorage {
  createBookingRequest(data: InsertBookingRequest): Promise<BookingRequest>;
  getAllBookingRequests(): Promise<BookingRequest[]>;
}

export class Storage implements IStorage {
  async createBookingRequest(data: InsertBookingRequest): Promise<BookingRequest> {
    const [request] = await db
      .insert(bookingRequests)
      .values(data)
      .returning();
    return request;
  }

  async getAllBookingRequests(): Promise<BookingRequest[]> {
    return await db.select().from(bookingRequests).orderBy(bookingRequests.createdAt);
  }
}

export const storage = new Storage();
