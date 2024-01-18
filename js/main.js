$(document).ready(function () {
  $("input.mask-phone")
    .mask("+7 (999) 999-99-99", { autoclear: true })
    .on("click", function () {
      $(this).setCursorPosition(4);
    });

  // var $page = $('html, body');

  // $('a[href*="#"]:not(.open_modal)').on('click', function () {

  // 	if ($(this).attr("href") != "#") {

  // 		$page.animate({

  // 			scrollTop: $($.attr(this, 'href')).offset().top - $('.header').outerHeight() - 30

  // 		}, 1000);

  // 		return false;

  // 	}

  // });

  $(".nothidden_menu .hidden_menu_link").on({
    mouseenter: function () {
      let target = "." + $(this).data("target");

      $(target).addClass("active");
    },

    mouseleave: function () {
      let target = "." + $(this).data("target");

      $(target).removeClass("active");
    },
  });

  flatpickr("#datetimePicker", {
    dateFormat: "d.m.Y", 
  });

  $(".magnificPopup").magnificPopup({
    callbacks: {
      open: function () {
        $("html").css("overflow-y", "hidden");
      },
      close: function () {
        $("html").css("overflow-y", "auto");
      },
    },
  });

  $(".header_search_link").on("click", function (e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    
    $(".result_block").addClass("active");

    $(".result_block").height($(".result_block").next().height());

    setTimeout(() => {
      $('.flowerss__input')[0].focus()
    }, 100);
  });

    $(".flowerss__btn--close").on("click", function (e) {
    e.preventDefault();

    $(".header_search_link").parent().removeClass("active");
    
    $(".result_block").removeClass("active");

    $(".result_block").height($(".result_block").next().height());
  });

  
  $(".result_inner .flowerss__btn--close").on("click", function (e) {
    e.preventDefault();
    $(".result_inner .flowerss__input")[0].value = ''
  });

  $(".delivery_fp_showmore").on("click", function () {
    var curText = $(this).text();

    $(this).text($(this).attr("data-title"));

    $(this).attr("data-title", curText);

    $(this).parents(".delivery_fp_content_wrapper").toggleClass("active");
  });

  $(".header_menu_item_submenu>img").on("click", function () {
    $(this).next("ul").show();
  });
  $(".header_menu_item_submenu .header_menu_item_p").click(function () {
    $(this).parent().parent().hide();
  });

  var $stickyMenu = $(".header");

  var stickyNavTop = $($stickyMenu).offset().top;

  var navHeight = $($stickyMenu).height();

  var stickyNav = function () {
    navHeight = $($stickyMenu).height();

    var scrollTop = $(window).scrollTop();

    if (scrollTop > navHeight) {
      $($stickyMenu).addClass("sticky");
      $(".hidden_menu").removeClass("active");
      $($stickyMenu).removeClass("white");
      $(".result_block").removeClass("active");
      $(".header_search").removeClass("active");

      if (!$(".header").hasClass("header_fp")) {
        $(".wrapper").css("padding-top", navHeight + "px");
      }
    } else {
      $($stickyMenu).removeClass("sticky");

      if (!$(".header").hasClass("header_fp")) {
        $(".wrapper").css("padding-top", "0");
      }
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });

  $(".menu_btn, .mobile_header_close").on("click", function (e) {
    e.preventDefault();

    $(".mobile_header_wrapper").toggleClass("active");
  });

  $(".hover_link").on("mouseenter", function () {
    // alert(1)
    $(".header").addClass("white");
    $(".hidden_menu").addClass("active");
    console.log($(".result_block").next().height() - $(".header").height());
    $(".hidden_menu").height($(".result_block").next().height() - $(".header").height());
  });
  $(".header_menu>ul>li>a:not(.hover_link)").on("mouseenter", function () {
    $(".header").removeClass("white");
    $(".hidden_menu").removeClass("active");
  });
  $(document).on("mousedown", function (e) {
    var menu = $(".hidden_menu");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $(".header").removeClass("white");
      $(".hidden_menu").removeClass("active");
    }
  });

  $(".nothidden_menu>li>a").on("mouseenter", function () {
    $(".nothidden_menu ul").hide();
    $(this).next("ul").fadeIn();
  });

  $(
    ".header_menu_item_p:not(.header_menu_item_submenu ul .header_menu_item_p), .mobile_header_menu_a"
  ).on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_buket").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item1").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_2").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item2").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_3").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item3").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_4").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item4").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_5").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item5").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_6").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item6").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_7").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item7").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_8").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item8").toggleClass("active");
  });

  $(".header_menu_item_p, .mobile_header_menu_9").on("click", function (e) {
    e.preventDefault();

    $(".header_menu_item9").toggleClass("active");
  });

  $(".product_accordion_head").on("click", function (e) {
    e.preventDefault();

    $(this).parent().toggleClass("active");

    $(this).siblings(".product_accordion_body").slideToggle();
  });

  const datepickerInput = document.querySelector(".datepicker_input");

  if (datepickerInput != null) {
    $.datepicker.regional["ru"] = {
      closeText: "Закрыть",

      prevText: "Предыдущий",

      nextText: "Следующий",

      currentText: "Сегодня",

      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],

      monthNamesShort: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],

      dayNames: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
      ],

      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],

      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

      weekHeader: "Не",

      dateFormat: "dd.mm.yy",

      firstDay: 1,

      isRTL: false,

      showMonthAfterYear: false,

      yearSuffix: "",
    };

    $.datepicker.setDefaults($.datepicker.regional["ru"]);

    $(".datepicker_input").datepicker();
  }

  const select2Head = document.querySelector(".catalog_sort");

  if (select2Head != null) {
    $(".catalog_sort").each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,

        dropdownCssClass: "dropdown_basic dropdown_sort",

        dropdownParent: $(this).parent().find(".select2_custom_list"),
      });
    });
  }

  const select2Checkout = document.querySelector(".select2_checkout");

  if (select2Checkout != null) {
    $(".select2_checkout").each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,

        dropdownCssClass: "dropdown_basic dropdown_sort",

        dropdownParent: $(this).parent().find(".select2_custom_list"),
      });
    });
  }

  const basicSlider = document.querySelector(".basic_slider");

  if (basicSlider != null) {
    $(".basic_slider").each(function () {
      var prevArr = $(this)
        .parents(".basic_slider_wrapper")
        .find(".basic_slider_nav--arr_left")[0];

      var nextArr = $(this)
        .parents(".basic_slider_wrapper")
        .find(".basic_slider_nav--arr_right")[0];

      new Swiper($(this)[0], {
        slidesPerView: 4,

        slidesPerGroup: 4,

        spaceBetween: 60,

        pagination: {
          el: $(this)
            .parents(".basic_slider_wrapper")
            .find(".basic_slider_dots")[0],

          clickable: true,
        },

        navigation: {
          prevEl: prevArr,

          nextEl: nextArr,
        },

        breakpoints: {
          1025: {
            slidesPerView: 4,

            lidesPerGroup: 4,

            spaceBetween: 60,
          },

          769: {
            slidesPerView: 3,

            lidesPerGroup: 3,

            spaceBetween: 30,
          },

          0: {
            slidesPerView: 1,

            lidesPerGroup: 1,

            spaceBetween: 20,
          },
        },

        watchSlidesVisibility: true,
      });
    });
  }

  // const mdlSlider = $(".modal-body_slider");

  // if (mdlSlider != null) {
  // mdlSlider.each(function () {

  // var prevArr = $('#modal-user2 .basic_slider_nav--arr_left');
  // var nextArr = $('#modal-user2 .basic_slider_nav--arr_next');

  new Swiper(".modal-body_slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 12,
    // navigation: {
    // 	prevEl: '#modal-user2 .basic_slider_nav--arr_left',
    // 	nextEl: '#modal-user2 .basic_slider_nav--arr_next',
    // },
    pagination: {
      el: ".modal-body_dots",
      clickable: true,
    },
    
    navigation: {
      prevEl: '.modal-body--arr_left',
      nextEl: '.modal-body--arr_right',
    },
  });
  // });
  // }

  const ftbkSlider = document.querySelector(".ftbk_slider");

  if (ftbkSlider != null) {
    var swiper = new Swiper($(".ftbk_slider")[0], {
      loop: true,

      slidesPerView: 1,

      spaceBetween: 0,

      pagination: {
        el: ".basic_slider_dots",

        clickable: true,
      },

      autoplay: {
        delay: 5000,
      },
    });
  }

  const productSlider = document.querySelector(".product_slider");

  if (productSlider != null) {
    var productSingleSliderThumbnails = new Swiper(
      $(".product_slider_thumbnails")[0],
      {
        loop: true,

        slidesPerView: 5,

        spaceBetween: 15,
      }
    );

    var productSliderItem = new Swiper($(".product_slider")[0], {
      loop: true,

      slidesPerView: 1,

      spaceBetween: 0,

      thumbs: {
        swiper: productSingleSliderThumbnails,
      },

      pagination: {
        el: ".product_slider_wrapper .basic_slider_dots",

        clickable: true,
      },
      breakpoints: {
        581: {
          spaceBetween: 0,
        },

        0: {
          spaceBetween: 19,
        },
      },
    });

    $(".product_slider").on("click", function () {
      productSliderItem.slideNext();
    });
  }

  var overlay = $("#overlay");

  var open_modal = $(".open_modal");

  var close_modal = $(".modal_close, #overlay, .close_btn");

  var modal = $(".modal_window");

  $(document).on("click", ".open_modal", function (event) {
    event.preventDefault();

    $(".modal_window.active").animate(
      { opacity: 0, top: 45 + "%" },
      300,
      function () {
        $(this).removeClass("active");
      }
    );

    if ($(this).hasClass("btn_tooltip")) {
      $("#modal_callback select")
        .val($(this).attr("data-title"))
        .trigger("change");
    }

    var div = $(this).attr("href");

    if ($(div).hasClass("modal_slider")) {
      if ($(this).attr("data-item") != null) {
        var curItemSlide = parseInt($(this).attr("data-item"));

        $(div)
          .find(".slick-slider")
          .each(function () {
            $(this).slick("slickGoTo", curItemSlide - 1, true);
          });
      }

      $(div).addClass("active");

      overlay.addClass("active");
    } else {
      $(div).addClass("active");

      overlay.addClass("active");
    }

    if ($(this).hasClass("egg_request")) {
      var curSelectItem = $(this).attr("data-title");

      $(div).find("select option").prop("selected", false);

      $(div)
        .find("select option")
        .each(function () {
          if ($(this).val() == curSelectItem) {
            $(this).prop("selected", true);
          }
        })
        .trigger("change");
    }
  });

  close_modal.on("click", function (e) {
    if (
      e.target != this &&
      e.currentTarget.className != "modal_close" &&
      e.currentTarget.className != "close_btn"
    )
      return;

    e.preventDefault();

    modal.animate(
      {},
      200,

      function () {
        $(this).removeClass("active");

        overlay.removeClass("active");
      }
    );
  });
});

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();

    range.collapse(true);

    range.moveEnd("character", pos);

    range.moveStart("character", pos);

    range.select();
  }
};
