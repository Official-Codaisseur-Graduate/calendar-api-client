export default function(state = [], action = {}) {
    switch (action.type) {
        case 'SET_EVENTS':
            if (action.payload) {
                return action.payload.map(event => {
                    let teacher;
                    let assistant;
                    if (event.attendees) {
                        teacher = event.attendees.find(user =>
                            user.email.includes('@codaisseur.com')
                        );
                        if (event.attendees.length > 2) {
                            assistant = event.attendees.find(
                                user =>
                                    !user.email.includes('@codaisseur.com') &&
                                    !user.hasOwnProperty('organizer')
                            );
                        }
                    }

                    return {
                        title: event.summary,
                        start: event.start.dateTime,
                        end: event.end.dateTime,
                        eventLink: event.htmlLink,
                        description: event.description,
                        attendees: event.attendees,
                        teacher: teacher,
                        assistant: assistant,
                    };
                });
            }
            return state;
        default:
            return state;
    }
}
