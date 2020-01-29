export const currentTime = () => {
  const moment = require("moment");

  return moment().format("DD.MM.Y HH:mm");
};
