const setPx = (value, target, property) => {
    document.querySelector(target).style[property] = value + 'px';
}

const setValue = (value, target, property) => {
    document.querySelector(target).style[property] = value;
}

const setD2Position = (value, target, property) => {
    document.querySelector(target).style[property] = value + '%';
}

const setTransform = (value, target) => {
    document.querySelector(target).style.transform = 'rotate(' + value +'deg)';
}

const setVisibility = (value, target) => {
    document.querySelector(target).style.display = value ? 'block' : 'none';
}

const setText = (value, target) => {
    document.querySelector(target).innerText = value;
}

const setBorderStyle = (element) => {
    document.querySelector(".main-card").style.borderStyle = element.options[element.selectedIndex].value 
}

const setImge = (element, target, type) => {
    if (type=='bgi'){
        document.querySelector(target).style.backgroundImage = element.style.backgroundImage;
    }
    else {
        document.querySelector(target).src = element.style.backgroundImage.split('url(\"')[1].split('\")')[0];  
    }    
}

const createImge = (element) => {
    element.style.display = 'none';
    let node = document.querySelector('.container');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            printCard(dataUrl);
            element.style.display = 'inline-block';
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
            element.style.display = 'inline-block';
        });
}
   

const printCard = (src) => {
    let style = `
    <style>
    p {
        font-family: arial;
        text-align: center;
        color: silver;
    }
    .print-table {
        width: 100%;
    }
    
    .print-table td  {
        height: 140px;
        text-align: center;
        overflow: visible;
    }
    
    .print-table td img  {
        width: 110%;
    }
    </style>
    `;

    let result = '<p>לעילוי נשמת שמואל בן בוקא</p><table class="print-table">';
    for (let index = 0; index < 6; index++) {
        result += '<tr><td><img src="'+ src +'"></td><td><img src="'+ src +'"></tr>'
    }
    result += "</table>";
    let printWindow = window.open("", "פורים שמח להדפסה", "_blank");
    printWindow.document.write(style + result);
}

const openImge = (element) => {
    element.style.display = 'none';
    domtoimage.toBlob(document.querySelector('.container'))
    .then(function (blob) {
        window.saveAs(blob, 'פורים שמח.png');
        element.style.display = 'inline-block';
    });

}