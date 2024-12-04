const mongoose = require('mongoose');

//Define the schema for the attendance manager
const attendanceManagerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    password: {
        type: string,
        required: true,
    },

    role: {
        type: string,
        default: 'Attendance Manager',
        enum: ['Attendance Manager', 'Student'],
    }
});

const AttendanceManager = mongoose.model('Attendance Manager', attendanceManagerSchema );

module.exports = AttendanceManager;