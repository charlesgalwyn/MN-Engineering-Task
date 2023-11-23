import React from 'react';

const Service = () => {
  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <p>
        We offer a range of services to enhance your experience with our web application. Here are some key features:
      </p>
      <div className="service-item">
        <h3>Login Page</h3>
        <p>
          Our clean and straightforward login page ensures a seamless user authentication process. Enjoy the convenience of client-side validation without the need for server-side validation at this stage.
        </p>
      </div>
      <div className="service-item">
        <h3>Home Page</h3>
        <p>
          Explore our Home page, equipped with a sidebar for easy navigation. The sidebar displays your profile picture and default user menus. The central area features a graph and a gauge, showcasing data obtained from open-source APIs such as a crypto pricing API or a weather API.
        </p>
      </div>
      <div className="service-item">
        <h3>Responsive Design</h3>
        <p>
          Our application is designed using a component-based approach, ensuring responsiveness across various devices and screen sizes, including tablets, laptops, and desktops.
        </p>
      </div>
      <div className="service-item">
        <h3>Attractive UI Design</h3>
        <p>
          Enjoy a visually pleasing design with a consistent color scheme, typography, and modern visual elements. We prioritize user-friendliness and intuitive interactions to elevate your overall experience.
        </p>
      </div>
      <div className="service-item">
        <h3>GitHub Repository</h3>
        <p>
          Access our fully functional web page code on GitHub. The repository link is available for public viewing, allowing you to explore and contribute.
        </p>
      </div>
      {/* Add any additional services or features as needed */}
    </div>
  );
};

export default Service;
