const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}

const setGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set Goals'})
}

const updateGoal = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}