// Demo example — a small shift-hours total in plain JavaScript.
// Illustrative example only, not product code.

function shiftHours(checkIn, checkOut) {
  const ms = new Date(checkOut) - new Date(checkIn);
  return Math.max(0, Math.round((ms / 36e5) * 100) / 100);
}

function weekTotal(shifts) {
  return shifts.reduce((total, s) => total + shiftHours(s.in, s.out), 0);
}

module.exports = { shiftHours, weekTotal };
