import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      toast.error("Access key-ul Web3Forms nu este configurat.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Mesaj nou de la ${form.name} - Got Concept`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Mesaj trimis! Te vom contacta în curând.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Eroare la trimitere. Încearcă din nou.");
      }
    } catch {
      toast.error("Eroare de conexiune. Încearcă din nou.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            
            <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Hai să Vorbim
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pregătit să creăm ceva{" "}
              <span className="text-gradient">extraordinar</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Spune-ne despre brandul tău, obiectivele tale și termenele limită. 
              Vom crea un plan de producție personalizat.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>alexandru.craciun@gotconcept.ro</p>
              <p>+40 728 218 659</p>
              <p>
</p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5">
            
            <input
              type="text"
              placeholder="Numele tău"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-secondary border border-border rounded-sm px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            
            <input
              type="email"
              placeholder="Adresa de email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-secondary border border-border rounded-sm px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            
            <textarea
              placeholder="Spune-ne despre proiectul tău"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-secondary border border-border rounded-sm px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-display font-semibold text-sm hover:opacity-90 transition-opacity glow-shadow w-full justify-center disabled:opacity-50">
              
              {isLoading ? <><Loader2 size={16} className="animate-spin" /> Se trimite...</> : <>Trimite Mesajul <ArrowRight size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;