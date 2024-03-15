import React, { useEffect, useState } from "react";
import mockData from "../utils/mockData";

const RestaurantCard = () => {
  const [restdata, setRestdata] = useState(mockData);
  const [filterValue, setFilterValue] = useState("");

  const handleClick = (value) => {
    setFilterValue(value.toLowerCase());
  };

  useEffect(() => {
    const filteredProducts = restdata.filter((restlist) =>
      restlist.name.toLowerCase().includes(filterValue)
    );
    setRestdata(filteredProducts);
  }, [filterValue]);

  console.log(restdata);
  
  return (
    <div className="container">
      <div className="row">
        <input
          placeholder="Search bar"
          onChange={(e) => handleClick(e.target.value)}
        />
        {restdata.map((restinfo, index) => (
          <div key={index} className="card col-md-4">
            <div className="card-header">
              <img src={restinfo.image} alt={restinfo.name} />
            </div>
            <div className="card-body">
              <div>{restinfo.name}</div>
              <div>{restinfo.locality}</div>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
