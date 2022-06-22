import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, text, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {text}
                    </span>
                  </div>
                  <div className=" price subtle">  
                    <span>Price: {price}</span>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
