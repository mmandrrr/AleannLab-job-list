// Modules
import { FC } from 'react';

// Interfaces
import { IPageContainerProps } from '../../../interfaces/IPageContainerProps';

// Components
import Map from '../Map/Map';

// Assets
import share from '../../../assets/page_share.svg';
import save from '../../../assets/page_save.svg';
import star from '../../../assets/Star.png';

const PageContainer : FC<IPageContainerProps>  = ({
    date,
    description,
    phone,
    benefits,
    salary,
    location,
    pictures,
    title,
    address,
    email,
    employmentType
}) => {

    const time : number = Math.ceil(((Date.now() - Date.parse(date)) / 86400000));

    const benefitsList = benefits.map((item : string, i : number) => {
        return(
            <div 
                key={i} 
                className="max-[1024px]:w-[inherit] p-[17px] w-[222px] rounded-[8px] font-bold text-[16px] leading-[16px] text-center tracking-[-0.457143px] border-[1px] border-solid border-[#FFCF00] bg-[rgba(255,207,0,0.15)] text-[#988B49] mb-[87px] "
            >{item}</div>
        )
    })

    const empTypeList = employmentType.map((item : string, i : number) => {
        return(
            <div 
                key={i} 
                className="max-[1024px]:w-[inherit] p-[17px] w-[222px] bg-[rgba(161,177,219,0.317343)] rounded-[8px] font-bold text-[16px] leading-[16px] text-center text-[#55699E] tracking-[-0.457143px] border-[1px] border-solid border-[rgba(85,105,158,0.3)]"
            >{item}</div>
        )
    })

    const imgGallery = pictures.map((item : string, i : number) => {
        return(
            <img 
                key={i} 
                src={item} 
                alt={`img ${i}`}
                className='w-[200px] h-[115px]'
            />
        )
    })

    return(
        <div className="max-w-[calc(320px+958*((100vw-320px)/(1920-320)))] pt-[56px] px-[10px] m-auto flex justify-center flex-wrap gap-x-[136px]">
            <div className="max-w-[720px] flex flex-col">
                <div className="flex pb-[9px] mb-[39px] border-solid border-b-[1px] border-[rgba(58, 69, 98, 0.13)] max-[1024px]:p[0px] max-[1024px]:border-none max-[1024px]:grid">
                    <h1 className="font-bold text-[28px] text-[#3A4562] flex-auto leading-[34px] tracking-[0.413333px] max-[1024px]:p-[9px] max-[1024px]:mb-[24px] max-[1024px]:border-b-[1px] max-[1024px]:border-solid max-[1024px]:border-[rgba(58,69,98,0.13)] max-[1024px]:col-start-1 max-[1024px]:col-end-12">Job Details</h1>
                    <div className="flex items-center gap-[16px] text-[18px] leading-[24px] tracking-[-0.5625px] mr-[30px] text-[#3A4562] transition-all duration-500 ease-in hover:cursor-pointer hover:text-black hover:text-bold">
                        <img className="hidden max-[1024px]:inline" src={star} alt="star" />
                        <img  src={save} alt="Save" className="w-[16px] h-[20px] max-[1024px]:hidden" />
                        Save to my list
                    </div>
                    <div className="flex items-center gap-[16px] text-[18px] leading-[24px] tracking-[-0.5625px] mr-[30px] text-[#3A4562] transition-all duration-500 ease-in hover:cursor-pointer hover:text-black hover:text-bold">
                        <img src={share} alt="Share" className="w-[18px] h-[20px]" />
                        Share
                    </div>
                </div>
                <button className="self-start font-semibold text-[12px] leading-[16px] uppercase text-white py-[18px] px-[30px] rounded-[8px] bg-[#384564] mb-[32px] border-[1px] border-solid border-transparent duration-300 transition-all ease-in hover:cursor-pointer hover:text-[#384564] hover:bg-inherit hover:border-[#384564] max-[1024px]:hidden">Apply now</button>
                <div className="mb-[20px]">
                    <div className="grid grid-cols-[2fr_1fr]">
                        <h1 className="font-bold text-[24px] text-[#3A4562] mb-[7px] leading-[30px] tracking-[-0.75px] max-[1024px]:col-start-1 max-[1024px]:col-end-3">
                            {title}
                        </h1>
                        <div className="flex flex-col text-[18px] leading-[24px] justify-self-end tracking-[-0.5625px] text-[#3A4562] text-left max-[1024px]:min-w-[132px] max-[1024px]:col-start-2 max-[1024px]:col-end-2 max-[1024px]:row-start-2 max-[1024px]:flex max-[1024px]:flex-col-reverse max-[1024px]:mb-[14px]">
                            <span className='font-bold text-[20px] leading-[25px] tracking-[-0.625px]'>€ {salary}</span>Brutto, per year
                        </div>
                        <div className="text-[18px] leading-[24px] tracking-[-0.5625px] text-[rgb(56,65,93,0.355988)] mb-[7px] max-[1024px]:col-start-1 max-[1024px]:col-end-1 max-[1024px]:row-start-2 max-[1024px]:row-end-2 max-[1024px]:flex max-[1024px]:items-center">Posted {time >= 365 ? `${Math.floor(time / 365)} years` : `${time} days`} ago</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className='text-[18px] leading-[24px] text-[#3A4562] tracking-[-0.5625px] mb-[20px]'>{description}</p>
                        <h2 className='font-bold text-[20px] text-[#3A4562] leading-[25px] tracking-[-0.625px]'>Responsopilities</h2>
                        <p className='text-[18px] leading-[24px] text-[#3A4562] tracking-[-0.5625px]'>Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.</p>
                        <p className='text-[18px] leading-[24px] text-[#3A4562] tracking-[-0.5625px]'>The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.</p>
                        <p className='text-[18px] leading-[24px] text-[#3A4562] tracking-[-0.5625px] mb-[20px]'>Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.</p>
                        <h2 className='font-bold text-[20px] text-[#3A4562] leading-[25px] tracking-[-0.625px]'>Compensation & Benefits:</h2>
                        <ul className="flex flex-col gap-[7px] list-[square] text-[18px] leading-[24px] tracking-[-0.5625px] text-[#3A4562] mb-[20px] max-[1024px]:list-inside">
                            Our physicians enjoy a wide range of benefits, including:
                            <li>Very competitive compensation package with bonuses</li>
                            <li>Medical, Dental, and Vision Insurance</li>
                            <li>Occurrence-based Malpractice Coverage</li>
                            <li>Short-term and Long-term Disability Insurance <br/> and life insurance</li>
                        </ul>
                    </div>
                </div>
                <button className="self-start font-semibold text-[12px] leading-[16px] uppercase text-white py-[18px] px-[30px] rounded-[8px] bg-[#384564] border-[1px] border-solid border-transparent duration-300 transition-all ease-in mb-[86px] hover:cursor-pointer hover:text-[#384564] hover:bg-inherit hover:border-[#384564] max-[1024px]:self-center max-[1024px]:mb-[135px]">Apply now</button>
                <div className="max-[1024px]:flex max-[1024px]:flex-col-reverse">
                    <div>
                        <h1 className='mb-[15px] pb-[9px] font-bold text-[28px] leading-[34px] tracking-[0.413333px] text-[#3A4562] border-b-[1px] border-solid border-[rgba(58,69,98,0.13)]'>
                            Additional info
                        </h1>
                        <div>
                            <h3 className='text-[18px] leading-[24px] text-[#3A4562] mb-[10px] tracking-[-0.5625px]'>Employment type</h3>
                            <div className="flex gap-[8px] mb-[23px] max-[1024px]:mb-[63px]">
                                {empTypeList}
                            </div>
                        </div>
                        <div className="page_add-info-benefits">
                            <h3 className='text-[18px] leading-[24px] text-[#3A4562] mb-[10px] tracking-[-0.5625px]'>Benefits</h3>
                            <div className="flex gap-[8px] mb-[23px]">
                                {benefitsList}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-[28px] leading-[34px] tracking-[0.413333px] text-[#3A4562] pb-[9px] mb-[15px] border-b-[1px] border-solid border-[rgba(58,69,98,0.13)]'>Attached images</h1>
                        <div className="flex flex-wrap gap-[10px] mb-[97px] max-[1024px]:justify-center max-[1024px]:mb-[55px]">{imgGallery}</div>
                    </div>
                </div>
            </div>
            <Map
                cords = {location}
                phone = {phone}
                address = {address}
                email = {email}
             />
        </div>
    )
}

export default PageContainer