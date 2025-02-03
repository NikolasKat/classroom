module.exports = class UserDto {
   email;
   userRole;
   id;
   isActivated;

   constructor(model) {
      this.email = model.email;
      this.userRole = model.userRole;
      this.id = model._id;
      this.isActivated = model.isActivated;
   }
};

// DTO === data transfer object
