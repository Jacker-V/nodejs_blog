const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String }, 
    slug: { type: String, slug: 'name', unique: true}
}, {
    timestamps: true// Ghi nhận thời gian cập nhật
});

module.exports = mongoose.model('Course', Course);