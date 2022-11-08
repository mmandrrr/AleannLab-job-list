import { IJobListData } from "./IJobListData"

export interface ISwitcherProps {
    arr : Array<IJobListData>,
    slideCount : number,
    increaseSlide : Function,
    decreaseSlide : Function,
    getSlide : Function
}