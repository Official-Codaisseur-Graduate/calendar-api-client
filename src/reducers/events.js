export default function(state = [], action = {}) {
    switch (action.type) {
        case 'SET_EVENTS':
            if (action.payload) {
                console.log(action.payload);
                return action.payload.map(event => ({
                    title: event.summary,
                    start: event.start.dateTime,
                    end: event.end.dateTime,
                    description: event.description,
                }));
            }
            return state;
        default:
            return state;
    }
}

/* {
  title: title,
  start: start,
  end: end
} */
