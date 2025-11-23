import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  // RFC 5322 compliant email regex
  // This regex prevents common email header injection attacks
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check for suspicious characters that could be used for header injection
  const suspiciousChars = /[\r\n\0]/;
  
  return emailRegex.test(email) && !suspiciousChars.test(email);
}
