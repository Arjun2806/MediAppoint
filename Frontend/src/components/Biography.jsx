import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team of healthcare professionals and technology
            enthusiasts committed to revolutionizing the way people access
            medical care. Our mission at MediAppoint is to simplify the process
            of booking appointments with specialist doctors, making it more
            convenient and efficient for patients while empowering healthcare
            providers to better manage their schedules. We prioritize integrity,
            innovation, and patient-centered care in everything we do. What sets
            us apart is our relentless focus on leveraging technology to bridge
            the gap between patients and healthcare providers, ultimately
            improving the overall healthcare experience for everyone involved.
          </p>
          <p>We are all in 2024!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
