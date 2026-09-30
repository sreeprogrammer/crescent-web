import { useState } from "react";
import { X } from "lucide-react";

export function PromotionalModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 p-4 sm:p-6"
      role="presentation"
    >
      <div className="flex min-h-full items-center justify-center">
        <section
          aria-label="Promotional offers"
          aria-modal="true"
          className="promotional-modal-enter relative w-full max-w-5xl rounded-2xl bg-white p-3 shadow-2xl sm:p-5"
          role="dialog"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close promotional modal"
            className="absolute right-1 top-1 z-10 inline-flex size-12 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:right-2 sm:top-2"
          >
            <X aria-hidden="true" className="size-7" strokeWidth={2.5} />
          </button>

          <div className="grid max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto sm:max-h-[calc(100vh-3rem)] sm:grid-cols-2 sm:gap-5">
            <img
              src="/promotional-poster-left.svg"
              alt="Promotional offer poster"
              className="h-auto max-h-[70vh] min-h-0 w-full object-contain"
            />
            <img
              src="/promotional-poster-right.svg"
              alt="Promotional offer poster"
              className="h-auto max-h-[70vh] min-h-0 w-full object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
