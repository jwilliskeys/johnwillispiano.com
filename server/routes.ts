import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingRequestSchema } from "@shared/schema";
import { sendEmail } from "./lib/gmail";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/booking", async (req, res) => {
    try {
      const validatedData = insertBookingRequestSchema.parse(req.body);
      
      const bookingRequest = await storage.createBookingRequest(validatedData);
      
      const servicesList = [
        validatedData.needsTuning ? "Tuning" : null,
        validatedData.notTunedInYear ? "Full Service (not tuned in 1+ year)" : null,
      ].filter(Boolean).join(", ") || "General inquiry";
      
      const emailHtml = `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Address:</strong> ${validatedData.address}</p>
        <p><strong>Piano Make:</strong> ${validatedData.pianoMake}</p>
        <p><strong>Piano Type:</strong> ${validatedData.pianoType}</p>
        <p><strong>Services Needed:</strong> ${servicesList}</p>
        ${validatedData.notes ? `<p><strong>Additional Notes:</strong> ${validatedData.notes}</p>` : ''}
      `;
      
      await sendEmail(
        'j.willis.keys@gmail.com',
        `New Booking Request from ${validatedData.name}`,
        emailHtml
      );
      
      console.log('Email sent successfully to j.willis.keys@gmail.com');
      
      res.json({ success: true, id: bookingRequest.id });
    } catch (error) {
      console.error('Booking request error:', error);
      res.status(400).json({ error: 'Failed to process booking request' });
    }
  });

  return httpServer;
}
