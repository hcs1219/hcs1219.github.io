"use strict";

if (location.protocol != 'https:') location.replace(`https://${location.hostname}`);

const links = document.querySelectorAll('.link');
for (let i = 0; i < links.length; i ++) {
    links[i].addEventListener('mouseover', event => {
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

        event.target.style['border-image'] = `linear-gradient(to bottom right,
            ${colors[0]} 0%,
            ${colors[1]} 25%,
            ${colors[2]} 50%,
            ${colors[3]} 75%,
            ${colors[4]} 100%`;
        };
};