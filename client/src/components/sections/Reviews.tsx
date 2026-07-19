import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PUBLISHED_REVIEWS } from "@/lib/published-reviews";

export default function Reviews() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", town: "", rating: "5", review: "", email: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      toast({ title: "Thank you", description: "Your review has been sent for approval." });
      setOpen(false);
      setForm({ name: "", town: "", rating: "5", review: "", email: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again, or email me directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="reviews" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-4">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-serif">What clients say.</h2>
        </motion.div>

        {PUBLISHED_REVIEWS.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {PUBLISHED_REVIEWS.map((r, i) => (
              <div key={i} className="bg-background border border-border p-8 flex flex-col">
                <div className="text-primary tracking-[4px] mb-4">{"★".repeat(r.stars)}</div>
                <p className="font-serif text-xl leading-snug mb-6 flex-1">"{r.quote}"</p>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">— {r.by}</span>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <p className="font-serif text-2xl mb-2">Worked with me?</p>
          <p className="text-muted-foreground font-light max-w-md mx-auto mb-8">
            I'd be grateful for a few words about your experience — approved reviews appear right here.
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-none uppercase tracking-wide" data-testid="button-leave-review">
                Leave a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[440px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Leave a review</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground -mt-2">Reviews are read and approved before appearing on the site.</p>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5">Your name</label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" data-testid="input-review-name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5">Town</label>
                  <Input value={form.town} onChange={(e) => setForm({ ...form, town: e.target.value })} placeholder="Cambridge, MA" data-testid="input-review-town" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5">Rating</label>
                  <select
                    className="w-full border border-input bg-background px-3 py-2 text-sm"
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: e.target.value })}
                    data-testid="select-review-rating"
                  >
                    <option value="5">★★★★★ — Excellent</option>
                    <option value="4">★★★★ — Great</option>
                    <option value="3">★★★ — Good</option>
                    <option value="2">★★ — Fair</option>
                    <option value="1">★ — Poor</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5">Your review</label>
                  <Textarea required value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} placeholder="How was your experience?" data-testid="input-review-text" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5">Email (optional, not published)</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@email.com" data-testid="input-review-email" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full rounded-none uppercase tracking-wide" data-testid="button-submit-review">
                  {submitting ? "Sending…" : "Submit review"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
