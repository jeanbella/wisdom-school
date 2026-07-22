import { DataTypes } from "sequelize";
import sequelize from "../dbConnection/dbConfig.js";
import { generateString } from "../utils/functions.js";
import bcrypt from "bcrypt";


const User = sequelize.define("User", {

    randomId: {
        type: DataTypes.STRING(8),
        allowNull: {
            args: true,
            msg: "rndom id already exist",
        },
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(13),
    },

    school: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.ENUM("Student", "Admin", "Teacher"),
        defaultValue: "Student",
    },
    status: {
        type: DataTypes.ENUM("Active", "Deactivated"),
        defaultValue: "Active",
    },

    username: {
        type: DataTypes.STRING(40),
        allowNull: {
            args: true,
            msg: "username is required",
        },
        // unique: {
        //     args: true,
        //     msg: "username already exist",
        // },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: {
            args: false,
            msg: "Password is required",
        },
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

},
    {
        freezetableName: true,
        paranoid: true,
        timestamps: true,
    }
);
User
    .sync({ alter: false, force: false })
    .then(async (data) => {
        console.log(data);
        if ((await User.count()) === 0) {
            let password = await bcrypt.hash("Password@123", await bcrypt.genSalt(8));
            await User.create({
                firstName: "Admin",
                lastName: "Admin",
                username: "admin",
                role: "Admin",
                email: "admin@gmail.com",
                school: "Musanze",
                randomId: generateString(8),
                password: password,
            });
        }
    })
    .catch((err) => {
        console.log(err);
    });

export default User;