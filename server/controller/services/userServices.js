const { body, validationResult } = require("express-validator");
const userModel = require("../../models/User");
const bcrypt = require('bcryptjs');
const jwt    =require('jsonwebtoken');

const loginValidate=[
  body('email','Enter valid Email').isEmail()
  ]
const userLogin = async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  else{
    const email = req.body.email;
  if(email)
  {
    const user = await userModel.findOne({email:email});
    if(user)
    {
      
      const pass = req.body.password;
      const isCorrect = await bcrypt.compare(pass,user.password);
      if(isCorrect)
      {
        console.log("user logggedin");
       const payload = {
        id:user._id
      }
      const token = await jwt.sign(payload,process.env.SECRET);
      res.status(200).json(token);
      }
      else{
        res.status(403).json({msg:"invalid credentials"})
      }

    }
    else{
      res.status(403).json({msg:"invalid credentials"})
    }
  }
  else{
    res.status(404).json({msg:"email is blank"});
  }
  }
};

const detailValidate = [
  body("name", "length must be min 3").isLength({ min: 3 }),
  body("email", "Enter valid Email").isEmail(),
  body("password", "Enter Valid Password min 5 length").isLength({ min: 5 }),
];

const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    // userModel.findOne({email},(err,user)=>{
    //     if(err)
    //     return res.status(400).json({ error: err});
    //     else{
    //         if(user)
    //         return res.status(400).json({ msg:'user already exist.Please login.' });
    //     }
    // })
    try {
        console.log(Date.now())
      let email = req.body.email;
      let findUser = await userModel.findOne({ email });
      if (findUser)
        return res
          .status(400)
          .json({ msg: "user already exist.Please login." });
      else {
        var salt = await bcrypt.genSalt(10);
        req.body.password =  await bcrypt.hash(req.body.password,salt);
        
        let user = new userModel(req.body)
        user.save((err,rst)=>{
            if(err)
            return res.status(400).json({ error: err });
            else
            return res.status(201).json({ created:rst });
        })
      }
    } catch (err) {
      return res.status(400).json({ error: 'some error' });
    }
  }
};

module.exports = {
  userLogin,
  detailValidate,
  addUser,
  loginValidate
};
