# College Navigator Bot

nanba enaga paru na edha website new aa chat bot aa implement panna poran so adhu edha matri kudu seriya
React + TypeScript Advanced College Chatbot Prompt (No API / No Backend)

Build a production-quality AI-style college chatbot web application using React 18+, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

The application must be completely frontend-only.

Tech stack

React 18+

TypeScript

Vite

Tailwind CSS

shadcn/ui

Lucide React icons

Framer Motion

jsPDF + html2canvas for PDF export

Do NOT use:

Node backend

Express

Firebase

Supabase

MongoDB

SQL

APIs

OpenAI

Gemini

Anthropic

Translation APIs

Any external AI service

Everything must run locally in the browser.

Application goal

Create a premium AI-style college admission chatbot with a modern interface similar to ChatGPT.

UI

Display a floating chatbot button.

When opened, show a chatbot card.

At the top display:

Can I help you?

Include:

AI avatar

Typing indicator

Smooth animations

Glassmorphism

Gradient accents

Responsive design

Mobile-first

Desktop optimized

Project structure

src/
components/
ChatWindow.tsx
MessageBubble.tsx
ChatInput.tsx
LanguageSwitcher.tsx
ThemeToggle.tsx
EnquiryForm.tsx
PdfDownloadButton.tsx
TypingIndicator.tsx
FloatingChatButton.tsx

data/
faq.ts
translations.ts

hooks/
useChat.ts
useTheme.ts

utils/
fuzzyMatch.ts
pdfExport.ts

types/
chat.ts

App.tsx

Knowledge base

Store all chatbot knowledge locally in:

src/data/faq.ts

Create approximately 50 predefined FAQ entries.

Allowed topics only

PG Courses

MCA

MBA

MA Islamic Studies

UG Courses

BA English

BA Islamic Studies

BA Public Policy

Degree Program

Mobile Application Development

College information

College overview

Admission process

Eligibility

Hostel information

Fees details

Scholarship information

Facilities

Campus information

Contact information

Academic calendar

Library

Transportation

Hostel rules

Fee payment methods

Course duration

Required documents

Application procedure

Office timings

Student support services

Only answer these topics.

Strict restriction

If the user types anything unrelated, respond with:

“Sorry, I can only assist with the college information available in my knowledge base.”

Never generate general knowledge answers.

Never hallucinate.

Fuzzy keyword matching

Implement a local fuzzy matching utility.

Examples:

mba fees

fee for mba

mba amount

how much is mba

must all return the same predefined answer.

Use token similarity / keyword matching without external libraries if possible.

Question limit

Maintain question count in React state.

Allow only 5 user questions.

After the fifth question:

Disable chat input

Show enquiry form

Prevent further messages

Enquiry form

Fields:

Full Name

Mobile Number

Email

Course Interested In

Message

Validation:

All required

Email format

Mobile number validation

Only after successful submission:

Hide enquiry form

Re-enable chat

Reset question counter

Language support

Support:

English

Tamil

Urdu

Use a language switcher.

Store translations locally in:

src/data/translations.ts

Do NOT use any translation API.

Every predefined FAQ must have translations in all three languages.

Switching language should immediately update future chatbot responses.

PDF export

Add a Download Conversation PDF button.

Use:

jsPDF

html2canvas

Requirements:

Export entire conversation

Include timestamps

Include language

Professional formatting

AI/User labels

Works entirely client-side

Theme support

Implement dark/light mode.

Use Tailwind dark mode.

Persist theme using localStorage.

Animate theme transitions.

Session behavior

When the chatbot is closed:

Clear all messages

Reset question count

Reset enquiry form

Reset typing state

Reopening should start a completely new conversation.

Only theme preference should persist.

State management

Use React hooks.

Suggested state:

interface ChatState {
messages: Message[];
questionCount: number;
isTyping: boolean;
language: 'en' | 'ta' | 'ur';
theme: 'light' | 'dark';
showEnquiryForm: boolean;
isChatOpen: boolean;
}

Types

interface Message {
id: string;
sender: 'user' | 'bot';
text: string;
timestamp: string;
language: 'en' | 'ta' | 'ur';
}

UX requirements

Enter to send

Shift+Enter for newline

Auto-scroll

Typing animation

Disabled state after limit

Smooth transitions

Accessible buttons

Keyboard friendly

Responsive across devices

Performance

Lazy load chatbot

Memoize FAQ lookup

Use React.memo where useful

Avoid unnecessary re-renders

Deliverables

Generate a complete React + TypeScript Vite project with all components, hooks, utilities, data files, and styling implemented.

The final application must feel like a modern AI chatbot while remaining 100% offline, frontend-only, React + TypeScript based, and strictly limited to predefined college information only.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35870356-18a2-417e-89e4-ba032eb145a5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
