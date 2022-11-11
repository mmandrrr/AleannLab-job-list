// Modules
import {FC, useState, useEffect} from 'react';

// Interfaces
import { ISwitcherProps } from '../../interfaces/ISwitcherProps';

// Services
import SwitcherGen from '../../services/SwitcherGen/SwitcherGen';

// Assets
import arrowLeft from '../../assets/Arrow left.svg'
import arrowRight from '../../assets/Arrow right.svg'

const Switcher : FC<ISwitcherProps> = ({arr,slideCount,increaseSlide,decreaseSlide,getSlide}) => {

    const switcherGen = new SwitcherGen(),
          [switcherArr, setSwitcherArr] = useState<Array<any>>([]),
          [switchList, setSwitchList] = useState<Array<any>>([]);

    const changeClassname = (i : number) : void => {
        switcherArr.forEach(item => {
            item.className = "w-[32px] leading-[52px] font-bold text-[20.8px] text-[#70778B] text-center border-b-[2.6px] border-solid border-transparent hover:cursor-pointer hover:text-[#5876C5]"
        })
        switcherArr[i].className = 'w-[32px] leading-[52px] font-bold text-[20.8px] text-[#70778B] text-center border-b-[2.6px] border-solid border-transparent hover:cursor-pointer hover:text-[#5876C5] text-[#5876C5] border-b-[2.6px] border-solid border-[#5876C5]'
        setSwitcherArr([...switcherArr])
    }

    const createList = () : void => {
        setSwitchList(
            switcherArr.map((item ,i) => {
                return(
                    <li 
                        onClick={(e) => getSlide(e)} 
                        id={`${i}`} 
                        key={i} 
                        className={item.className}
                    >{item.count}</li>
                )
            })
        )
    }

    useEffect(() => {
        setSwitcherArr(switcherGen.switcherGen(arr));
        if(slideCount <= switcherArr.length && slideCount >= 0 && switcherArr.length >= 1) {
            changeClassname(slideCount)
        }
    },[arr,slideCount]);

    useEffect(() => {
        if(switcherArr.length >= 1) {
            createList();
        }
    },[switcherArr])

    console.log(switcherArr);
    

    return(
        <div className="mt-[49px] mb-[60px] flex items-center shadow-jobItem rounded-[10.4px] bg-white p-[17px] h-[52px] max-w-[515px]">
            <button className="max-[400px]:pr-[10px] h-[32px] bg-inherit flex justify-center items-center border-r-[1.3px] border-[#DEE3EF] border-solid pr-[30px]">
                <img className='w-[14px] h-[18px] hover:cursor-pointer' onClick={() => decreaseSlide(switcherArr)} src={arrowLeft} alt="arrow left" />
            </button>
            <ul className="max-[400px]:px-[20px] flex gap-[8px] px-[55px]">
                {switchList.length >= 1 ? switchList : 'Seems like it is empty'}
            </ul>
            <button className="max-[400px]:pl-[10px] h-[32px] bg-inherit flex justify-center items-center border-l-[1.3px] border-[#DEE3EF] border-solid pl-[30px]">
                <img className='w-[14px] h-[18px] hover:cursor-pointer' onClick={() => increaseSlide(switcherArr)} src={arrowRight} alt="arrow right" />
            </button>
        </div>
    )
}

export default Switcher