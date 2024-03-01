const express=require('express')
const Workout=require('../models/WorkoutModel')
const router=express.Router()
const{createWorkout, getWorkout,getWorkouts, deleteWorkout, updateWorkout}=require('../controllers/WorkoutController')

//GET all workout
router.get('/',getWorkouts)

//GET single workout
router.get('/:id',getWorkout)


//POST a new workout
router.post('/',createWorkout)

//DELETE a  workout
router.delete('/:id',deleteWorkout)

//UPDATE a  workout
router.patch('/:id',updateWorkout)

module.exports=router