$(document).ready(()=>{
//                        Navigation menu controlling '.content' text
    $('.lemon-tea-text').hide();
    $('.coffee-text').hide();
    $('.chocolate-text').hide();
    $('#lemon-order').hide();
    $('#coffee-order').hide();
    $('#chocolate-order').hide();

    $('#lemon-tea').on('click',()=>{
        $('.lemon-tea-text').slideToggle(600);
        $('#lemon-order').toggle();
        $('.coffee-text').hide();
        $('#coffee-order').hide();
        $('.chocolate-text').hide();
        $('#chocolate-order').hide();
        $('.grid-container').css({"animation-name":"background-to-yellow", "animation-fill-mode":"forwards"});
    });
    $('#coffee').on('click',()=>{
        $('.lemon-tea-text').hide();
        $('#lemon-order').hide();
        $('.coffee-text').slideToggle(600);
        $('#coffee-order').toggle();
        $('.chocolate-text').hide();
        $('#chocolate-order').hide();
        $('.grid-container').css({"animation-name":"background-to-brown", "animation-fill-mode":"forwards"});
    });
    $('#chocolate').on('click',()=>{
        $('.lemon-tea-text').hide();
        $('#lemon-order').hide();
        $('.coffee-text').hide();
        $('#coffee-order').hide();
        $('.chocolate-text').slideToggle(600);
        $('#chocolate-order').toggle();
        $('.grid-container').css({"animation-name":"background-to-choc", "animation-fill-mode":"forwards"});
    });
// anchor animation
    $('li a').mouseenter(function(){
        $(this).css({"animation-name":"menu-select","animation-fill-mode":"forwards"});
    });
    $('li a').mouseleave(function(){
        $(this).css({"animation-name":"menu-deselect","animation-fill-mode":"forwards"});
    });

 /* $('.basket-image').on('click',()=>{
       var lemonCount = $('input[name="lem"]').val();
       console.log(lemonCount)
    }); });                                                 HAD A PROBLEM HERE */
    var lemonCount, coffeeCount, chocolateCount;
    const lemonCost = 2.50;
    const coffeeCost = 2.00;
    const chocolateCost = 1.50;
    var cost = 0;

    /*                          get number of drinks + make valid input */
    $('#lem-value').click(function(){
        lemonCount = $("#lem").val();
        console.log("Lemon order count: " + lemonCount);
        if (isNaN(lemonCount)){
            alert("Please reset this order and enter numbers only")
            $("#lem").val(0)
        } getLemonCost(lemonCount);
    });
    $('#cof-value').click(function(){
        coffeeCount = $("#cof").val();
        console.log("Coffee order count: " + coffeeCount);
        if (isNaN(coffeeCount)){
            alert("Please reset this order and enter numbers only")
            $("#cof").val(0)
            resetOrd();
        } getCoffeeCost(coffeeCount);
    });
    $('#choc-value').click(function(){
        chocolateCount = $("#choc").val();
        console.log("Chocolate order count: " + chocolateCount);
        if (isNaN(chocolateCount)){
            alert("Please reset this order and enter numbers only")
            $("#choc").val(0)
        } getChocolateCost(chocolateCount);
    });
    /*                           get total cost */
    $('.basket-image').click(function(){
        console.log("£"+ cost)
        $('#change-cost').text("  £"+cost.toFixed(2));
    })
    /*                          get costs for all drinks */

    function getLemonCost(lemon) {
        lemon = lemon * lemonCost;
        console.log("Lemon Teas cost: £"+lemon);
        cost += lemon;
        return cost.toFixed(2);
    } 
    function getCoffeeCost(coffee) {
        coffee = coffee * coffeeCost;
        console.log("Coffees Cost: £"+coffee);
        cost += coffee;
        return cost;
    }
    function getChocolateCost(chocolate) {
        chocolate = chocolate * chocolateCost; 
        console.log("Hot Chocolates Cost: £"+chocolate);
        cost += chocolate;
        return cost;
    }
    $('#reset-ord').click(function resetOrd(){
        cost = 0;
        lemonCount=0;
        coffeeCount=0;
        chocolateCount=0;
    });

});