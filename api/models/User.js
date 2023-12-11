
import { DataTypes, Model } from "sequelize";
// const initModels = (sequelize) => {
//     const User = sequelize.define("users", {
//         id: {
//             primaryKey: true,
//             autoIncrement: true,
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         password : {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     })
//     return User;
// }

// export default initModels;

// class User extends Model {

//     static initModels(sequelize) {
//         const User = sequelize.define('User', {
//             id: {
//                 primaryKey: true,
//                 autoIncrement: true,
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             username: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             password : {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             }
//         })
//         return User
//     }
// }

// export default User;

class User extends Model {

    static initModels(sequelize) {
        User.init({
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            tableName: 'user',
            timestamps: true,
            paranoid: true,
        }
        )
        return User
    }
}

export default User;