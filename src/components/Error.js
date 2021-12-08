import React from "react";
import { Result } from "antd";
import "../styles/Error.css";
import { useSelector } from "react-redux";

function Error() {
  const error = useSelector((state) => state.newspaper.error);
  return (
    <div className="error" id={error ? "nodata" : "result"} data-testid='error'>
      <Result
        status="500"
        title="No records"
        subTitle="Sorry, something went wrong."
      />
    </div>
  );
}

export default Error;
