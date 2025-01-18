const jwt = require("jsonwebtoken");
const TokenModel = require("../models/token-model");

class TokenService {
   generateTokens(payload) {
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
         expiresIn: "30m",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
         expiresIn: "30d",
      });

      return { accessToken, refreshToken };
   }

   validateAccessToken(token) {
      try {
         const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
         return userData;
      } catch (error) {
         return null;
      }
   }

   validateRefreshToken(token) {
      try {
         const userData = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
         return userData;
      } catch (error) {
         return null;
      }
   }

   async saveToken(userId, refreshToken) {
      const tokenData = await TokenModel.findOne({ user: userId });
      if (tokenData) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
      }
      const token = await TokenModel.create({ user: userId, refreshToken });

      return token;
   }

   async removeToken(refreshToken) {
      const tokenData = await TokenModel.deleteOne({ refreshToken });
      return tokenData;
   }

   async findToken(refreshToken) {
      const tokenData = await TokenModel.findOne({ refreshToken });
      return tokenData;
   }
}

module.exports = new TokenService();
