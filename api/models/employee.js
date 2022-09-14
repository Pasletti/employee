'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_employees = sequelize.define(
        'tb_employees', 
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            age: DataTypes.INTEGER,
            name: DataTypes.STRING(255),
            role: DataTypes.STRING(255)
        }, 
        {
            tableName: 'tb_employees',  
            createdAt: 'date_created',
            updatedAt: 'date_modified'
        }
    );

    return tb_employees;
};