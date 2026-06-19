// ── WhatsApp deep-link generator ────────────────────────────────────
// All WhatsApp CTAs on the site go through this file.
// This means: one place to change the phone number, one place to
// update message templates, consistent professional tone everywhere.

const PHONE = "+91 9416055255"; // Replace with real number: 91 + 10-digit number

// Encode a message for a WhatsApp URL
function buildLink(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// ── Message templates ────────────────────────────────────────────────

// General inquiry from the hero / floating button
export function generalInquiry(): string {
  return buildLink(
    `Namaste! I found your website and would like to know more about your services.\n\nPlease let me know how you can help.`
  );
}

// Repair request — used by DiagnoseFlow component
export function repairRequest(device: string, problem: string): string {
  return buildLink(
    `Namaste! I need help with my ${device}.\n\nProblem: ${problem}\n\nPlease let me know the next steps and estimated cost.`
  );
}

// Product quote — used by WhatsAppQuoteBuilder on Products page
export function productQuote(category: string, budget: string): string {
  return buildLink(
    `Namaste! I am looking for a ${category} within a budget of ${budget}.\n\nCould you please share available options and current pricing?`
  );
}

// Business IT / AMC inquiry — used on Business IT page
export function businessInquiry(companyName: string, service: string): string {
  return buildLink(
    `Namaste! I represent ${companyName} and we are interested in your ${service} services.\n\nPlease contact us for a free site assessment.`
  );
}

// Service-specific inquiry — used on each service card
export function serviceInquiry(serviceName: string): string {
  return buildLink(
    `Namaste! I would like to enquire about your ${serviceName} service.\n\nPlease let me know the process, timeline, and pricing.`
  );
}