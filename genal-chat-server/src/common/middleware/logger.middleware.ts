export function logger(req, _res, next) {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  next();
};
