import {Action} from 'redux'
import {Reducer} from "../reducers"

export interface ActionMessage<S> extends Action {
	id?:string
	leaf?:string
	type:any
	stateType:any
	args?:any[]
	reducers?:Reducer<S,ActionMessage<S>>[]
	error?:Error
}
