import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>About This Web Application</h2>
      <p>
        This is a web application built using React.js, CSS , Redux, react-chartjs. The application consists of a Login page and a Home page.
      </p>
      <p>
        The Login page allows users to log in with their email and password, and upon successful login, they are redirected to the Home page.
      </p>
      <p>
        The Home page features a sidebar for easy navigation, displaying the user's profile picture and default user menus. It also includes a graph and a gauge in the middle, showcasing data obtained from available open-source APIs.
      </p>
      <p>
        The application is designed using a component-based approach, ensuring responsiveness for various devices and screen sizes. The UI design emphasizes user-friendliness, consistency in color scheme and typography, and incorporates modern design trends for an enhanced user experience.
      </p>
      <p>
        This project is part of a coding assignment, and the code is available on GitHub.
      </p>
      {/* Add any additional information or personal touch as needed */}
    </div>
  );
};

export default About;
