const skills = [
  {text: 'HTML', learnedSkill: true, _id: 12345},
  {text: 'CSS', learnedSkill: true, _id: 817734},
  {text: 'JavaScript', learnedSkill: false, _id: 251044},
  {text: 'Python', learnedSkill: false, _id: 762481}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}