const { Model, DataTypes } = require("sequelize");

const AUDIT_TABLE = "audit";

class Audit extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: AUDIT_TABLE,
      modelName: "Audit",
      timestamps: false,
    };
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'createdByUser',
    });

    this.belongsTo(models.User, {
      foreignKey: 'updateBy',
      as: 'updatedByUser',
    });
  }
}

const AuditSchema = {
  auditId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  action: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'action'
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    field: 'created_by'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'details'
  },
};

module.exports = { Audit, AuditSchema };
