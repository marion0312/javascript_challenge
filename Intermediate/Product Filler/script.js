var products_container = document.querySelector(".products")
var name = document.querySelector("#name")
var category = document.querySelector("#category")
var submit = document.querySelector("#submit")


const products = [
    {
        id: 1,
        name: 'Coffee BK1',
        category: 'Coffee',
        image: 'https://picsum.photos/id/237/200/200',
        rating: 4
    },
    {
        id: 2,
        name: 'Coffee BK2',
        category: 'Coffee',
        image: 'https://picsum.photos/id/237/200/200',
        rating: 3
    },
    {
        id: 3,
        name: 'Maltesers',
        category: 'Chocolate',
        image: 'https://picsum.photos/id/237/200/200',
        rating: 2
    }
]

const productsList = ( list ) => {
    products_container.innerHTML = ''

    list.forEach( item => {
        products_container.innerHTML += 
            `<div class="card">
                <div class="card-image">
                    <img src="${item.image}" alt="">
                </div>
                <div class="card-description">
                    <p class="product_name">${item.name}</p>
                    <p class="product_category">${item.category}</p>
                    <p class="product_rating">${item.rating}/5</p>

                    <a href="javascript:void(0)" class="btn">Buy Now</a>
                </div>
            </div>`
    })
}

const populateCategoryList = ( list ) => {

    var uniqueList = new Set( )
    
    // Get category and add to uniqueList Set
    list.forEach( item => {
        uniqueList.add( item.category )
    });

    var uniqueCategory = Array.from( uniqueList ) 

    uniqueCategory.forEach( item => {
        category.innerHTML += `<option>${item}</option>`   
    })

    console.log( uniqueCategory );
}

const searchProduct = ( p_category ) => {
    var result = products.filter( e => e.category == p_category )

    return result;
}

category.onchange = () => {
    if ( category.value != 'All' ) {
        var newList = searchProduct( category.value )
        productsList( newList )
    }
    else {
        productsList( products )
    }

} 

productsList( products )
populateCategoryList( products )
// searchProduct( 'Coffee' )