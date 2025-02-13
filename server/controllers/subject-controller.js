const subjectService = require("../service/subject-service");
const { validationResult } = require("express-validator");
const SubjectError = require("../exceptions/subject-error");

class SubjectController {
   async addSubject(req, res, next) {
      try {
         const errors = validationResult(req); // доделать  валидацию в роутах
         if (!errors.isEmpty()) {
            return next(
               SubjectError.BadRequest("Ошибка при валидации", errors.array())
            );
         }
         const { subjectName, teacherID } = req.body;
         const subjectData = await subjectService.addSubject(
            subjectName,
            teacherID
         );

         return res.json(subjectData);
      } catch (error) {
         next(error);
      }
   }

   async connectStudent(req, res, next) {
      try {
         const { subjectId, userId } = req.body;
         const updatedData = await subjectService.connectStudent(
            subjectId,
            userId
         );

         return res.json(updatedData);
      } catch (error) {
         next(error);
      }
   }

   async disconnectStudent(req, res, next) {
      try {
         const { subjectId, userId } = req.body;
         const updatedData = await subjectService.disconnectStudent(
            subjectId,
            userId
         );

         return res.json(updatedData);
      } catch (error) {
         next(error);
      }
   }

   // async removeSubject(req, res, next) {
   //    try {
   //       const errors = validationResult(req); // доделать  валидацию в роутах
   //       if (!errors.isEmpty()) {
   //          return next(
   //             SubjectError.BadRequest("Ошибка при валидации", errors.array())
   //          );
   //       }
   //       const { subjectName } = req.body;
   //       const subjectData = await subjectService.removeSubject(subjectName);

   //       return res.json(subjectData);
   //    } catch (error) {
   //       next(error);
   //    }
   // }

   async getSubjects(req, res, next) {
      try {
         const subjects = await subjectService.getSubjects();

         return res.json(subjects);
      } catch (error) {
         next(error);
      }
   }
}

module.exports = new SubjectController();
