import { Suspense, lazy, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingChatButton from "./FloatingChatButton";
import { ui } from "../chat-data/translations";

// Lazy loaded: the chatbot bundle only downloads when the user opens it.
const ChatWindow = lazy(() => import("./ChatWindow"));

export function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);

  const toggle = () => {
    if (isChatOpen) {
      // Closing clears the session; reopening remounts a fresh conversation.
      setSessionKey((key) => key + 1);
    }

    setIsChatOpen((open) => !open);
  };

  return (
    <>
      <AnimatePresence>
        {isChatOpen && (
          <Suspense fallback={null}>
            <ChatWindow key={sessionKey} />
          </Suspense>
        )}
      </AnimatePresence>

      <FloatingChatButton
        open={isChatOpen}
        onToggle={toggle}
        label={ui.en.openChat}
      />
    </>
  );
}

export default ChatWidget;