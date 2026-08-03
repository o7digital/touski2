import { useEffect, useMemo, useRef, useState } from "react";

const CLIENT_CODE = "touski";
const CHAT_ENDPOINT = "https://olivia-ai.o7digital.com/api/olivia/chat";
const CHANNEL_ENDPOINT = "https://olivia-ai.o7digital.com/api/widget/conversations";

const copy = {
  fr: {
    title: "Olivia AI",
    status: "Assistante TOUSKI · En ligne",
    teaser: "Besoin d’aide ?",
    welcome: "Bonjour, je suis Olivia AI. Je peux vous aider à choisir votre équipement TOUSKI pour la montagne, le trekking, la sécurité outdoor, le chalet ou la maison.",
    leadIntro: "Laissez vos coordonnées si vous voulez qu’un conseiller TOUSKI vous réponde.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    need: "Besoin",
    sendDetails: "Envoyer",
    detailsSent: "Merci. Vos coordonnées sont enregistrées. Posez-moi votre question.",
    placeholder: "Écrivez votre question...",
    error: "Je n’ai pas pu envoyer le message. Réessayez ou contactez TOUSKI directement.",
  },
  en: {
    title: "Olivia AI",
    status: "TOUSKI assistant · Online",
    teaser: "Need help?",
    welcome: "Hello, I’m Olivia AI. I can help you choose TOUSKI gear for mountain use, trekking, outdoor safety, cabins or home essentials.",
    leadIntro: "Leave your details if you want a TOUSKI advisor to follow up.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    need: "Need",
    sendDetails: "Send",
    detailsSent: "Thanks. Your details are saved. Ask me your question.",
    placeholder: "Write your question...",
    error: "I could not send the message. Please try again or contact TOUSKI directly.",
  },
  es: {
    title: "Olivia AI",
    status: "Asistente TOUSKI · En línea",
    teaser: "¿Necesitas ayuda?",
    welcome: "Hola, soy Olivia AI. Puedo ayudarte a elegir equipo TOUSKI para montaña, trekking, seguridad outdoor, chalet o casa.",
    leadIntro: "Deja tus datos si quieres que un asesor de TOUSKI te contacte.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    need: "Necesidad",
    sendDetails: "Enviar",
    detailsSent: "Gracias. Tus datos quedaron guardados. Hazme tu pregunta.",
    placeholder: "Escribe tu pregunta...",
    error: "No pude enviar el mensaje. Intenta de nuevo o contacta directamente a TOUSKI.",
  },
  de: {
    title: "Olivia AI",
    status: "TOUSKI Assistentin · Online",
    teaser: "Hilfe benötigt?",
    welcome: "Hallo, ich bin Olivia AI. Ich helfe Ihnen bei TOUSKI-Ausrüstung für Berge, Trekking, Outdoor-Sicherheit, Chalet oder Zuhause.",
    leadIntro: "Hinterlassen Sie Ihre Kontaktdaten, wenn ein TOUSKI-Berater Sie kontaktieren soll.",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail",
    phone: "Telefon",
    need: "Bedarf",
    sendDetails: "Senden",
    detailsSent: "Danke. Ihre Daten wurden gespeichert. Stellen Sie mir Ihre Frage.",
    placeholder: "Ihre Frage...",
    error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie TOUSKI direkt.",
  },
};

function detectLanguage() {
  const lang = document.documentElement.lang?.slice(0, 2).toLowerCase();
  if (["fr", "en", "es", "de"].includes(lang)) return lang;
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  if (path.startsWith("/es")) return "es";
  if (path.startsWith("/de")) return "de";
  return "fr";
}

function getVisitorId() {
  const key = `oliviaVisitorId:${CLIENT_CODE}`;
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.localStorage.setItem(key, id);
  return id;
}

