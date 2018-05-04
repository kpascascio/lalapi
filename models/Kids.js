module.exports = function(sequelize, DataTypes){
    return sequelize.define('lal_kids', {
        // uuid : {
        //     type : DataTypes.UUID,
        //     unique : true,
        //     primaryKey: true,
        //     defaultValue: function() {
        //         return generateMyId()
        //       },
        //     autoIncrement: true
        // },
        first_name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 34,
                isAlpha: true
            }
        }, 
        last_name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 54,
                isAlpha: true
            }
        },
        dob :{
            type: DataTypes.STRING
        },
        
        street : DataTypes.STRING,
        city : DataTypes.STRING, 
        state : DataTypes.STRING, 
        zip : DataTypes.INTEGER, 
        parent_name1 : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 34
            }
        },
        parent_name2 : DataTypes.STRING, 
        parent_phone : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_phone2 : DataTypes.STRING,
        parents_email : {
            type : DataTypes.STRING, 
            validate : {
                isEmail : true
            } 
        }
    })
}