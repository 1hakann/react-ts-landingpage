import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const index = (props: any) => {
    document.title = 'React Ts Landing Page';
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <>
        Hello World
        </>
    )
};

export default index;