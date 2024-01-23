/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

async function getFile(path) {
  try {
    const files = await fs.readdir(path);
    return files;
  } catch (err) {
    console.error("Error reading directory:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
}

app.get("/files", (req, res) => {
  const filePath = path.join(__dirname, "./files/");
  fs.readdir(filePath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrive the files" });
    }
    res.status(200).json(files);
  });
});

app.get("/files/:filename", (req, res) => {
  const filename = path.join(__dirname, "./files/", req.params.filename);

  (async () => {
    try {
      const result = await getFile(filename);
      const fileavailable = result.find((fname) => {
        return fname === req.params.filename;
      });
      if (!fileavailable) {
        return res.status(403).json({ message: "file not found" });
      }
    } catch (error) {
      // Handle errors here
    }
  })();
  const files = getFile(filename);

  if (files)
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "can not read the file" });
      }
      res.status(200).send(data);
    });
});
app.all("*", (req, res) => {
  res.status(404).send("File not found");
});

module.exports = app;
