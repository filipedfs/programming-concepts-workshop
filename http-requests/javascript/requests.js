import fetch from 'node-fetch';

const main = async () => {
    console.log("Script start...");
    const urlBase = "https://filipefonseca.com/api/workshop?id=2"
    const response = await fetch(urlBase, {
        method: 'GET',
        // body: JSON.stringify({ name: "teste" }),
        // headers: { "Content-Type": "application/json" }
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
