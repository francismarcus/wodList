import { combineReducers } from 'redux';

const Reducer = () => {
    return [
        {
          name: 'Grace',
          description: '30 Clean & Jerks for time',
          details: 'Any single-movement ground-to-overhead is acceptable (power snatch, full/squat snatch, split snatch). \n\nScaling \n“Isabel” is one of the fastest CrossFit benchmark workouts. Reduce the load so you can perform multiple reps unbroken and complete all the reps in less than 5 minutes. Athletes less familiar with Olympic lifting should take time to drill the mechanics of each movement and reduce the load drastically.\n\nIntermediate Option\n30 snatches for time (Men: 115 lb, Women:75 lb)\n\nBeginner Option\n30 snatches for time (Men: 75 lb, Women: 55 lb)'
        },
        { name: 'Isabel',
        description:  '30 Snatches for time',
        details: 'Power cleans or full cleans are acceptable. Athlete may re-set after the clean or catch the bar in the rack position for the clean and push straight into the jerk without pausing. However snatches are not allowed.\n\nScaling\n“Grace” is one of the fastest CrossFit benchmark workouts. Reduce the load so you can perform multiple reps unbroken and complete all the reps in less than 5 minutes. Athletes less familiar with Olympic lifting should take time to drill the mechanics of each movement and reduce the load drastically.\nIntermediate Option\n30 clean and jerks for time (Men: 115 lb / Women: 75 lb)\nBeginner Option\n30 clean and jerks for time (Men: 75 lb / Women: 55 lb)'
      }
    ]
}

const selected = (selected=null, action) => {
    if (action.type === 'SELECTED') {
        return action.payload;
    }
    return selected;
}

export default combineReducers({
    wods: Reducer,
    selectedWods: selected
});
