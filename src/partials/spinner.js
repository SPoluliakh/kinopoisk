const roof = document.querySelector(".background");

const spinnerCircle = '<div class="ldio-cmu695hnyop"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>'

export  const spinner = () => { 
roof.insertAdjacentHTML('afterbegin',spinnerCircle)}

spinner()