import React from 'react';
import Validation from './Validation';
import { connect } from 'react-redux';
import { validateRegistration } from '../../actions/validateRegistration';
import { fetchValidationType } from '../../actions/fetchValidationType';

class ValidationContainer extends React.Component {
    state = {
        name: '',
        password: '',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // onSubmit function provides a validations for the sign up after the continue registration has been done
    onSubmit = event => {
        event.preventDefault();
        this.props.validateRegistration(
            this.props.match.params.code,
            this.state.name,
            this.state.password
        );
        this.props.history.push('/login');
    };

    // verifies the validation type of the users
    componentDidMount() {
        this.props.fetchValidationType(this.props.match.params.code);
    }

    render() {
        return (
            <div>
                <Validation
                    validationType={this.props.validationType}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    validateRegistration,
    fetchValidationType,
};

const mapStateToProps = reduxState => {
    return {
        validationType: reduxState.validationType,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationContainer);
