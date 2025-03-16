// // 


// import express from "express";
// import Loan from "../models/Loan.js";

// const router = express.Router();

// // Apply for a Loan
// router.post("/apply", async (req, res) => {
//     try {
//       console.log("Request Body:", req.body); // Debugging Log
      
//       const { userId, firstName, lastName, email, mobile, city, state, country, pincode, amount } = req.body;

//       if (!userId || !firstName || !lastName || !email || !mobile || !city || !state || !country || !pincode || !amount) {
//         return res.status(400).json({ error: "All fields are required" });
//       }

//       // The new Loan instance will automatically get a unique applicationNo
//       const newLoan = new Loan({ userId, firstName, lastName, email, mobile, city, state, country, pincode, amount });
//       await newLoan.save();

//       res.status(201).json({ message: "Loan application submitted", loan: newLoan });
//     } catch (error) {
//       console.error("Loan Application Error:", error);
//       res.status(500).json({ error: "Error submitting loan application" });
//     }
// });

// // Fetch Loan Status by Application Number
// router.get("/application/:applicationNo", async (req, res) => {
//     try {
//       const { applicationNo } = req.params;
//       const loan = await Loan.findOne({ applicationNo });

//       if (!loan) {
//         return res.status(404).json({ error: "Loan not found" });
//       }

//       res.json(loan);
//     } catch (error) {
//       console.error("Error fetching loan:", error);
//       res.status(500).json({ error: "Error fetching loan status" });
//     }
// });

// // Update Loan Status (Admin Only) by Application Number
// router.put("/update/application/:applicationNo", async (req, res) => {
//     try {
//       const { applicationNo } = req.params;
//       const { status } = req.body;

//       // Validate that the status is one of the allowed values
//       const validStatuses = ["Pending", "Under Review", "Approved", "Rejected", "Disbursed"];
//       if (!validStatuses.includes(status)) {
//         return res.status(400).json({ error: "Invalid status value" });
//       }

//       const updatedLoan = await Loan.findOneAndUpdate(
//         { applicationNo },
//         { status },
//         { new: true }
//       );

//       if (!updatedLoan) {
//         return res.status(404).json({ error: "Loan not found" });
//       }

//       res.json({ message: "Loan status updated", loan: updatedLoan });
//     } catch (error) {
//       console.error("Error updating loan status:", error);
//       res.status(500).json({ error: "Error updating loan status" });
//     }
// });


// router.get("/admin/loans", async (req, res) => {
//   try {
//       const loans = await Loan.find(); // Fetch all loans
//       res.json(loans);
//   } catch (error) {
//       console.error("Error fetching loans:", error);
//       res.status(500).json({ error: "Error fetching loans" });
//   }
// });


// export default router;


import express from "express";
import Loan from "../models/Loan.js";

const router = express.Router();

// Apply for a Loan
router.post("/apply", async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Debugging Log
        
        const { firstName, lastName, email, mobile, city, state, country, pincode } = req.body;

        if (!firstName || !lastName || !email || !mobile || !city || !state || !country || !pincode) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // The new Loan instance will automatically get a unique applicationNo
        const newLoan = new Loan({ firstName, lastName, email, mobile, city, state, country, pincode });
        await newLoan.save();

        res.status(201).json({ message: "Loan application submitted", loan: newLoan });
    } catch (error) {
        console.error("Loan Application Error:", error);
        res.status(500).json({ error: "Error submitting loan application" });
    }
});

// Fetch Loan Status by Application Number
router.get("/application/:applicationNo", async (req, res) => {
    try {
        const { applicationNo } = req.params;
        const loan = await Loan.findOne({ applicationNo });

        if (!loan) {
            return res.status(404).json({ error: "Loan not found" });
        }

        res.json(loan);
    } catch (error) {
        console.error("Error fetching loan:", error);
        res.status(500).json({ error: "Error fetching loan status" });
    }
});

// Update Loan Status (Admin Only) by Application Number
router.put("/update/application/:applicationNo", async (req, res) => {
    try {
        const { applicationNo } = req.params;
        const { status } = req.body;

        // Validate that the status is one of the allowed values
        const validStatuses = ["Pending", "Under Review", "Approved", "Rejected", "Disbursed"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: "Invalid status value" });
        }

        const updatedLoan = await Loan.findOneAndUpdate(
            { applicationNo },
            { status },
            { new: true }
        );

        if (!updatedLoan) {
            return res.status(404).json({ error: "Loan not found" });
        }

        res.json({ message: "Loan status updated", loan: updatedLoan });
    } catch (error) {
        console.error("Error updating loan status:", error);
        res.status(500).json({ error: "Error updating loan status" });
    }
});

// Fetch All Loans (Admin Only)
router.get("/admin/loans", async (req, res) => {
    try {
        const loans = await Loan.find(); // Fetch all loans
        res.json(loans);
    } catch (error) {
        console.error("Error fetching loans:", error);
        res.status(500).json({ error: "Error fetching loans" });
    }
});

export default router;
