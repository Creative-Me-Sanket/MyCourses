const userSchema = require("../Models/User");

//Middleware
//TODO:while geting data only by ID
exports.getUserById = (req, res, next, id) => {
  userSchema.findById(id).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    req.profile = user;
    next();
  });
};

exports.getTeachersByHod = (req, res) => {
  userSchema.find({ hod: req.profile._id }).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    res.status(200).json({ users: user });
  })
}

exports.getStudentByTeacher = (req, res) => {
  userSchema.find({ teacher: req.profile._id }).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    res.status(200).json({ users: user });
  })
}

exports.read = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encryPassword = undefined;
  res.json(req.profile);
};

exports.deleteUserById = (req, res) => {
  userSchema.deleteOne({ _id: req.profile._id }).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    res.status(200).json({ msg: "User Removed Successfully" });
  });
};

exports.update = (req, res) => {
  userSchema.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "User Not Found" });
        return;
      }
      user.salt = undefined;
      user.encryPassword = undefined;
      res.status(200).json({ user: user });
    }
  );
};

exports.userEnrollmentList = () => {
  console.log("userEnrollmentList");
};

exports.pushCourseInEnrollmentList = () => {
  console.log("pushCourseInEnrollmentList");
};

exports.forgotPassword = (req, res) => {
  const { oldPassword, newPassword } = req.body;
  userSchema.findOne({ _id: req.profile._id }, (err, user) => {
    if (!user.authenticate(oldPassword)) {
      res.status(404).json({ error: "Wrong Password" });
      return;
    } else {
      var encryPass = crypto
        .createHmac("sha256", req.profile.salt)
        .update(newPassword)
        .digest("hex");
      userSchema.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: { encryPassword: encryPass } },
        { new: true, useFindAndModify: false },
        (err, user) => {
          if (err) {
            res.status(400).json({ error: "User Not Found" });
            return;
          }
          res.status(200).json({ success: "Password changed successfully !" });
        }
      );
    }
  });
};

exports.AdminCount = (req, res) => {
  userSchema.find({ role: "admin" }, (err, admin) => {
    if (err) {
      console.log(err);
      res.status(401).json({ error: "Admins Not Found" });
      return;
    }
    res.status(200).json({ count: admin.length });
  })
};

exports.TeacherCount = (req, res) => {
  userSchema.find({ role: "teacher" }, (err, teacher) => {
    if (err) {
      console.log(err);
      res.status(401).json({ error: "Teachers Not Found" });
      return;
    }
    res.status(200).json({ count: teacher.length });
  })
};

exports.StudentCount = (req, res) => {
  userSchema.find({ role: "student" }, (err, student) => {
    if (err) {
      console.log(err);
      res.status(401).json({ error: "Students Not Found" });
      return;
    }
    res.status(200).json({ count: student.length });
  })
};

exports.MonthlyUserCount = (req, res) => {
  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  userSchema.aggregate(
    [
      {
        $group: {
          _id: { "year_month": { $substrCP: ["$createdAt", 0, 7] } },
          users_registered: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year_month": 1 }
      },
      {
        $project: {
          _id: 0,
          users_registered: 1,
          month_year: {
            $concat: [
              { $arrayElemAt: [monthsArray, { $subtract: [{ $toInt: { $substrCP: ["$_id.year_month", 5, 2] } }, 1] }] },
              "-",
              { $substrCP: ["$_id.year_month", 0, 4] }
            ]
          }
        }
      },

    ],
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
}