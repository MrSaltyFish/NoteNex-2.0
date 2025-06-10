import Request from "../models/Request.model.js"; // Adjust the path as needed
import { requestValidationSchema } from "../validators/requestFeature.validation.js";

export const addRequestToDB = async (req, res) => {
  try {
    const { error, value } = requestValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res
        .status(400)
        .json({ success: false, message: "Validation Failed", errors });
    }

    const newRequest = new Request({
      title: value.title,
      description: value.description,
      phoneNumber: value.phoneNumber,
    });

    const savedRequest = await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Request saved successfully",
      data: savedRequest,
    });
  } catch (err) {
    console.error("DB Save Error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
