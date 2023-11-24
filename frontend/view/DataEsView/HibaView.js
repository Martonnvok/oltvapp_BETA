class HibaView{
    constructor(error, szuloElem){
        console.log("error")
        szuloElem.html(error.message)
    }
}

export default HibaView;