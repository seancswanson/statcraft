const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  const data = [
    {
      id: 1,
      foo: "bar"
    },
    {
      id: 2,
      foo: "baz"
    }
  ];

  res.json(data);
});

const port = 5001;

app.listen(port, () => console.log(`Server started on port ${port}. :)`));
