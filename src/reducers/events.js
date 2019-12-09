export default function(state = [], action = {}) {
  switch (action.type) {
    case 'SET_EVENTS':
      if (action.payload) {
        return action.payload.map(event => {
          // Google calendar only sends an array of attendees.
          // If an attendee's email includes @codaisseur.com, is a teacher.
          // If not, he/she is an assistant. Also there will be an attendee with
          // organizer property and we want to exclude him as well
          // So only one teacher can be assigned to a class, and we can have multiple assistants.

          let teacher;
          let assistant;
          if (event.attendees) {
            teacher = event.attendees.find(user => user.email.includes('@codaisseur.com'));
            if (event.attendees.length > 2) {
              assistant = event.attendees.find(
                user => !user.email.includes('@codaisseur.com') && !user.hasOwnProperty('organizer')
              );
            }
          }

          // Because the big-react-calendar library displays events with specific properties
          // (title, start, end,....), the data we get from Google's Calendar must be transformed
          // to be displayed (Example: GoogleData: summary --> BigReactCalendar: title)
          return {
            title: event.summary,
            start: event.start.dateTime,
            end: event.end.dateTime,
            eventLink: event.htmlLink,
            description: event.description,
            attendees: event.attendees,
            teacher: teacher,
            assistant: assistant
          };
        });
      }
      return state;
    default:
      return state;
  }
}
