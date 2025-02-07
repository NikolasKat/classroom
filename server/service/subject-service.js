const SubjectModel = require("../models/subject-model");
const UserModel = require("../models/user-model");
const SubjectError = require("../exceptions/subject-error");

class SubjectService {
   async addSubject(subjectName, teacherID) {
      const existSubject = await SubjectModel.findOne({ subjectName });
      const candidate = await UserModel.findOne({ _id: teacherID });
      if (existSubject) {
         throw SubjectError.BadRequest(
            `Предмет с названием ${subjectName} уже существует!`
         );
      }

      const subject = await SubjectModel.create({
         subjectName,
         teacher: {
            email: candidate.email,
            firstName: candidate.firstName,
            lastName: candidate.lastName,
         },
      });

      return {
         subject: subject,
      };
   }

   async removeSubject(subjName) {
      const candidate = await SubjectModel.findOne({ subjName });
      if (!candidate) {
         throw SubjectError.BadRequest(
            `Предмета с названием ${subjName} не существует! Удаление невозможно!`
         );
      }

      const subject = await SubjectModel.deleteOne({
         subjectName: subjName,
      });

      return {
         subject: subject,
      };
   }

   async getSubjects() {
      const subjects = await SubjectModel.find();
      return subjects;
   }
}

module.exports = new SubjectService();
