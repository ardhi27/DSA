/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    //Menggabungkan 2 array dalam 1 objek
    const dataPerson = names.map((names, index) => ({
        names: names,
        height: heights[index]
    }))

    //Menyortir berdasarkan tinggi
    dataPerson.sort((a, b) => a.height - b.height)

    //Mengembalikan hasil nama dalam bentuk objek baru
    //Sehingga hasil tinggi tidak tergabung
    return dataPerson.map(item => item.names)
};


console.log(sortPeople(["Mary", "John", "Hunyadi"], [190, 140, 150]))


