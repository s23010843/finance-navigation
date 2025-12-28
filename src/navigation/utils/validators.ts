export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  if (!email) return false;
  return emailRegex.test(email.trim().toLowerCase());
}

export default isValidEmail;