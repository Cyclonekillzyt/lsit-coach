# Data Models

## Users

- name
- email
- password
- level
- XP
- totalWorkoutsCompleted
- lastDayCompleted
- createdAt

## Exercise

- name
- description
- video
- difficulty
- XP
- repsOrTime

## WorkoutDay

- dayNumber
- exercise: [exerciseIds]
- totalXP

## Progress

- userId
- date
- exercisesCompleted
- XPEarned

## Achievement

- title
- description
- requiredId
  -icon
