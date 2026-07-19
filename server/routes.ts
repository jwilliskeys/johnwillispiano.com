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


  app.post("/api/review", async (req, res) => {
    try {
      const { name, town, rating, review, email } = req.body ?? {};
      if (!name || !review) {
        return res.status(400).json({ error: "Name and review are required" });
      }
      const stars = Math.max(1, Math.min(5, parseInt(String(rating), 10) || 5));
      const esc = (s: unknown) =>
        String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const emailHtml = `
        <h2>New Website Review (pending your approval)</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Town:</strong> ${esc(town) || "—"}</p>
        <p><strong>Rating:</strong> ${"★".repeat(stars)} (${stars}/5)</p>
        <p><strong>Review:</strong></p>
        <blockquote>${esc(review)}</blockquote>
        <p><strong>Reviewer email:</strong> ${esc(email) || "—"}</p>
        <hr />
        <p>To publish: add it to <code>client/src/lib/published-reviews.ts</code> and redeploy.</p>
      `;
      await sendEmail(
        "j.willis.keys@gmail.com",
        `New review from ${String(name)} (${stars}/5)`,
        emailHtml
      );
      res.json({ success: true });
    } catch (error) {
      console.error("Review submission error:", error);
      res.status(500).json({ error: "Failed to submit review" });
    }
  });

  return httpServer;
}
