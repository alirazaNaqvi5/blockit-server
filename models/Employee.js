const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  company: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  bankAccount: {
    type: String,
    trim: true,
  },
  companyRegNumber: {
    type: String,
    trim: true,
  },
  companyTaxNumber: {
    type: String,
    trim: true,
  },
  companyTaxID: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  customField: [
    {
      fieldName: {
        type: String,
        trim: true,
      },
      fieldValue: {
        type: String,
        trim: true,
      },
    },
  ],
  address: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  website: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// generating a hash
employeeSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
employeeSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Employee", employeeSchema);
