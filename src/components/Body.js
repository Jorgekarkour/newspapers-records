import React from "react";
import Searchbox from "../components/Searchbox";
import NewspapersList from "../components/NewspapersList";
import Paginator from "../components/Paginator";
import Error from "../components/Error";
import "../styles/Body.css";

function Body() {
  return (
    <div className="body">
      <div>
        <h3>About these website...</h3>
        <p>
          Chronicling America provides access to information about historic
          newspapers and select digitized newspaper pages. To encourage a wide
          range of potential uses, we designed several different views of the
          data we provide, all of which are publicly visible. Each uses common
          Web protocols, and access is not restricted in any way. You do not
          need to apply for a special key to use them. Together they make up an
          extensive application programming interface (API) which you can use to
          explore all of our data in many ways.
        </p>
      </div>
      <Searchbox />
      <NewspapersList />
      <Paginator />
      <Error />
    </div>
  );
}

export default Body;
