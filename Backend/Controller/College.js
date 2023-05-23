const collegeSchema = require("../Models/College");

//Middleware
//TODO:while geting data only by ID
exports.createCollege = (req, res) => {
  console.log(req.body);
  var college = new collegeSchema(req.body);
  college.save((err, college) => {
    if (err) {
      console.log(err);
      res.send({ err: err })
    } else {
      console.log("New college Created");
      res.status(200).send({ success: "college Created Successfully" });
    }
  });
};

exports.getCollegeById = (req, res, next, id) => {
  collegeSchema.findById(id).exec((err, college) => {
    if (err) {
      res.status(401).json({ error: "college Not Found" });
      return;
    }
    req.college = college;
    next();
  });
};

exports.read = (req, res) => {
  res.json(req.college);
};

exports.deleteCollege = (req, res) => {
  collegeSchema.deleteOne({ _id: req.college._id }).exec((err, college) => {
    if (err) {
      res.status(401).json({ error: "college Not Found" });
      return;
    }
    res.status(200).json({ msg: "college Removed Successfully" });
  });
};

exports.getAllColleges = (req, res) => {
  console.log("called");
  collegeSchema.find({},(err, college) => {
    if (err) {
      console.log(err);
      res.status(401).json({ error: "colleges Not Found" });
      return;
    }
    res.status(200).json({ list: college });
  })
};

exports.addAdminTOCollege = (req,res) =>{
  collegeSchema.findById(req.college._id).exec((err, college) => {
    if (err) {
      res.status(401).json({ error: "college Not Found" });
      return;
    }
    college.hods.push(req.body.id);
    res.status(200).json({ success: college });
    college.save(()=>console.log('save successfull'))
  });
}

exports.removeAdminFromCollege=(req,res)=>{
  collegeSchema.findById(req.college._id).exec((err, college) => {
    if (err) {
      res.status(401).json({ error: "college Not Found" });
      return;
    }
    college.hods.pull(req.body.id);
    res.status(200).json({ success: college });
    college.save(()=>console.log('remove successfull'))
  });
}

exports.updateCollege = (req, res) => {
  collegeSchema.findByIdAndUpdate(
    { _id: req.college._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, college) => {
      if (err) {
        res.status(400).json({ error: "college Not Found" });
        return;
      }
      res.status(200).json({ college: college });
    }
  );
};

exports.CollegeCount = (req, res) => {
  collegeSchema.find({},(err, college) => {
    if (err) {
      console.log(err);
      res.status(401).json({ error: "colleges Not Found" });
      return;
    }
    res.status(200).json({ count: college.length });
  })
};
      