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

   async connectStudent(subjectId, userId) {
      try {
         const candidate = await UserModel.findById({ _id: userId });
         const subjectFromBD = await SubjectModel.findById({ _id: subjectId });
         const isUserExist = subjectFromBD.connectedUsers.find(
            (item) => item._id == userId
         );
         if (isUserExist) {
            throw SubjectError.BadRequest(
               `Вы уже зарегистрированы на этот курс!`
            );
         }
         const updatedSubject = await SubjectModel.findByIdAndUpdate(
            { _id: subjectId },
            {
               $addToSet: {
                  connectedUsers: { _id: userId, lastName: candidate.lastName },
               },
            },
            { new: true }
         );

         return { updatedSubject };
      } catch (error) {
         console.log(error);
      }
   }

   async disconnectStudent(subjectId, userId) {
      try {
         const subjectFromBD = await SubjectModel.findById({ _id: subjectId });
         if (!subjectFromBD) {
            throw SubjectError.BadRequest("Данный курс не был найден!");
         }
         const isUserExist = subjectFromBD.connectedUsers.find(
            (item) => item._id == userId
         );
         if (!isUserExist) {
            throw SubjectError.BadRequest(
               `Вы не зарегистрированы на этот курс!`
            );
         }
         const updatedSubjectData = subjectFromBD.connectedUsers.filter(
            (item) => item._id != userId
         );
         const newData = await SubjectModel.findByIdAndUpdate(
            { _id: subjectId },
            { $set: { connectedUsers: updatedSubjectData } },
            { new: true }
         );

         return { newData };
      } catch (error) {
         console.log(error);
      }
   }

   // async removeSubject(subjName) {
   //    const candidate = await SubjectModel.findOne({ subjName });
   //    if (!candidate) {
   //       throw SubjectError.BadRequest(
   //          `Предмета с названием ${subjName} не существует! Удаление невозможно!`
   //       );
   //    }

   //    const subject = await SubjectModel.deleteOne({
   //       subjectName: subjName,
   //    });

   //    return {
   //       subject: subject,
   //    };
   // }

   async getSubjects() {
      const subjects = await SubjectModel.find();
      return subjects;
   }
}

module.exports = new SubjectService();
