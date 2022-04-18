const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "anime shirt",
  },
  {
    tag_name: "fashion",
  },
  {
    tag_name: "dark series",
  },
  {
    tag_name: "rock series",
  },
];

const tagsSeed = () => Tag.bulkCreate(tagData);

module.exports = tagsSeed;
