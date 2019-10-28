## Introduction to calendar-app

#### What does this app do?

##### The app is made to show the events happening on certain dates of the calendar. In short, once a user clicks on a day, the events for that particular date would be displayed. The user and admin stories are described below.

#### User's experience : 
1. A user has to signup first to use the app. Once the user has signed up, they receice a mail verification on their email id, where they have to set their password.
2. Once the user sign in, they receive a rank(which is set up by the admin) and they can see different events for the days listed. 

#### Admin's experience : 

1. An admin signs up with the email=your@email.com with the password=secret(Fixed password and email for the admin to login the app). Upon logging, the calendar page opens with the admin button.Note that the admin button will only show when logging in as an admin.
2. When the admin button is clicked, the page loads up to show admin settings. The admin can set up the calendar and add users. 
3. The service account is setup by entering the client email and the key from the downloaded json file(refer to server readme at step A)
4. The calendar is setup by copying the calendar id from the settings of the admin's new gmail account(refer to the server readme step D)
5. The admin sets up the email verification for users. Note that the admin has to setup the email verification for every new user.

#### Super Admin : 

1. The app is designed such that when a user enter with the email= your@gmail.com, they automatically enter as the super admin. The id and password is hard coded in the server side of the app in auth/superAdmin.js. 
2. So when doing the setup for the very first time, keep in mind that there can be multiple admins assigned. The super admin can increase ranks of users to make them admins.
3. The hierarchy of users, assistants, teacher, admins is explained in the server readme. 


## For all documentation and installation instructions, see the server repository:

https://github.com/Official-Codaisseur-Graduate/calendar-api-server/
