// Demo example — a small QR attendance check in TypeScript.
// Illustrative example only, not product code.

export interface CheckIn {
  staffId: string;
  scannedAt: string; // ISO date
  distanceMetres: number; // distance from the shop
  deviceTrusted: boolean;
}

export type CheckInResult = "accepted" | "outside-radius" | "untrusted-device";

/** Accept a check-in only inside the 100 m radius, on a trusted device. */
export function validateCheckIn(checkIn: CheckIn): CheckInResult {
  if (!checkIn.deviceTrusted) return "untrusted-device";
  if (checkIn.distanceMetres > 100) return "outside-radius";
  return "accepted";
}
