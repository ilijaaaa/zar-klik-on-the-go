import { createServerFn } from "@tanstack/react-start";

export const CONTACT_EMAIL = "zarklik.info@gmail.com";

export type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  profile?: string;
  message?: string;
  language: string;
};

function validate(data: unknown): LeadInput {
  const d = data as Record<string, unknown>;
  const name = typeof d?.name === "string" ? d.name.trim() : "";
  const email = typeof d?.email === "string" ? d.email.trim() : "";
  if (name.length < 2) throw new Error("INVALID_NAME");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("INVALID_EMAIL");
  return {
    name,
    email,
    phone: typeof d?.phone === "string" ? d.phone.trim() : "",
    profile: typeof d?.profile === "string" ? d.profile : "",
    message: typeof d?.message === "string" ? d.message.trim() : "",
    language: d?.language === "en" ? "en" : "sr",
  };
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }): Promise<{ status: "sent" | "unconfigured" }> => {
    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["LEAD_FROM_EMAIL"];

    if (!apiKey || !from) {
      console.info("[lead] captured without email delivery", {
        email: data.email,
        language: data.language,
      });
      return { status: "unconfigured" };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: data.email,
        subject: `Žar Klik — nova prijava interesovanja (${data.language.toUpperCase()})`,
        text: [
          `Ime: ${data.name}`,
          `E-mail: ${data.email}`,
          `Telefon: ${data.phone || "-"}`,
          `Profil: ${data.profile || "-"}`,
          `Jezik sajta: ${data.language}`,
          "",
          `Poruka: ${data.message || "-"}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      throw new Error(`EMAIL_FAILED_${res.status}`);
    }

    return { status: "sent" };
  });
