let big_img = document.querySelector('.big_img>img');

let small_img = document.querySelectorAll('.main_read_img>img');
// let change_src = document.querySelector('.main_read_img img').src;

let txt_block = document.querySelectorAll('.txt_none');

let container = document.querySelector('.txt');


small_img.forEach(function(item,index){
    // console.log(small_img[index])
    item.addEventListener('click',change)
    console.log(small_img.length);
    function change(e){
        // alert('hahaha');
        let Base_img = big_img.src;
        big_img.src = e.target.src;
        big_img.style.width = "320px";
        big_img.style.height = "385px";
        e.target.src = Base_img;
        // console.log(e);
        // console.log(big_img.src);
    }

    item.addEventListener('click',change_txt)
    function change_txt(e){
        // console.log(txt_block[index]);
        console.log(e.target);
        txt_block[index].style.display = 'block';


    }
})

// small_img.forEach(function(item,index){
//     // console.log(small_img[index])
//     item.onclick = function(){
        
//         function change(e){
//             // alert('hahaha');
//             let Base_img = big_img.src;
//             big_img.src = e.target.src;
//             big_img.style.width = "320px";
//             big_img.style.height = "385px";
//             e.target.src = Base_img;
//             // console.log(e);
//             // console.log(big_img.src);
//         }
//         change();
//     }
// })

// console.log(big_img.src)

// console.log(big_img);
// console.log(small_img);
// console.log(small_img[0].src);
