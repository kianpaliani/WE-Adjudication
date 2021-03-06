/**
 * Created by Abdelkader on 2017-02-23.
 */
let mongoose = require('./../../studentsRecordsDB').mongoose;
var roleCodeSchema = mongoose.Schema(
    {
        name: String,
        userRoles: [{type: mongoose.Schema.ObjectId, ref: 'UserRole'}],
        features: [{type: mongoose.Schema.ObjectId, ref: 'RolePermission'}]
    }
);

var RoleCodes = mongoose.model('roleCode', roleCodeSchema);
exports.Model = RoleCodes;