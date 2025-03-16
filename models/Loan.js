// import mongoose from "mongoose";

// // Function to generate a unique application number
// function generateApplicationNo() {
//   // Example: "APP-1677499200000"
//   return 'APP-' + Date.now();
// }

// const LoanSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   fullName: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   applicationNo: {
//     type: String,
//     unique: true,      // Ensures uniqueness in the collection
//     default: generateApplicationNo, // Auto-generates a unique number on creation
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Under Review", "Approved", "Rejected", "Disbursed"],
//     default: "Pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Loan = mongoose.model("Loan", LoanSchema);
// export default Loan;


// import mongoose from "mongoose";

// // Function to generate a unique application number
// function generateApplicationNo() {
//   return "APP-" + Date.now();
// }

// const LoanSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   state: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   pincode: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   applicationNo: {
//     type: String,
//     unique: true,
//     default: generateApplicationNo, // Auto-generates a unique number
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Under Review", "Approved", "Rejected", "Disbursed"],
//     default: "Pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Loan = mongoose.model("Loan", LoanSchema);
// export default Loan;


import mongoose from "mongoose";

// Function to generate a unique application number
function generateApplicationNo() {
  return "APP-" + Date.now();
}

const LoanSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  applicationNo: {
    type: String,
    unique: true,
    default: generateApplicationNo, // Auto-generates a unique number
  },
  status: {
    type: String,
    enum: ["Pending", "Under Review", "Approved", "Rejected", "Disbursed"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model("Loan", LoanSchema);
export default Loan;
