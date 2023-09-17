import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(" Parent Constructor ");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }
  render() {
    console.log(" Parent Render ");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name={"ankur"} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