export default function OliviaChat() {
  const language = useMemo(detectLanguage, []);
  const t = copy[language] || copy.fr;
  const visitorId = useMemo(getVisitorId, []);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [lead, setLead] = useState({ firstName: "", lastName: "", email: "", phone: "", need: "" });
  const [messages, setMessages] = useState([{ role: "assistant", content: t.welcome }]);
  const inputRef = useRef(null);

  const transcript = messages.map((message) => `${message.role}: ${message.content}`).join("\n");

  const storeChannelMessage = async (content, metadata = {}) => {
    const response = await fetch(CHANNEL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientCode: CLIENT_CODE,
        visitorId,
        content,
        visitorName: `${lead.firstName} ${lead.lastName}`.trim(),
        email: lead.email,
        phone: lead.phone,
        source: "website",
        language,
        metadata: {
          type: metadata.type || "message",
          pageUrl: window.location.href,
          pageTitle: document.title,
          site: "TOUSKI",
          ...metadata,
        },
      }),
    });
    if (!response.ok) throw new Error("Channel Manager delivery failed");
    return response.json();
  };

  const storeAssistantMessage = async (content, model) => {
    await fetch(CHANNEL_ENDPOINT, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientCode: CLIENT_CODE, visitorId, content, model }),
    }).catch(() => {});
  };

  const submitLead = async (event) => {
    event.preventDefault();
    if (loading || !lead.firstName || !lead.lastName || !lead.email || !lead.phone || !lead.need) return;
    setLoading(true);
    try {
      await storeChannelMessage(
        `Lead: ${lead.firstName} ${lead.lastName} · ${lead.email} · ${lead.phone} · ${t.need}: ${lead.need}`,
        { type: "lead", lead, transcript },
      );
      setLeadSent(true);
      setMessages((items) => [...items, { role: "assistant", content: t.detailsSent }]);
    } catch {
      setMessages((items) => [...items, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    const message = inputRef.current?.value?.trim();
    if (!message || loading || !leadSent) return;
    inputRef.current.value = "";
    setMessages((items) => [...items, { role: "user", content: message }]);
    setLoading(true);
    try {
      const stored = await storeChannelMessage(message, { lead, transcript });
      if (stored?.conversation?.status === "manual") return;
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          language,
          clientCode: CLIENT_CODE,
          clientId: CLIENT_CODE,
          siteCode: CLIENT_CODE,
          visitorId,
          pageUrl: window.location.href,
          metadata: {
            source: "Chat Olivia TOUSKI",
            pageTitle: document.title,
            lead,
            transcript,
          },
        }),
      });
      const data = await response.json();
      const assistantContent = data.reply || t.error;
      setMessages((items) => [...items, { role: "assistant", content: assistantContent }]);
      await storeAssistantMessage(assistantContent, data.model);
    } catch {
      setMessages((items) => [...items, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, leadSent]);

  return (
    <div className="fixed bottom-5 right-5 z-[2147483646] font-sans">
      {open && (
        <section className="mb-4 flex h-[min(660px,calc(100vh-110px))] w-[min(410px,calc(100vw-28px))] flex-col overflow-hidden rounded-[1.25rem] border border-orange-200/45 bg-[#101813] text-white shadow-2xl">
          <header className="flex items-start justify-between gap-4 border-b border-white/10 bg-[#172019] p-5">
            <div>
              <p className="text-xl font-bold text-orange-200">{t.title}</p>
              <p className="mt-1 text-sm text-white/60">{t.status}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-xl bg-white/10 px-3 py-2 font-bold">×</button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f6efe5] p-4 text-[#172019]">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "ml-auto bg-orange-200" : "bg-white"}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="max-w-[88%] rounded-2xl bg-white px-4 py-3 text-sm">…</div>}
          </div>
          {!leadSent && (
            <form onSubmit={submitLead} className="grid grid-cols-2 gap-2 border-t border-white/10 bg-[#172019] p-4">
              <p className="col-span-2 text-xs leading-5 text-white/65">{t.leadIntro}</p>
              <input required placeholder={t.firstName} value={lead.firstName} onChange={(event) => setLead({ ...lead, firstName: event.target.value })} className="rounded-xl border border-white/10 bg-white px-3 py-2 text-sm text-[#172019]" />
              <input required placeholder={t.lastName} value={lead.lastName} onChange={(event) => setLead({ ...lead, lastName: event.target.value })} className="rounded-xl border border-white/10 bg-white px-3 py-2 text-sm text-[#172019]" />
              <input required type="email" placeholder={t.email} value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} className="rounded-xl border border-white/10 bg-white px-3 py-2 text-sm text-[#172019]" />
              <input required type="tel" placeholder={t.phone} value={lead.phone} onChange={(event) => setLead({ ...lead, phone: event.target.value })} className="rounded-xl border border-white/10 bg-white px-3 py-2 text-sm text-[#172019]" />
              <textarea required rows={2} placeholder={t.need} value={lead.need} onChange={(event) => setLead({ ...lead, need: event.target.value })} className="col-span-2 min-h-[74px] resize-y rounded-xl border border-white/10 bg-white px-3 py-2 text-sm text-[#172019]" />
              <button disabled={loading} className="col-span-2 rounded-xl bg-orange-300 px-4 py-3 text-sm font-bold text-[#172019] disabled:opacity-60">{t.sendDetails}</button>
            </form>
          )}
          <div className="flex gap-2 border-t border-white/10 bg-[#172019] p-4">
            <input ref={inputRef} disabled={!leadSent || loading} onKeyDown={(event) => { if (event.key === "Enter") sendMessage(); }} placeholder={t.placeholder} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-[#172019] disabled:opacity-60" />
            <button disabled={!leadSent || loading} onClick={sendMessage} className="rounded-xl bg-orange-300 px-4 py-3 font-bold text-[#172019] disabled:opacity-60">›</button>
          </div>
        </section>
      )}
      <div className="flex items-center justify-end gap-3">
        {!open && <button type="button" onClick={() => setOpen(true)} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#172019] shadow-xl">{t.teaser}</button>}
        <button type="button" onClick={() => setOpen((value) => !value)} className="h-16 rounded-full bg-[#172019] px-5 font-bold text-orange-200 shadow-xl">
          {open ? "×" : "Olivia"}
        </button>
      </div>
    </div>
  );
}
