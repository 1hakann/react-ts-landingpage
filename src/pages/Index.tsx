import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const index = (props: any) => {
    document.title = 'React Ts Landing Page';
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="overflow-x-hidden">
            <div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img
                        src="/assets/images/banner-rightIcon.png"
                        alt="banner-rightIcon"
                        className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                    />
                    <div className="container">
                        <div className="relative bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                                    Make your <span className="italic text-primary">team</span> <span className="italic text-secondary">work</span> together
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default index;