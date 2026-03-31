const WHATSAPP_URL = "https://wa.me/5534992693333";

const WhatsAppFloatButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-brown-deeper text-cream shadow-2xl ring-1 ring-border transition-transform hover:scale-105 hover:bg-brown-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        className="fill-current"
      >
        <path d="M19.11 17.2c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.68-1.56-1.96-.17-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.02 3.09 4.9 4.33.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.12.55-.08 1.64-.67 1.87-1.32.23-.64.23-1.2.16-1.32-.06-.12-.25-.19-.53-.33z" />
        <path d="M16 3C8.82 3 3 8.64 3 15.6c0 2.76.93 5.31 2.5 7.36L4 29l6.22-1.6c1.96 1.07 4.21 1.68 6.78 1.68 7.18 0 13-5.64 13-12.6S23.18 3 16 3zm0 23.1c-2.4 0-4.47-.69-6.12-1.86l-.44-.31-3.7.95.99-3.48-.32-.54A10.35 10.35 0 0 1 5.1 15.6C5.1 9.86 10 5.2 16 5.2s10.9 4.66 10.9 10.4S22 26.1 16 26.1z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatButton;
