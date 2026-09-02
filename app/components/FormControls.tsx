"use client"
import type { ChangeEvent, ReactNode } from 'react';

/**
 * Presentation shared by the contact form and the review form.
 *
 * These two forms were styled independently and had drifted: the review form's
 * inputs carried no colour classes at all and rendered as default white boxes,
 * while the contact form's were dark and translucent. Both keep their own
 * submit logic and validation — only the look lives here, so they can't drift
 * again.
 */

type FieldProps = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  maxLength?: number;
  /** Render a textarea with this many rows instead of an input. */
  rows?: number;
  label?: string;
};

export const Field = ({
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  maxLength,
  rows,
  label,
}: FieldProps) => {
  const shared = {
    name,
    value,
    onChange,
    placeholder,
    required,
    maxLength,
    'aria-label': label ?? placeholder ?? name,
    className: 'glass-input text-xs lg:text-sm',
  };

  return rows ? <textarea {...shared} rows={rows} /> : <input {...shared} type={type} />;
};

type SubmitButtonProps = {
  pending?: boolean;
  pendingLabel?: string;
  fullWidth?: boolean;
  children: ReactNode;
};

export const SubmitButton = ({
  pending = false,
  pendingLabel = 'Sending…',
  fullWidth = true,
  children,
}: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={pending}
    className={`glass-button text-xs lg:text-sm ${fullWidth ? 'w-full' : ''}`}
  >
    {pending ? pendingLabel : children}
  </button>
);

type Tone = 'error' | 'success' | 'info';

const TONE_CLASS: Record<Tone, string> = {
  // explicit tone beats sniffing the copy for the word "Error"
  error: 'bg-red-950/[0.55] border-red-400/40 text-red-100',
  success: 'bg-emerald-950/[0.55] border-emerald-400/40 text-emerald-100',
  info: 'bg-slate-900/[0.6] border-white/20 text-white',
};

export const StatusMessage = ({ tone, children }: { tone: Tone; children: ReactNode }) => (
  <div
    role={tone === 'error' ? 'alert' : 'status'}
    className={`w-full text-start text-xs lg:text-sm p-3 rounded-xl border shadow-md ${TONE_CLASS[tone]}`}
  >
    {children}
  </div>
);
