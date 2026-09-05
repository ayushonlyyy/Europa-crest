import React from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97]";

const variants = {
  primary: "bg-crest-red text-white hover:bg-crest-redlight",
  outline: "border border-crest-border text-white hover:border-crest-redlight hover:text-crest-redlight",
  ghost: "text-crest-gray hover:text-white",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
