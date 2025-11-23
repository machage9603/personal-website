import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Email validation regex based on HTML5 specification
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Characters that could be used for email header injection
const SUSPICIOUS_CHARS = /[\r\n\0]/;

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  // Check for null, undefined, or non-string values
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Validate email format and check for suspicious characters
  return EMAIL_REGEX.test(email) && !SUSPICIOUS_CHARS.test(email);
}
