console.log("in content.js");

// paragraphs is an array
let paragraphs = document.getElementsByTagName('div');
for (elt of paragraphs) {
    elt.style['background-color'] = '#00000';
}

// paragraphs is an array
let images = document.getElementsByTagName('img');
for (elt of images) {
    elt.style['display'] = 'none';
}

