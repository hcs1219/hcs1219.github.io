"use strict";

if (location.protocol != 'https:') location.replace(`https://${location.hostname}`);

document.querySelectorAll('.link').addEventListener('mouseover', event => {
    let colors = [
        'rgba(184, 39, 252)', // purple
        'rgba(44, 144, 252)', // blue
        'rgba(184, 253, 51)', // green
        'rgba(254, 200, 55)', // yellow
        'rgba(253, 24, 146)' // red
    ];
    
    let ci = colors.length, ri;
    while (ci > 0) {
        ri = Math.floor(Math.random() * ci);
        ci--;
        [colors[ci], colors[ri]] = [colors[ri], colors[ci]];
    };
    console.log(colors);
    
    /*border-image: linear-gradient(to bottom right,
        rgba(184, 39, 252) 0%,
        rgba(44, 144, 252) 25%,
        rgba(184, 253, 51) 50%,
        rgba(254, 200, 55) 75%,
        rgba(253, 24, 146) 100%
       );*/
});