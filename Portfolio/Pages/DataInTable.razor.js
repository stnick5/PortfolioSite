function getCellStyles(gridContainer){
    const items = gridContainer.querySelectorAll(":scope > *");
    const styles = {};
    
    items.forEach((item, index) => {
        const {width, height} = getComputedStyle(item);
        styles[index] = {width, height};
    });
    
    return styles;
}

function getComputedStyle(element){
    return window.getComputedStyle(element);
}