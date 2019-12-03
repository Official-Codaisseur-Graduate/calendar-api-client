import React from 'react';

export default class AdminPage extends React.Component {
    render() {
        return (
            <>
                <h2>Admin Page</h2>
                {!this.props.users ? (
                    'Loading...'
                ) : (
                    <>
                        {this.props.users.map(user => {
                            return (
                                <div key={user.id}>
                                    <p>name: {user.name}</p>
                                    <p>email: {user.email}</p>
                                    <p>rank: {user.rank}</p>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-rank="0"
                                        data-user_id={user.id}
                                    >
                                        <button type="submit">Rank 0</button>
                                    </form>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-rank="1"
                                        data-user_id={user.id}
                                    >
                                        <button type="submit" value="1">
                                            Rank 1
                                        </button>
                                    </form>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-rank="2"
                                        data-user_id={user.id}
                                    >
                                        <button type="submit" value="2">
                                            Rank 2
                                        </button>
                                    </form>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-rank="3"
                                        data-user_id={user.id}
                                    >
                                        <button type="submit" value="3">
                                            Rank 3
                                        </button>
                                    </form>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-rank="4"
                                        data-user_id={user.id}
                                    >
                                        <button type="submit" value="4">
                                            Rank 4
                                        </button>
                                    </form>
                                    <form
                                        onSubmit={this.props.onSubmit}
                                        data-user_id={user.id}
                                        id="rank"
                                    >
                                        <select
                                            value={this.props.rank}
                                            onChange={this.props.onChange}
                                            name="rank"
                                        >
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <button type="submit">
                                            Change rank
                                        </button>
                                    </form>
                                </div>
                            );
                        })}
                    </>
                )}
            </>
        );
    }
}
