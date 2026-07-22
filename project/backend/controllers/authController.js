import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateString } from "../utils/functions.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Op } from "sequelize";

dotenv.config();

let { TOKEN_KEY } = process.env;

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            username,
            school,
            email,
            password,
            phone,
        } = req.body;

        const existing = await User.findOne({
            where: { email },
        });

        if (existing) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            username,
            school,
            email,
            password: hashedPassword,
            randomId: generateString(8),
            phone,
        });

        res.status(201).json({
            message: "User Registered successfully",
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error",
        });
    }
};

export const login = async (req, res) => {
    let { password, email } = req.body;
  if (!email) {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    if (!password) {
        return res.status(400).json({
            message: "Password is required"
        });
    }

    let findUser = await User.findOne({
        where: {
            email: email,
            status: "Active",
            role: {
                [Op.in]: ["Student", "Admin", "Teacher"],
            },
        },
        attributes: {
            exclude: ["createdAt", "deletedAt", "updatedAt"],
        },
    });

    if (!findUser){
        return res.status(401).json({
        message: "no user found!"
    });
    }
    if (!(await bcrypt.compare(password, findUser.password))){
        return res.status(401).json({
        message: "Invalid email or password"
    });
    }

    let findUzer = {
        randomId: findUser.randomId,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        othername: findUser.otherName,
        email: findUser.email,
        phone: findUser.phone,
        role: findUser.role,
        status: findUser.status,
        username: findUser.username,
    };
    jwt.sign(findUzer, TOKEN_KEY, { expiresIn: "1d" }, (err, token) => {
          if (err) throw err;
        res.status(200).json({
            token: token,
            user: findUzer,
        });
    });
};