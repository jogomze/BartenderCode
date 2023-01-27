import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
const navigate = useNavigate();

useEffect(() => {
navigate("/");
}, [navigate]);

return (
  <section className="section error-page">
    <div className="error-container">
        <Link to="/" ></Link>
    </div>
  </section>
)
}

export default Error