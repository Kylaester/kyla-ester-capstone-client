const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

const app = express();
app.use(cors());

app.get("/displayArray", (req, res) => {
  const array = [
    {
      lesson: 3,
      name: "<button>",
      desc: "Is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.",
    },
    {
      lesson: 3,
      name: "<h1>",
      desc: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
    },
    {
      lesson: 3,
      name: "<p>",
      desc: "Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.",
    },
    {
      lesson: 4,
      name: "<img>",
      desc: "Represents an image in the HTML document.",
    },
    {
      lesson: 4,
      name: "<ul>",
      desc: "Represents an unordered list of items, typically rendered as a bulleted list.",
    },
    {
      lesson: 4,
      name: "<li>",
      desc: "Represents an item in a list.",
    },
    {
      lesson: 5,
      name: "<img>",
      desc: "Represents an image in the HTML document.",
    },
    {
      lesson: 5,
      name: "<p>",
      desc: "Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.",
    },
    {
      lesson: 5,
      name: "<h1>",
      desc: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
    },
    {
      lesson: 6,
      name: "<h1>",
      desc: "Defines the most important heading.",
    },
    {
      lesson: 6,
      name: "<img>",
      desc: "Represents an image in the HTML document.",
    },
    {
      lesson: 6,
      name: "<p>",
      desc: "Defines a paragraph.",
    },
    {
      lesson: 7,
      name: "<button>",
      desc: "Defines a clickable button.",
    },
    {
      lesson: 7,
      name: "<img>",
      desc: "Represents an image in the HTML document.",
    },
    {
      lesson: 7,
      name: "<p>",
      desc: "Defines a paragraph.",
    },
  ];

  res.json(array);
});
app.get("/displayComments", (req, res) => {
  const comments = [
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
    {
      username: "BreadWWater",
      comment:
        "At this point there’s no catching up T_T @xiAnthony #touchgrass",
      time: "5:02pm",
    },
  ];

  res.json(comments);
});
exports.api = functions.https.onRequest(app);
