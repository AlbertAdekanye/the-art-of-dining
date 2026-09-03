import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const whatsappNumber = "2349054019407";

  const message = encodeURIComponent(
    "Hello Albert, I saw The Art of Dining restaurant website and I am interested in getting a website for my business.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact CodeWithKanye on WhatsApp"
      title="Build a website like this"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.35)] transition hover:scale-110 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <MessageCircle size={27} fill="currentColor" />
    </a>
  );
}

export default WhatsAppButton;
