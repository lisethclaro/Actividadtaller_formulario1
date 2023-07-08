let items = localStorage.getItem('itemList')
// Operador Ternario
items = items ? items.split(',') : []
showItem()

function addItem() {
    let categoria = document.getElementById('categoria').value
    categoria  = categoria.split(',')
    for (let i = 0; i < categoria.length; i++) {
        if(categoria[i]){
            items.push(categoria[i])
            showItem()
        }
    }
   
}

function showItem() {
    document.getElementById('categoria').value = ''
    let html = ''
    for (let i = 0; i < items.length; i++) {
        //html = html + '<div class="col-10 mb-3">' + items[i] + '</div>'
        //html = html + '<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(' + i + ')"> </a> </div>'
        html += `<div class="col-10 mb-3"> ${items[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
    }

    localStorage.setItem('itemList', items)
    document.getElementById('items').innerHTML = html
}
function deleteItem(categoria) {
    items.splice(categoria, 1)
    showItem()
}