import data from './.././data/flights.json'
import {SHOW_MORE, CLICK_ASCENDING_ORDER, ADD_INDEX_ARR, CHANGE_INPUT, FILTER_AIRLINES} from "../actions/actionTypes";

const initialState = {
    data: data,
    quantityElemRender: 2,
    arrIndex: [],
    prices: data.result.flights,
    inputValueStart: 5500,
    inputValueEnd: 40000,
    airlines: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MORE:
            let newQuantityElemRender = state.quantityElemRender + 2
            return {
                ...state,
                quantityElemRender: newQuantityElemRender
            }
        case ADD_INDEX_ARR:
            let newArrIndex = [...state.arrIndex]
            newArrIndex.push(action.payload)
            return {
                ...state,
                arrIndex: newArrIndex
            }
        case CLICK_ASCENDING_ORDER:
            let arr = []
            let newArr = []
            for (let i = 0; i < state.data.result.flights.length; i++) {
                arr.push({
                    price: +state.data.result.flights[i].flight.price.passengerPrices[0].feeAndTaxes.amount,
                    index: i,
                    value: state.data.result.flights[i]
                })
            }
            if (action.payload == 1) {
                arr.sort((a, b) => a.price - b.price)
                newArr = []
                for (let j = 0; j < arr.length; j++) {
                    newArr.push(arr[j].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            } else if (action.payload == 2) {
                arr.sort((a, b) => a.price - b.price)
                newArr = []
                for (let j = arr.length - 1; j > 0; j--) {
                    newArr.push(arr[j].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            } else if (action.payload == 3) {
                let arrayForSortingArrIndex = [...state.arrIndex]
                arrayForSortingArrIndex.sort((a, b) => a.valueBody - b.valueBody)
                newArr = []
                for (let j = 0; j < state.arrIndex.length; j++) {
                    newArr.push(arr[arrayForSortingArrIndex[j].index].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            } else if (action.payload == 4) {
                let arrayForSortingArrIndex = [...state.arrIndex]
                arrayForSortingArrIndex.sort((a, b) => a.valueLegs - b.valueLegs)
                newArr = []
                for (let j = 0; j < state.arrIndex.length; j++) {
                    newArr.push(arr[arrayForSortingArrIndex[j].index].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            } else if (action.payload == 5) {
                let arrayForSortingArrIndex = [...state.arrIndex]
                arrayForSortingArrIndex.sort((a, b) => b.transfer - a.transfer)
                newArr = []
                for (let j = 0; j < arrayForSortingArrIndex.length; j++) {
                    newArr.push(arr[arrayForSortingArrIndex[j].index].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            } else if (action.payload == 6) {
                let arrayForSortingArrIndex = [...state.arrIndex]
                arrayForSortingArrIndex.sort((a, b) => a.transfer - b.transfer)
                newArr = []
                for (let j = 0; j < arrayForSortingArrIndex.length; j++) {
                    newArr.push(arr[arrayForSortingArrIndex[j].index].value)
                }
                return {
                    ...state,
                    prices: newArr
                }
            }
        case CHANGE_INPUT:
            if (action.payloadNum == 0) {
                let res = action.payloadValue
                let arr = []
                let newArr = []
                for (let i = 0; i < state.data.result.flights.length; i++) {
                    arr.push({
                        price: +state.data.result.flights[i].flight.price.passengerPrices[0].feeAndTaxes.amount,
                        index: i,
                        value: state.data.result.flights[i]
                    })
                }
                for (let j = 0; j < state.data.result.flights.length; j++) {
                    if (arr[j].price > state.inputValueStart && arr[j].price < state.inputValueEnd) {
                        newArr.push(arr[j].value)
                    }
                }
                return {
                    ...state,
                    prices: newArr,
                    inputValueStart: res
                }
            } else {
                let res = action.payloadValue
                let arr = []
                let newArr = []
                for (let i = 0; i < state.data.result.flights.length; i++) {
                    arr.push({
                        price: +state.data.result.flights[i].flight.price.passengerPrices[0].feeAndTaxes.amount,
                        index: i,
                        value: state.data.result.flights[i]
                    })
                }
                for (let j = 0; j < state.data.result.flights.length; j++) {
                    if (arr[j].price > state.inputValueStart && arr[j].price < state.inputValueEnd) {
                        newArr.push(arr[j].value)
                    }
                }
                return {
                    ...state,
                    prices: newArr,
                    inputValueEnd: res
                }
            }
        case FILTER_AIRLINES:
            let arrAirlines = [...state.airlines]
            for (let i = 0; i < arrAirlines.length; i++) {
                if (action.payload === arrAirlines[i]) {
                    arrAirlines.splice(i, 2)
                    alert(action.payload)
                } else {
                    return null
                }
            }

            arrAirlines.push(action.payload)

            setTimeout(console.log(state.airlines), 2000)
                return {
                    ...state,
                    airlines: arrAirlines
                }
        default:
            return state
    }
}