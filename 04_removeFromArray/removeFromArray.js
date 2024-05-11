const removeFromArray = function(aArray, ...itemToBeRemoved) {
    const arrayWithoutRemovedItems = []
    for (const item of aArray)
    {
        let keepItem = true;
        for(const removableItem of itemToBeRemoved)
        {
            if(item === removableItem)
            {
                keepItem = false;
            }
        }

        if(keepItem)
        {
            arrayWithoutRemovedItems.push(item);
        }
    }
    return arrayWithoutRemovedItems
};

// Do not edit below this line
module.exports = removeFromArray;
