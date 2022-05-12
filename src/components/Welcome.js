import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

const Welcome = () => {
    const [linkVisited, setLinkVisited] = useState(false)

    const linkHandler = () => {
        setLinkVisited(!linkVisited)
    }

  return (
    <section>
      <Link onClick={linkHandler} to={!linkVisited ? "/welcome/new-user" : '/welcome'}>Welcome to all men!</Link>
      <Route path="/welcome/new-user">
        <p>Welcome again</p>
      </Route>
    </section>
  );
};

export default Welcome;
