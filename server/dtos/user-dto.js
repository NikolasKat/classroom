module.exports = class UserDto {
   // DTO === data transfer object
   email;
   id;
   isActivated;

   constructor(model) {
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
   }
};
