// Demo example — a small staff roster model in TypeScript.
// Illustrative example only, not product code.

export type Role = "admin" | "staff";

export interface StaffMember {
  id: string;
  name: string;
  role: Role;
  shop: string;
  presentToday: boolean;
  hoursThisWeek: number;
}

export const SAMPLE_STAFF: StaffMember[] = [
  { id: "s1", name: "Ayesha Khan", role: "admin", shop: "Downtown", presentToday: true, hoursThisWeek: 32 },
  { id: "s2", name: "Bilal Ahmed", role: "staff", shop: "Downtown", presentToday: true, hoursThisWeek: 28 },
  { id: "s3", name: "Sara Malik", role: "staff", shop: "Marina", presentToday: false, hoursThisWeek: 24 },
  { id: "s4", name: "Omar Farouk", role: "staff", shop: "Marina", presentToday: true, hoursThisWeek: 36 },
  { id: "s5", name: "Hina Raza", role: "staff", shop: "Downtown", presentToday: false, hoursThisWeek: 20 },
];

/** Staff present today, grouped by shop. */
export function presentByShop(staff: StaffMember[]): Record<string, StaffMember[]> {
  const result: Record<string, StaffMember[]> = {};
  for (const member of staff) {
    if (!member.presentToday) continue;
    (result[member.shop] ??= []).push(member);
  }
  return result;
}

/** Total hours worked this week across the team. */
export function totalHours(staff: StaffMember[]): number {
  return staff.reduce((sum, m) => sum + m.hoursThisWeek, 0);
}

/** Staff who have worked the most hours — for the weekly summary. */
export function topByHours(staff: StaffMember[], count = 3): StaffMember[] {
  return [...staff].sort((a, b) => b.hoursThisWeek - a.hoursThisWeek).slice(0, count);
}

/** Absent today. */
export function absentToday(staff: StaffMember[]): StaffMember[] {
  return staff.filter((m) => !m.presentToday);
}
