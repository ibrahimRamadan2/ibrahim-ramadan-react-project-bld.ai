import React from "react";
import { useEffect } from "react";

function Test() {
  async function getApiData(url) {
    // fetch Data from API .
    let jsonData = await fetch(url);
    jsonData = await jsonData.json();
    return jsonData;
  }
  useEffect(() => {
    getApiData("http://localhost:3011/data").then((response) => {
      console.log(response["394676"]);
    });
  }, []);
  return <div>Test</div>;
}

export default Test;
