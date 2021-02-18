import React from "react";

function Social(props) {
  let {one,two,three} = props
  return (
    <div>
      <div className="social_link">
        <h3>Social Links</h3>
        <ul>
          <li>
            <a href="#">{one} |</a>
          </li>
          <li>
            <a href="#">{two} |</a>
          </li>
          <li>
            <a href="#">{three}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Social;
