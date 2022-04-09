import axios from "axios";

const baseUrl = "https://filipefonseca.com/api/";

const exerciseNumber = {
  one: () => {
    axios
      .get(baseUrl + "workshop")
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  },

  two: () => {
    axios
      .get(baseUrl + "works")
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  },

  three: () => {
    axios
      .get(baseUrl + "workshop?name=Matheus")
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  },

  four: () => {
    const id = Math.floor(Math.random() * 5) + 1;
    axios
      .get(baseUrl + `workshop?id=${id}`)
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  },

  five: () => {
    axios
      .post(
        baseUrl + "workshop",
        {
          test: "Exercise 5",
        },
        {
          headers: { "Content-Type": "" },
        }
      )
      .then((res) => {
        console.log(`Status: ${res.status}`);
        // console.log(res.headers);
        console.log(res.data);
      })
      .catch((e) => e.message);
  },

  six: () => {
    axios
      .post(
        baseUrl + "workshop",
        { test: "Exercise 6" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log(res.headers);
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  },
};

// exerciseNumber.one();
// exerciseNumber.two();
// exerciseNumber.three();
// exerciseNumber.four();
// exerciseNumber.five();
// exerciseNumber.six();
