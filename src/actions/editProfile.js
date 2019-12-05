import { baseUrl } from '../constants';
import lscache from 'lscache';

export const editProfile = (name, profilePic) => {
    return function() {
        const user = lscache.get('user');
        fetch(`${baseUrl}/editProfile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.jwt}`,
            },
            body: JSON.stringify({
                name,
                profilePic,
            }),
        })
            .then(response => response.json())
            .then(data => {
                const newUserData = {
                    ...user,
                    profilePic: data.profilePic,
                    name: data.name,
                };
                console.log('data', data);
                lscache.set('user', newUserData);
                window.location.reload();
            })
            .catch(error => console.log(error));
    };
};
