import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [state, setState] = useState();
  const changeUser = newUser => {
    setState(newUser);
    localStorage.setItem("vitale-token", newUser.token);
  };

  const logOut = () => {
    localStorage.removeItem("vitale-token");
    setState(null);
  }

  React.useEffect(() => {
    const auth = async () => {
      const response = await axios.post(
        "http://localhost:4000/auth",
        {},
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("vitale-token")
          }
        }
      );

      if (response.status === 200) {
        setState(response.data);
      } else {
        setState(null);
      }
    };

    auth();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, changeUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
