const SubjectModel = require("../models/subject-model");
const SubjectError = require("../exceptions/subject-error");

class SubjectService {
   async addSubject(subjectName, teachers, tasks) {
      const candidate = await SubjectModel.findOne({ subjectName });
      if (candidate) {
         throw SubjectError.BadRequest(
            `Предмет с названием ${subjectName} уже существует!`
         );
      }
      const subject = await SubjectModel.create({
         subjectName,
         teachers,
         tasks,
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
