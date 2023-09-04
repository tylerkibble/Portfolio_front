const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: false,
    },
    description: {
        String,
        required: false,
    },

    image: { 
        String,
        required: false,
    },
    url: {
        String,
        required: true,
    }
})

const Project = model('project', ProjectSchema)

module.exports = Project

