import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String, required: true},
    speciality: {type: String, required: true},
    degree: {type: String, required: true},
    experience: {type: String, required: true},
    about: {type: String, required: true},
    available: {type: Boolean, require: true},
    fees: {type: Number, default: 0, required: true},
    address: {type: String, required: true},
    date: {type: Number, required: true},
    slots_booked: {type: Object, default: {}}
}, {minimize: false, timestamps: true});

const doctorModel = mongoose.models.dotor || mongoose.model('Doctor', DoctorSchema);

export default doctorModel;