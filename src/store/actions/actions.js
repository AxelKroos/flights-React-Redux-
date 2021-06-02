import {SHOW_MORE, CLICK_ASCENDING_ORDER, ADD_INDEX_ARR, CHANGE_INPUT, FILTER_AIRLINES} from "./actionTypes";

export function showMore() {
    return {
        type: 'SHOW_MORE'
    }
}

export function clickAscendingOrder(value, price) {
    return {
        type: 'CLICK_ASCENDING_ORDER',
        payload: value,
        payloadPrice: price
    }
}

export function addIndexArr(valueBody, valueLegs, transferBody, transferLegs, index) {
    const res = {
        valueBody: valueBody,
        valueLegs: valueLegs,
        transfer: transferBody + transferLegs,
        index: index
    }
    return {
        type: 'ADD_INDEX_ARR',
        payload: res
    }
}

export function changeInput(value, num) {
    return {
        type: 'CHANGE_INPUT',
        payloadValue: +value,
        payloadNum: num
    }
}

export function filterAirlines(value) {
    return {
        type: 'FILTER_AIRLINES',
        payload: value
    }
}