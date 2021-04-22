import _ from "lodash";

import {ADD_TIME, DELETE_TIME} from "../constants"

export const tracked_times = (state = [], action)=> {
	switch(action.type){
		case ADD_TIME:
			let {time} = action.payload;
			let parsed_time = JSON.parse(JSON.stringify((time)));
			return _.concat(state, parsed_time);
		case DELETE_TIME:
			let {time_idx} = action.payload;

			var indexs = _.map(state, function (t,i){
				return i;
			});

			var filtered_indexs = _.filter(indexs, function(idx){
				return idx !== time_idx;
			})

			return _.map(filtered_indexs, function (idx){
				return state[idx];
			})
		default:
			return state;
	}
};