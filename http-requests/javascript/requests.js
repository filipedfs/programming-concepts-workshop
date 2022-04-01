import fetch from 'node-fetch';

const main = async () => {
    console.log("Script start...");
    const urlBase = "http://localhost:3000/api/workshop?id=3"
    const response = await fetch(urlBase, {
        method: 'POST',
        body: JSON.stringify({ name: "teste" }),
        headers: { "Content-Type": "application/json" }
    });
    const statusCode = response.status;
    const statusText = response.statusText;
    console.log("Status code: " + statusCode);

    // const text = await response.text();
    const json = await response.json();
    // console.log("Text: " + text);
    console.log({ json });
};

main();
