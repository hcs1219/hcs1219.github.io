"use strict"

if (location.protocol != "https:")
    location.replace(`https://${location.hostname}`);
