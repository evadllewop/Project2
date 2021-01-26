module.exports = (sequelize, DataTypes) => {
    const Child = sequelize.define("Child", {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      bio: DataTypes.STRING,
      profilePic: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    });
    Child.associate = (models) => {
        models.Child.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
      return Child;
    };
    