import React from 'react'

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>Bartender Code is an JavaScript app that can find cocktails using an API and has a feature where you can see random cocktails by pressing a button would use several technologies to accomplish this. The app would use HTML, CSS and JavaScript to create the user interface and layout of the app. It would use React, a JavaScript library, to build the app's structure and handle the dynamic updates of the page based on user interactions.

The app would use an API to retrieve information on cocktails, such as the ingredients and instructions for making them. This API would likely be called using JavaScript code within the React components of the app.

To handle the feature of seeing random cocktails by pressing a button, the app would likely use JavaScript to make a call to the API, passing in a request for a random cocktail. The API would then return a random cocktail from its database, which would be displayed on the page through the use of React components.

Finally, for user authentication, the app would use Firebase from Google to handle user registration and login. This would allow users to create an account and log in to the app.</p>
    </section>
  )
}

export default About
