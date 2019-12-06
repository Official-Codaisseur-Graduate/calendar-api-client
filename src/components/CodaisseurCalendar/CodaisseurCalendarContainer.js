import React, { Component } from 'react';
import CodaisseurCalendar from './CodaisseurCalendar';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/fetchEvents';
import { selectDate } from '../../actions/selectDate';
import moment from 'moment';

class CodaisseurCalendarContainer extends Component {
    state = {
        selectedEvent: null,
    };

    onSelectEvent = event => {
        this.setState({ selectedEvent: event });
    };

    onSelectSlot = slot => {
        console.log(slot);
    };

    onNavigate = date => {
        this.setState({ selectedEvent: null });
        const transformedDate = moment(date);
        console.log(transformedDate);
        const year = transformedDate.year();
        const month = transformedDate.month();
        this.props.selectDate(year, month);
        this.props.fetchEvents(year, month);
    };

    componentDidMount = () => {
        const now = moment();
        const year = now.year();
        const month = now.month();
        this.props.selectDate(year, month);
        this.props.fetchEvents(year, month);
    };

    closeEvent = () => {
        this.setState({ selectedEvent: null });
    };

    render() {
        return (
            <div className="calendar-wrapper">
                <CodaisseurCalendar
                    onSelectEvent={this.onSelectEvent}
                    onNavigate={this.onNavigate}
                    onSelectSlot={this.onSelectSlot}
                    events={this.props.events}
                    selectedEvent={this.state.selectedEvent}
                    closeEvent={this.closeEvent}
                />
            </div>
        );
    }
}
const mapStateToProps = reduxState => {
    return {
        events: reduxState.events,
    };
};
export default connect(mapStateToProps, { fetchEvents, selectDate })(
    CodaisseurCalendarContainer
);
