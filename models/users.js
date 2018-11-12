module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define("Users", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false
      },
      admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      }
    });
    return Users;
  };