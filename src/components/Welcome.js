import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [gallayImagesData, setgallayImagesData] = useState([]);

  const loadgallayImagesData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://ly9cioaa8j.execute-api.us-east-2.amazonaws.com/Production/galleryImages"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setgallayImagesData(jsonData);
  };

  useEffect(() => {
    // Load the menu links data from the API Gateway
    loadgallayImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {gallayImagesData.map((galleryImage) => (
            <img
              src={galleryImage.src}
              alt={galleryImage.alt}
              className={galleryImage.className}
            />
          ))}

          {/* <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures" />
          <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures" /> */}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
