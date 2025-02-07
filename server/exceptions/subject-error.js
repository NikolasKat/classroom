module.exports = class SubjectError extends Error {
   status;
   errors;

   constructor(status, message, errors = []) {
      super(message);
      this.status = status;
      this.errors = errors;
   }

   static BadRequest(message, errors = []) {
      return new SubjectError(400, message, errors);
   }
};
