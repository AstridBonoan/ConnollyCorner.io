export interface VenueEvent {
  id: string
  title: string
  date: string
  dateLabel: string
  description: string
  time: string
  calendarStart: string
  calendarEnd: string
}

export const venueEvents: VenueEvent[] = [
  {
    id: 'july-4th',
    title: '4th Of July',
    date: '2026-07-04',
    dateLabel: 'Saturday July 4th',
    description: "We're open on the 4th so come celebrate with us!",
    time: '11:00 AM – 11:00 PM',
    calendarStart: '20260704T110000',
    calendarEnd: '20260704T230000',
  },
]

export const sportsHighlights = [
  {
    title: '14 Screens, Every Game',
    description:
      'Catch all your favorite sports on our 14 screens — NFL, NBA, MLB, soccer, and more.',
  },
  {
    title: 'Friday Sports Night',
    description:
      'The main bar comes alive every Friday. Full menu, cold drinks, and great atmosphere.',
  },
  {
    title: 'Outdoor Beer Garden',
    description:
      'Play darts or enjoy the renovated outdoor beer garden while the game is on.',
  },
]

export const partyEventTypes = [
  'Baby Shower',
  'Bridal Shower',
  'Birthday Party',
  'Rehearsal Dinner',
  'Holiday Get-Together',
  'Corporate Meeting',
  'Graduation',
  'Other',
]

export const partyGuestCounts = [
  '10 – 25',
  '26 – 50',
  '51 – 75',
  '76 – 100',
  '100+',
]

export function downloadCalendarEvent(event: VenueEvent) {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Connolly\'s Corner//Events//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@connollyscorner.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;TZID=America/New_York:${event.calendarStart}`,
    `DTEND;TZID=America/New_York:${event.calendarEnd}`,
    `SUMMARY:${event.title} at Connolly's Corner`,
    `DESCRIPTION:${event.description}`,
    'LOCATION:71-15 Grand Ave, Maspeth, Queens, NY 11378',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${event.id}.ics`
  link.click()
  URL.revokeObjectURL(url)
}
