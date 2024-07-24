/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    const dataPerson = names.map((names, index) => ({
        names: names,
        height: heights[index]
    }))

    const sortedPeopleByHeights = dataPerson.sort((a, b) => b.height - a.height).map(item => item.names)

    return sortedPeopleByHeights
};


console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))

