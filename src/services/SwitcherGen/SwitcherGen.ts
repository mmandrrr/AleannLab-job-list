class SwitcherGen {
    switcherGen = (arr : Array<any>) : Array<object> => {
        const switcherLength : number = Math.ceil(arr.length / 15),
              switcherArr : Array<object> = [];

        for(let i = 1; i <= switcherLength;i++) {
            if(i === 1) {
                switcherArr.push({
                    count : i,
                    className : 'w-[32px] leading-[52px] font-bold text-[20.8px] text-[#70778B] text-center border-b-[2.6px] border-solid border-transparent hover:cursor-pointer hover:text-[#5876C5] text-[#5876C5] border-b-[2.6px] border-solid border-[#5876C5]',
                });
            } else {
                switcherArr.push({
                    count : i,
                    className : 'w-[32px] leading-[52px] font-bold text-[20.8px] text-[#70778B] text-center border-b-[2.6px] border-solid border-transparent hover:cursor-pointer hover:text-[#5876C5] ',
                });
            }
        };

        return switcherArr;
    }
}

export default SwitcherGen