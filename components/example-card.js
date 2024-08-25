function ExampleXardShower(item) {
    const exampleCardFirstLayer = document.createElement('div');
    exampleCardFirstLayer.className = 'col-lg-12 col-sm-12 col-12 d-flex flex-column text-justify';
    exampleCardFirstLayer.style.marginTop = '6rem';


    const exampleCardSecondLayer = document.createElement('div');
    // exampleCardSecondLayer.className = 'mb-1';
    exampleCardSecondLayer.style.background = '#007BFF';
    exampleCardSecondLayer.style.width = '100%';
    exampleCardSecondLayer.style.height = '12rem';
    exampleCardSecondLayer.style.position = 'relative';   


    const exampleGridRow = document.createElement('div');
    exampleGridRow.className = 'row';
    exampleGridRow.style.position = 'absolute';
    exampleGridRow.style.top = '-2rem';
    exampleGridRow.style.left = '2rem'; 


    const exampleGridCol = document.createElement('div');
    exampleGridCol.className = 'col-xl-12 mb-3 p-1';
    // exampleGridCol.style.position = 'relative';


    const exampleItemLayer = document.createElement('div');
    exampleItemLayer.className = 'card p-1 right-angle';
    exampleItemLayer.style.width = '100%';
    exampleItemLayer.style.height = '100%';


    const exampleItem = document.createElement('img');
    exampleItem.className = 'card-img-top right-angle';
    exampleItem.setAttribute('src', item.url);
    exampleItem.setAttribute('alt', item.name);


    const examplePreview = document.createElement('div');
    examplePreview.className = 'col-6';
    examplePreview.style.position = 'relative';
    examplePreview.style.top = '-12.5rem';
    examplePreview.style.left = '.36rem';
    examplePreview.style.background = '#dedede';


    const exampleCode = document.createElement('div');
    exampleCode.className = 'col-6';
    exampleCode.style.position = 'relative';
    exampleCode.style.top = '-15.5rem';
    exampleCode.style.left = '0';
    exampleCode.style.background = '#dedede';


    theLeftSideOfTheMainContainer.appendChild(exampleCardFirstLayer);
    exampleCardFirstLayer.appendChild(exampleCardSecondLayer);
    exampleCardSecondLayer.appendChild(exampleGridRow);
    exampleGridRow.appendChild(exampleGridCol);
    exampleGridCol.appendChild(exampleItemLayer);
    exampleItemLayer.appendChild(exampleItem);
    exampleGridCol.appendChild(examplePreview);
    exampleGridCol.appendChild(exampleCode);
}
