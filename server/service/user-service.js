const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
   async registration(email, password, firstName, lastName) {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
         throw ApiError.BadRequest(
            "Пользователь с таким адресом уже существует"
         );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();
      const user = await UserModel.create({
         email,
         password: hashPassword,
         firstName,
         lastName,
         activationLink: activationLink,
      });
      // await mailService.sendActivationMail(email, activationLink);
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
         ...tokens,
         user: userDto,
      };
   }

   async login(email, password) {
      const user = await UserModel.findOne({ email });
      if (!user) {
         throw ApiError.BadRequest("Пользователь с таким адресом не найден");
      }
      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
         throw ApiError.BadRequest("Неверный пароль");
      }
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
         ...tokens,
         user: userDto,
      };
   }

   async logout(refreshToken) {
      const token = await tokenService.removeToken(refreshToken);
      return token;
   }

   async refresh(refreshToken) {
      if (!refreshToken) {
         throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDB = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDB) {
         throw ApiError.UnauthorizedError();
      }
      const user = await UserModel.findById(userData.id);
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
         ...tokens,
         user: userDto,
      };
   }

   async getClient() {
      const data = await UserModel.find();
      return data;
   }
   // async activate(activationLink) {
   //    const user = await UserModel.findOne({ activationLink });
   //    if (!user) {
   //       throw new Error("У Вас проблемы с активацией аккаунта");
   //    }
   //    user.isActivated = true;
   //    await user.save();
   // }
}

module.exports = new UserService();
