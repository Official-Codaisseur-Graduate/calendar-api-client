# The Codaisseur Academy Calendar - Client

**The Codaisseur Academy Calendar is a platform for Codaisseur's students, teacher's assistants and teachers.**

![The home page](https://i.imgur.com/6fHhoGQ.png?1)

## Here you can view all of Codaisseur's Academy events, which teacher is teaching what class and what lesson on a given day. You can also see special events here, for example **Taste of Code** events or **Demo nights**.

![The Codaisseur Academy Calendar](https://i.imgur.com/WU7CMWb.png?1)

## Also, if you are given the role of an assistant you can volunteer on any event to assist a teacher in their lessons.

# Setup

1.  Clone the `calendar-api-client` repository:

    `$ git clone git clone git@github.com:Official-Codaisseur-Graduate/calendar-api-client.git`

2.  Run `npm install` from the project folder

3.  Start the client with `npm run start`

4.  The client should now automatically load in your browser.

5.  Your client is running!

---

# User's experience

## 1. A user has the options to login if is an existing user, or create a new account for the first time.

- ### Sign Up

  - First the user will be asked for their e-mail account to receive a verification e-mail

  - The verification e-mail provides a link for the user to set their display name and password for the Calendar-app.

- ### Login
  - When the user is logged in they can see the Calendar with all the upcoming events, see and edit their info in the profile page and access features.

## 2. All users have a Rank. Rank is necessary to access all features of the app

- **0 : Unauthorized**

  - User's rank on sign-up. Must be authorized by teacher/admin. Can only access profile page.

- **1 : Student**

  - Student can see Calendar events and profile page.

- **2 : Assistant**

  - Same as student, but can also request to assist a teacher in a class.

- **3 : Teacher**

  - Access to Users list, change user's rank and accept assistant to their class.

- **4 : Admin**
  - Full access to all features, also responsible for initial configuration setup.

# Front-end Technologies Used

### [react-bootstrap](https://react-bootstrap.github.io/) , for UI / UX

### [big-react-calendar](https://intljusticemission.github.io/react-big-calendar/) , for the calendar

### [moment](https://momentjs.com/) , for date handling and localizer

# For server setup and app installation instructions, see the server repository

https://github.com/Official-Codaisseur-Graduate/calendar-api-server

## Contributors to this project

- **[Thels](https://github.com/ThelsK)**
- **[Patty Ouwehand](https://github.com/pattyouwehand)**
- **[Gijs Maas](https://github.com/gijsmaas82)**
- **[Remzi](https://github.com/Remzi1993)**
- **[Akash Chandra](https://github.com/AkashChandra92)**
- **[Panthari Panthong](https://github.com/Panthari-Panthong)**
- **[soniasoni04](https://github.com/soniasoni04)**
- **[gijsmaas82](https://github.com/gijsmaas82)**
- **[Simona Winnekes](https://github.com/winnekes)**
- **[Chrysostomos Krikonis](https://github.com/krik-chry)**
