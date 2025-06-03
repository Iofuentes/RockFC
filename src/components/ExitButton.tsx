import './ExitButton.css'
import { RxCross2 } from "react-icons/rx";
// import { useState } from 'react';

interface Props {
    onClick: () => void;
}

const ExitButton = ({ onClick }: Props) => {

    return (
        <div>
            < RxCross2 color='#F2EFDF' size={25} onClick={onClick}/>
        </div>
    )
}

export default ExitButton