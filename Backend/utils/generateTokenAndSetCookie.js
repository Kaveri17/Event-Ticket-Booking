import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res,userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{ // userId -> passing payload 
        expiresIn: "7d",
    })

    res.cookie("token", token,{
        httpOnly: true, // cookie cannot be accessed by client side javascript only accesible by http
        secure: process.env.NODE_ENV ==="production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return token
}