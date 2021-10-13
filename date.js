
exports.getDate = function() {
  const today = new Date();
  var currentDay = today.getDay();
  var day = "";

  const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};


exports.getDay = function() {
  const today = new Date();
  var currentDay = today.getDay();
  var day = "";

  const options = {
  weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

};
