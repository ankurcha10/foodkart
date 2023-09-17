import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/ankurchaube");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }

  componentDidUpdate() {
    //console.log("Component Did Update");
  }

  componentWillUnmount() {
    //console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card bg-white rounded-lg shadow-md p-6">
  <img
    src={avatar_url}
    alt="User Avatar"
    className="w-30 h-32 rounded-full mx-auto mb-4"
  />
  <h2 className="text-2xl font-semibold text-center">{name}</h2>
  <h3 className="text-lg text-gray-500 text-center mb-2">{location}</h3>
  <h4 className="text-gray-600 text-center">@ankurchaube_</h4>
</div>

    );
  }
}

export default UserClass;
