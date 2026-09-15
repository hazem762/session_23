/* console.log($);

let myBox = document.querySelectorAll(".box");

let $myBox = $(".box");

let $myBox = $(myBox);

console.log($myBox)
*/

// console.log(myBox);
// console.log($myBox.eq(0));

/* $(".box").click(function () {
    console.log("ok");
}) */;

/* $(".box").dblclick(function () {
    console.log("ok");
});
 */
/* $(".box").mouseenter(function () {
    console.log("ok");
});

$(".box").mouseleave(function () {
    console.log("oh");
}); */

/* $(".box").hover(function () {
    console.log("ok");

} , function () {
    console.log("oh");
}); */

/* document.querySelectorAll(".box").forEach(function(box) {
    box.addEventListener('click', function () {
        console.log("ok");
    });
}); */

/* document.querySelector(".box").addEventListener('click', function () {
        console.log("ok");
    }, {
        once: true
    }
); */

/* $(".box").on({
    'click' :  function (e) {
        console.log("clicked");
    }, 
    'mouseenter' :function (e) {
    console.log(".mouseenter");
    }
}); */

/* $("#Hide").click(function() {
    // console.log("ok");
    $(".box").hide(1000);
});

$("#Show").click(function() {
    // console.log("ok");
    $(".box").show(1000);
});

$("#Toggle").click(function() {
    // console.log("ok");
    $(".box").toggle(1000);
});

$("#FadeOut").click(function() {
    console.log("ok");
    $(".box").delay(1000).fadeOut(1000);
});

$("#FadeOut").click(function() {
    // console.log("ok");
    $(".box").fadeOut(1000);
});

$("#FadeIn").click(function() {
    // console.log("ok");
    $(".box").fadeIn(1000);
});

$("#FadeToggle").click(function() {
    // console.log("ok");
    $(".box").fadeToggle(1000);
});

$("#FadeTo").click(function() {
    // console.log("ok");
    $(".box").fadeTo(1000 , .5);
});

$("#SlideUp").click(function() {
    // console.log("ok");
    $(".box").slideUp(1000);
});

$("#SlideDown").click(function() {
    // console.log("ok");
    $(".box").slideDown(1000);
});

$("#SlideToggle").click(function() {
    // console.log("ok");
    $(".box").slideToggle(1000);
}); */

/* $("#Animate").click(function() {
    $(".box1").animate({
        width: "300px",
    }, 1000, function () {
        $(".box2").animate({
        height: "300px"
    }, {
        duration: 1000,
        queue: false
    }
    );
    });

}); */

/* $(".btn").click(function() {
    $(".box").html(`
            <P>Hello</P>
        `);
}); */

/* $(".btn").click(function() {
    $(".child").eq(1).css('width', '300px')
}); */
/* 
$(".btn").click(function() {
    $(".parent").has(".test").css({
        'width': '200px',
        'height': '200px'
    }
    )
}); */

/* $(".btn").click(function() {
    $(".box").html(`
            <button class="btn btn-info">Go</button>
        `);
});

$(".box").on('click','button', function() {
    console.log("ok");
}); */

/* $(".btn").click(function() {
    console.log($(".box").outerWidth(100));
}); */

/* $(".btn1").click(function() {
    $(".box").addClass("active");
});

$(".btn2").click(function() {
    $(".box").removeClass("active");
}); */

/* let myP = document.querySelector(".parent");

console.log($(myP).find(".child2")); */

// console.log($('.parent').children().not('.test'));


$.fn.changeColor = function() {
    this.css('color' , 'white')
}

$("button").click(function(e) {
    $(".child").changeColor();
});