const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  const data = await ixx.concat(vgc);
  return data.filter((x) => x.hasil == emosi).length;
};

module.exports = {
  promiseOutput,
};
