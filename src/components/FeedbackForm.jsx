import React, { useState } from "react";
import { FEEDBACK_API_URL } from "../config/links.js";

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(STATUS.IDLE);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus(STATUS.SENDING);
    try {
      const res = await fetch(FEEDBACK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus(STATUS.SUCCESS);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus(STATUS.ERROR);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-crest-gray">
            Name <span className="text-crest-fog">(optional)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Anonymous"
            className="w-full rounded-lg border border-crest-border bg-crest-panel px-4 py-3 text-sm text-white placeholder:text-crest-fog focus:border-crest-redlight"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-crest-gray">
            Email <span className="text-crest-fog">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-crest-border bg-crest-panel px-4 py-3 text-sm text-white placeholder:text-crest-fog focus:border-crest-redlight"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-crest-gray">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me what's working, what's not, or what you'd like to see."
          className="w-full resize-none rounded-lg border border-crest-border bg-crest-panel px-4 py-3 text-sm text-white placeholder:text-crest-fog focus:border-crest-redlight"
        />
      </div>

      <button
        type="submit"
        disabled={status === STATUS.SENDING}
        className="inline-flex items-center justify-center rounded-full bg-crest-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crest-redlight disabled:opacity-60"
      >
        {status === STATUS.SENDING ? "Sending…" : "Send feedback"}
      </button>

      {status === STATUS.SUCCESS && (
        <p className="text-sm text-crest-redlight">Thanks, your feedback was sent.</p>
      )}
      {status === STATUS.ERROR && (
        <p className="text-sm text-crest-gray">
          Something went wrong sending that. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
