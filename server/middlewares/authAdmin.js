import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized! Please! Login again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

    if (condition) {
        
    }

  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authAdmin;
