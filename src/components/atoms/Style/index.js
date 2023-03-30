import React from 'react';

// export default function FontColor(buttonName) {
//     // const { buttonName , onClick } = props;

//    return <button>{buttonName}</button>
// }

export default function FontColor ({style, onClick}) {
    return <button style={style} onClick={onClick}>버튼</button>
}