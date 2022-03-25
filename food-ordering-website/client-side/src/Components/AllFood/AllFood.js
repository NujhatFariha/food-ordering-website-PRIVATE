import React, { useEffect, useState } from "react";

const AllFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/allFood")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <div className="container mt-4 mb-5 mt-5">
        <div className="row">
          {foods.map((food) => (
            <div key={food._id} className="col-sm-6 mb-5">
              <div className="card border-white p-5">
                <img
                  className="img-fluid rounded-top"
                  src={food.image}
                  style={{ height: "450px", objectFit: "cover" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold">{food.foodName}</h5>
                  <p className="card-text">
                    {food.description.slice(0, 120)}...
                  </p>
                  <h5 className="card-text">{food.price}</h5>
                  <button className="btn btn-dark">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
