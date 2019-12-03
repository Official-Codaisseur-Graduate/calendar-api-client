import React from 'react';
import CalendarIdForm from './CalendarIdForm';
import { connect } from 'react-redux';
import lscache from 'lscache';
import { fetchCalendars } from '../../actions/fetchCalendars';
import { setupGoogleCalendar } from '../../actions/setupGoogleCalendar';

class CalendarIdFormContainer extends React.Component {
    state = {
        calendar_id: '',
        password: '',
    };

    componentDidMount() {
        const user = lscache.get('user');
        if (!user) {
            return;
        }
        this.props.fetchCalendars();
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.setupGoogleCalendar(
            this.state.calendar_id,
            this.state.password
        );
        this.setState({
            calendar_id: '',
            password: '',
        });
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <CalendarIdForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                user={this.props.user}
            />
        );
    }
}

const mapDispatchToProps = {
    fetchCalendars,
    setupGoogleCalendar,
};

export default connect(null, mapDispatchToProps)(CalendarIdFormContainer);
