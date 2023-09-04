const { Router } = require('express');
const Project = require('../../models/projects');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const projectList = await Project.find()
        if (!projectList) {
            const projectList = await fetch('https://api.github.com/users/tylerkibble/repos')
                .then(response => response.json)
                .then(json => projectList = json)
                .catch(error => console.error('Error', error));
                
        }
        // throw new Error('No Project List found')
        res.status(200).json(projectList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
)

router.post('/', async (req, res) => {
    const newProject = new Project(req.body)
    try {
        const project = await newProject.save()
        if (!project) throw new Error('Something went wrong saving the Project')
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
)

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Project.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
)

module.exports = router