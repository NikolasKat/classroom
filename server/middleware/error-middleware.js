const ApiError = require("../exceptions/api-error");
const SubjectError = require("../exceptions/subject-error");

module.exports = function (err, req, res, next) {
   console.log(err);
   if (err instanceof ApiError) {
      return res
         .status(err.status)
         .json({ message: err.message, errors: err.errors });
   }

   if (err instanceof SubjectError) {
      return res
         .status(err.status)
         .json({ message: err.message, errors: err.errors });
   }
   return res.status(500).json({ message: "Непредвиденная ошибка!" });
};
