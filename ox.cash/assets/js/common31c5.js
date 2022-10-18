window.addEventListener('DOMContentLoaded', function () {

    let browserCurrency = window.location.search.substr(window.location.search.indexOf("=") + 1);
    

    if($('.calculator'))
    {
        $('.calculator-dropdown-btn').click(function() {
            $(this).toggleClass('calculator-dropdown-btn-close');
            $(this).parent('.calculator-head').parent('.calculator-item').find('.calculator-item-levels').toggleClass('d-none');
            $(this).parent('.calculator-head').parent('.calculator-item').find('.calculator-item-text').toggleClass('d-none');
        });
    }

    // if($('#calc-currency'))
    // {
    //     if (browserCurrency)
    //         $("#calc-currency option[value="+ browserCurrency + "]").prop("selected", true);

    //     $('#calc-currency').on('change', function() {
    //         var url = $(this).val(); // get selected value
    //         console.log(url);
    //         $("#calc-currency option[value="+ url + "]").prop("selected", true);
    //         if (url) { // require a URL
    //             window.location = '?currency=' + url ; // redirect
    //         }
    //         return false;
    //     });
    // }

    $('.select-dd').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select-dd-wrapper"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $this.find("option").attr("selected",false);
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $this.find("option[value='" + $this.val() + "']").attr('selected', true);
            $list.hide();
            // console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    
    });

        // end custom select

    // lang switcher 

    $(".lang-current").click(function(e) {
        $(this).parent('.lang').find('.lang-list').toggleClass('d-block');
        e.stopPropagation();
      });
      $('.lang-list').click(function(e) {
        e.stopPropagation();
      });
      $(document).click(function() {
        $('.lang-list').removeClass('d-block');
      });

    if($('.marathon-img-wrapper')) {
        $('.marathon-img-wrapper.owl-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 1000, 
            items:1,
            margin: 20,
            loop: true,
            nav: false,
            dots: false,
        });
    }
    //slider result 

    $('.advantages-platform-wrapper.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 50000,
        smartSpeed: 500, 
        items:1,
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
    });
    

    $('.factors-cards.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 50000,
        smartSpeed: 500, 
        items:1,
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
    });

    resultsOwl = $('.results .owl-carousel');
    resultsOwl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        loop: true,
        nav: false,
        responsive : {
            0 : {
                items:1,
                dots: true,
                margin: 10,
                startPosition: 0,
                autoWidth: true,
            },
            991 : {
                mouseDrag: false,
                touchDrag: false,
                items:5,
                dots: false,
                margin: -200,
                startPosition: 1,
            }
        }
    });
    if(window.screen.width > 991){
        $('.results .owl-carousel .owl-item.active').eq(0).addClass('prevvSlide');
        $('.results .owl-carousel .owl-item.active').eq(1).addClass('prevSlide');
        $('.results .owl-carousel .owl-item.active').eq(3).addClass('nextSlide');
        $('.results .owl-carousel .owl-item.active').eq(4).addClass('nexttSlide');
    }

    function positionSlides() {
        $('.results .owl-carousel .owl-item.active').removeClass('prevSlide prevvSlide nextSlide nexttSlide');
        $('.results .owl-carousel .owl-item.active').eq(0).addClass('prevvSlide');
        $('.results .owl-carousel .owl-item.active').eq(1).addClass('prevSlide');
        $('.results .owl-carousel .owl-item.active').eq(3).addClass('nextSlide');
        $('.results .owl-carousel .owl-item.active').eq(4).addClass('nexttSlide');
        
    }

    $('.results-slider-btn-next').click(function() {
        resultsOwl.trigger('next.owl.carousel', [300]);
        positionSlides();        
    })

    $('.results-slider-btn-prev').click(function() {
        resultsOwl.trigger('prev.owl.carousel', [300]);
        positionSlides();
    })

    


    

    if(document.querySelector('.calculator')) {
        calculator($('#calculator-list-item-1'));


        $('.calculator-list-btn#calc-btn-1').click(function(){
            calculator($('#calculator-list-item-1'));
        });

        $('.calculator-list-btn#calc-btn-2').click(function(){
            calculator($('#calculator-list-item-2'));
        });
        
        $('.calculator-list-btn#calc-btn-3').click(function(){
            calculator($('#calculator-list-item-3'));
        });

        function calculator(calcItem) {
            let summX3 = 0,
                summX4 = 0,
                summXxx = 0,
                summXgold = 0,
                summX3USD = 0,
                summX4USD = 0,
                summXxxUSD = 0,
                summXgoldUSD = 0;


            let calcX3 = calcItem.find('.calculator-item#calc-x3'),
                calcX4 = calcItem.find('.calculator-item#calc-x4'),
                calcXxx = calcItem.find('.calculator-item#calc-xXx'),
                calcXgold = calcItem.find('.calculator-item#calc-xGold');
            
            let levelsX3 = calcX3.find('.calculator-item-levels'),
                levelX3 = levelsX3.find('.calculatorPage-level'),
                levelsX4 = calcX4.find('.calculator-item-levels'),
                levelX4 = levelsX4.find('.calculatorPage-level'),
                levelsXxx = calcXxx.find('.calculator-item-levels'),
                levelXxx = levelsXxx.find('.calculatorPage-level'),
                levelsXgold = calcXgold.find('.calculator-item-levels'),
                levelXgold = levelsXgold.find('.calculatorPage-level');

            let levelsTotalToken3 = calcItem.find('#calc-x3 #total-sum .calculator-item-total-token'),
                levelsTotalUSD3 = calcItem.find('#calc-x3 #total-sum .calculator-item-total-fiat'),
                cycleTotalToken3 = calcItem.find('#calc-x3 #total-cycle .calculator-item-total-token'),
                cycleTotalUSD3 = calcItem.find('#calc-x3 #total-cycle .calculator-item-total-fiat');

            let levelsTotalToken4 = calcItem.find('#calc-x4 #total-sum .calculator-item-total-token'),
                levelsTotalUSD4 = calcItem.find('#calc-x4 #total-sum .calculator-item-total-fiat'),
                cycleTotalToken4 = calcItem.find('#calc-x4 #total-cycle .calculator-item-total-token'),
                cycleTotalUSD4 = calcItem.find('#calc-x4 #total-cycle .calculator-item-total-fiat');

            let levelsTotalTokenXxx = calcItem.find('#calc-xXx #total-sum .calculator-item-total-token'),
                levelsTotalUSDXxx = calcItem.find('#calc-xXx #total-sum .calculator-item-total-fiat'),
                cycleTotalTokenXxx = calcItem.find('#calc-xXx #total-cycle .calculator-item-total-token'),
                cycleTotalUSDXxx = calcItem.find('#calc-xXx #total-cycle .calculator-item-total-fiat'); 

            let levelsTotalTokenXgold = calcItem.find('#calc-xGold #total-sum .calculator-item-total-token'),
                levelsTotalUSDXgold = calcItem.find('#calc-xGold #total-sum .calculator-item-total-fiat'),
                cycleTotalTokenXgold = calcItem.find('#calc-xGold #total-cycle .calculator-item-total-token'),
                cycleTotalUSDXgold = calcItem.find('#calc-xGold #total-cycle .calculator-item-total-fiat'); 

            let calcCurrency = calcItem.find('.calculator-token').val();
                

            levelX3.click(function(){
                let currentLevel = $(this);
                let levelWrapper = $(this).parent('.calculator-list');
                
                if(!currentLevel.hasClass('selected')) {
                levelX3.each(function (index) {
                    if(index <= currentLevel.index() && !$(this).hasClass('selected')) {
                        $(this).addClass('selected');
                        summX3 += $(this).data('lprice');
                    }
                });
                }
                else {
                levelX3.each(function (index) {
                    if(index > currentLevel.index() && $(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                        summX3 -= $(this).data('lprice');
                    }
                });
                }
                summX3USD = summX3 * calcCurrency;
                levelsTotalToken3.html(summX3.toFixed(0));
                levelsTotalUSD3.html(summX3USD.toFixed(0));
                cycleTotalToken3.html((summX3 * 3).toFixed(0));
                cycleTotalUSD3.html((summX3USD * 3).toFixed(0));

                changeTotal();
            });

            levelX4.click(function(){
                let currentLevel = $(this);
                
                if(!currentLevel.hasClass('selected')) {
                    levelX4.each(function (index) {
                        if(index <= currentLevel.index() && !$(this).hasClass('selected')) {
                            $(this).addClass('selected');
                            summX4 += $(this).data('lprice');
                        }
                    });
                }
                else {
                levelX4.each(function (index) {
                    if(index > currentLevel.index() && $(this).hasClass('selected')) {
                            $(this).removeClass('selected');
                            summX4 -= $(this).data('lprice');

                        }
                    });
                }
                
                summX4USD = summX4 * calcCurrency;
                levelsTotalToken4.html(summX4.toFixed(0));
                levelsTotalUSD4.html(summX4USD.toFixed(0));
                cycleTotalToken4.html((summX4 * 4).toFixed(0));
                cycleTotalUSD4.html((summX4USD * 4).toFixed(0));
                changeTotal();
            });  


            levelXxx.click(function(){
                let currentLevel = $(this);
                let levelWrapper = $(this).parent('.calculator-list');
                
                if(!currentLevel.hasClass('selected')) {
                    levelXxx.each(function (index) {
                        if(index <= currentLevel.index() && !$(this).hasClass('selected')) {
                            $(this).addClass('selected');
                            summXxx += $(this).data('lprice');
                        }
                    });
                }
                else {
                    levelXxx.each(function (index) {
                        if(index >= currentLevel.index() && $(this).hasClass('selected')) {
                            $(this).removeClass('selected');
                            summXxx -= $(this).data('lprice');
                        }
                    });
                }
                summXxxUSD = summXxx * calcCurrency;
                levelsTotalTokenXxx.html(summXxx.toFixed(2));
                levelsTotalUSDXxx.html((summXxxUSD).toFixed(2));
                cycleTotalTokenXxx.html((summXxx * (2*0.05 + 4*0.1 + 8*0.2 + 12*0.25)).toFixed(2));
                cycleTotalUSDXxx.html((summXxxUSD * (2*0.05 + 4*0.1 + 8*0.2 + 12*0.25)).toFixed(2));
                changeTotal();
            });

            levelXgold.click(function(){
                let currentLevel = $(this);
                let levelWrapper = $(this).parent('.calculator-list');
                
                if(!currentLevel.hasClass('selected')) {
                    levelXgold.each(function (index) {
                        if(index <= currentLevel.index() && !$(this).hasClass('selected')) {
                            $(this).addClass('selected');
                            summXgold += $(this).data('lprice');
                        }
                    });
                }
                else {
                    levelXgold.each(function (index) {
                        if(index >= currentLevel.index() && $(this).hasClass('selected')) {
                            $(this).removeClass('selected');
                            summXgold -= $(this).data('lprice');
                        }
                    });
                }
                summXgoldUSD = summXgold * calcCurrency;
                levelsTotalTokenXgold.html(summXgold.toFixed(2));
                levelsTotalUSDXgold.html((summXgoldUSD).toFixed(2));
                cycleTotalTokenXgold.html((summXgold * (2*0.05 + 4*0.1 + 8*0.2 + 12*0.25)).toFixed(2));
                cycleTotalUSDXgold.html((summXgoldUSD * (2*0.05 + 4*0.1 + 8*0.2 + 12*0.25)).toFixed(2));
                changeTotal();
            });

            

            function changeTotal() {
                $('#allsum .calculator-item-total-token').html((parseFloat(levelsTotalToken4.text()) + parseFloat(levelsTotalToken3.text()) + parseFloat(levelsTotalTokenXxx.text()) + parseFloat(levelsTotalTokenXgold.text()) ).toFixed(2));
                $('#allsum .calculator-item-total-fiat').html((parseFloat(levelsTotalUSD3.text()) + parseFloat(levelsTotalUSD4.text()) + parseFloat(levelsTotalUSDXxx.text()) + parseFloat(levelsTotalUSDXgold.text()) ).toFixed(2));
                $('#allcycle .calculator-item-total-token').html((parseFloat(cycleTotalToken3.text()) + parseFloat(cycleTotalToken4.text()) + parseFloat(cycleTotalTokenXxx.text()) + parseFloat(cycleTotalTokenXgold.text()) ).toFixed(2));
                $('#allcycle .calculator-item-total-fiat').html((parseFloat(cycleTotalUSD3.text()) + parseFloat(cycleTotalUSD4.text()) + parseFloat(cycleTotalUSDXxx.text()) + parseFloat(cycleTotalUSDXgold.text()) ).toFixed(2));
            }

            levelX3[0].click();
            levelX4[0].click();
            levelXxx[0].click();
            levelXgold[0].click();
        }
}
   
    
    //timer
    if(document.querySelector('.newPlatform-timer')) {
        const deadline = '2021-12-01T18:00Z';
            function getTimeRemaining(endTime) {
                const t = Date.parse(endTime) - Date.parse(new Date),
                    days = Math.floor(t / (1000 * 60 * 60 * 24)),
                    hours = Math.floor((t / (1000 * 60 * 60) % 24 )),
                    minutes = Math.floor((t / 1000 / 60) % 60 ),
                    seconds = Math.floor((t / 1000) % 60 );
                
                return {
                    'total':t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }
            function getZero(num) {
                if(num >=0 && num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }

            function setClock(selector, endTime) {
                var timer = document.querySelector(selector);
                var days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateClock, 1000);
                
                updateClock();

                function updateClock() {
                    var t = getTimeRemaining(endTime);
                    if(t.total > 0) {
                        days.innerHTML = getZero(t.days);
                        hours.innerHTML= getZero(t.hours);
                        minutes.innerHTML= getZero(t.minutes);
                        seconds.innerHTML= getZero(t.seconds);
                    }
                    else if(t.total == 0) {
                        location.reload();
                    }  
                    else {
                        clearInterval(timeInterval);
                        days.innerHTML= '00';
                        hours.innerHTML= '00';
                        minutes.innerHTML= '00';
                        seconds.innerHTML= '00';
                    }
                }
            }
            setClock('.newPlatform-timer', deadline);
        }

    // end timer
    
});



function storageTrigger(key, defaultValue) {
    let val = storage(key);
    if(val == '0') {
        val = '1';
    } else {
        val = '0';
    }
    return storage(key, val, defaultValue);
}

/* Cookie */
function storage(key, val, defaultValue) {
    let storage = getCookie('storage');
    if(!storage) {
        storage = {};
    } else {
        storage = JSON.parse(storage);
    }
    if(val) {
        // Значение по умолчанию если значение еще не установленно
        if(!storage.hasOwnProperty(key)) {
            val = defaultValue ? 1 : 0;
        }
        storage[key] = val;
        setCookie(
            'storage', 
            JSON.stringify(storage),
            {
                expires: 31104e3
            }
        );
        return val;
    }
    return storage.hasOwnProperty(key) ? storage[key] : null;
}

function cookie(key, val, opts) {
    if(val) {
        return setCookie(key, val, opts)
    }
    return getCookie(key);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    let defaultOptions = {
        path: '/',
    };
    options = Object.assign(defaultOptions, options);
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    } else {
        if(options.expires) {
            options.expires = new Date(Date.now() + Number.parseInt(options.expires));
        }
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}

(function() {
    'use strict';

    // Триггер значений
    $('[data-trigger_value]').click(function () {
        let el, sib, out, val, res;
        el = out = $(this);
        if(el.find('span').length) {
            out = el.find('span');
        }
        val = el.data('trigger_value').split('|');
        if(out.text() == val[0]) {
            res = val[1];
        } else {
            res = val[0];
        }
        out.text(res);

        sib = el.data('trigger_value_siblings');
        if(sib) {
            sib = $(sib);
            if(sib.find('span').length) {
                sib = sib.find('span');
            }
            sib.text(res);
        }
    });

    // Спойлер
    $('[data-spoiler]').click(function () {
        let key = $(this).data('spoiler');
        $(key).slideToggle(); 
    });

    // Translates
    window.l = function l(key) {
        if(!config || !config.lang || !config.lang.hasOwnProperty(key)) {
            return 'no translate';
        }
        return config.lang[key];
    };

    // Copy text
    window.copyText = function(value) {
        var s = document.createElement('input');
        s.value = value;
        document.body.appendChild(s);

        if(navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            s.contentEditable = true;
            s.readOnly = false;
            var range = document.createRange();
            range.selectNodeContents(s);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            s.setSelectionRange(0, 999999);
        }
        else {
            s.select();
        }
        try {
            s.select();
            document.execCommand('copy');
        }
        catch (err) {
            console.log(err.message);
        }
        s.remove();
    };

  // Notices service
    // window.Notice = new Vue({
    //     el: '#Notice',
    //     template: `
    //         <div class="notice" v-if="items.length">
    //             <div class="notice__darken" v-if="item.darken"></div>
    //             <div class="notice__wrap" @mouseover.once="item.lifetime > 0 ? (item.lifetime = 0) || clearTimeout(item._timeout) : null" :style="{width: item.width + 'px'}" :class="[item.type, 'notice__wrap_x-' + item.x, 'notice__wrap_y-' + item.y]" :key="item">
    //                 <i class="notice__icon fa" v-if="item.icon" :class="['fa-' + item.icon]"></i>
    //                 <div class="notice__body">
    //                     <div class="notice__title" v-if="item.title" v-html="item.title"></div>
    //                     <div v-if="item.text" v-html="item.text"></div>
    //                     <div class="notice__btns">
    //                         <button v-for="(v, k) in item.buttons" @click="v(item) !== false ? close(item) : null" v-text="k"></button>
    //                     </div>
    //                 </div>
    //                 <div class="notice__close" v-if="item.canclose" @click="close(item)"> <i class="icon-remove"></i></div>
    //                 <div v-if="item.lifetime > 0" class="notice__progress" :style="{animation: 'notice__progress_anim ' + (item.lifetime / 1000) + 's linear'}"></div>
    //             </div>
    //         </div>
    //     `,
    //     data: {
    //         items: []
    //     },
    //     mounted() {
    //         let s = document.createElement('style');
    //         s.innerHTML = `
    //             .notice {}
    //                 .notice__darken { position:fixed; top:0; left:0; z-index:100000; width:100%; height:100%; background:rgba(0,0,0,0.5); }
    //                     .notice__wrap.primary { background:#39b8d4; color:#fff; }
    //                     .notice__wrap.secondary { background:#39b8d4; color:#fff; }
    //                     .notice__wrap.success { background: #39b8d4; color:#fff; }
    //                     .notice__wrap.error { background:#c03d3d; color:#fff; }
    //                     .notice__wrap.warning { background:#39b8d4; color:#fff; }
    //                 .notice__close { margin-left: auto;}
    //                     .notice__close:hover { opacity: 0.7}
    //                 .notice__icon { margin-right: 10px;}
    //                 .notice__body {  }
    //                     .notice__icon ~ .notice__body {  }
    //                 .notice__title { font-size:15px; font-weight:600; margin:0 0 5px; }
    //                 .notice__btns > * { margin:10px 0 0; border:1px solid rgba(0,0,0,0.3); cursor:pointer; background:#fff; box-shadow:0 1px 4px rgba(0,0,0,.1); color:#000; padding:7px 20px; border-radius:2px; transition:0.2s; }
    //                     .notice__btns > *:hover { box-shadow:0 1px 4px rgba(0,0,0,.2); }
    //                 .notice__progress { position:absolute; bottom:0; left:0; height:5px; width:100%; background:rgba(0,0,0,0.3); }
    //                     @keyframes notice__progress_anim {0% { width:100%; } 100% { width:0%; } }
    //         `;
    //         document.head.appendChild(s);
    //     },
    //     computed: {
    //         item() { return this.items[this.items.length - 1]; }
    //     },
    //     methods: {
    //         show(text, params) {
    //             let item = Object.assign({x: 'center', y: 'top', type: '', icon: '', text: text, title: '', buttons: {}, lifetime: 5000, canclose: true, darken: false}, params || {});
    //             this.items.push(item);
    //             if(item.lifetime > 0) item._timeout = setTimeout(() => { this.close(item); }, item.lifetime);
    //         },
    //         close(item) {
    //             if(item._timeout) clearTimeout(item._timeout);
    //             this.items.splice(this.items.indexOf(item), 1);
    //         },
    //         info(msg) { this.show(msg, {type: 'primary', icon: 'info-circle'}); },
    //         success(msg) { this.show(msg, {type: 'success', icon: 'check-circle'}); },
    //         error(msg) { this.show(msg, {type: 'error', icon: 'ban'}); },
    //         warning(msg) { this.show(msg, {type: 'warning', icon: 'exclamation-circle'}); },
    //         alert(msg, title) { this.show(msg, {x: 'center', y: 'top', title: title || location.host, lifetime: 0, buttons: {OK: () => {}}}); },
    //     }
    // });

    jQuery.fn.elapsedTime = function (selector, source, options = {}) {
        var options = jQuery.extend({
            lang: {
                years:   ['год', 'года', 'лет'],
                months:  ['месяц', 'месяца', 'месяцев'],
                days:    ['день', 'дня', 'дней'],
                hours:   ['час', 'часа', 'часов'],
                minutes: ['минута', 'минуты', 'минут'],
                seconds: ['секунда', 'секунды', 'секунд'],
                end: " назад",
                freshly: "только что",
            },
            plurar:  function(n) {
                return (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
            },
            intervalUpdate: 1,
        }, options);
        options.intervalUpdate *= 1e3;

        var timeDifference = function(end, begin) {
            if (end < begin) {
                return false;
            }
            var difference = {
                seconds: [end.getSeconds() - begin.getSeconds(), 60],
                minutes: [end.getMinutes() - begin.getMinutes(), 60],
                hours:   [end.getHours()   - begin.getHours()  , 24],
                days:    [end.getDate()    - begin.getDate()   , new Date(begin.getYear(), begin.getMonth() + 1, 0).getDate()],
                months:  [end.getMonth()   - begin.getMonth()  , 12],
                years:   [end.getYear()    - begin.getYear()   , 0]
            };
            if(difference.years[0] != 0) {
                delete (difference.days);   
                delete (difference.hours);   
                delete (difference.minutes);
                delete (difference.seconds);
            }
            else if(difference.months[0] != 0) { 
                delete (difference.hours);  
                delete (difference.minutes); 
                delete (difference.seconds);
            }
            else if(difference.days[0] != 0) {
                delete (difference.minutes);
                delete (difference.seconds);
            }
            else if(difference.hours[0] != 0) {
                delete (difference.seconds);
            } 
            else if(difference.minutes[0] != 0) {
                delete (difference.seconds);
            }
            var result = new Array();
            var flag = false;
            for (let i in difference) {
                if (flag) {
                    difference[i][0]--;
                    flag = false;
                }     
                if (difference[i][0] < 0) {
                    flag = true;
                    difference[i][0] += difference[i][1];
                }
                if (!difference[i][0]) {
                    continue;
                }
                result.push(difference[i][0] + ' ' + options.lang[i][options.plurar(difference[i][0])]);
            }
            return result.reverse().join(' ');
        };
        var elapsedTime = function () {
            var need_to_time_update = $(selector);
            if(need_to_time_update.length > 0) {
                need_to_time_update.each(function(i) {
                    var date = need_to_time_update.eq(i).attr(source).toString().split(",");
                    if(!date[5]) {
                        date[5] = 0;
                    }
                    var s = timeDifference(
                        new Date(), 
                        new Date(
                            date[0],
                            date[1] - 1,
                            date[2],
                            date[3],
                            date[4],
                            date[5]
                        )
                    );
                    if (s.length) {
                        need_to_time_update.eq(i).html(s+options.lang.end);
                    }
                    else {
                        need_to_time_update.eq(i).html(options.lang.freshly);
                    }
                });
            }
        };

        elapsedTime();
        setInterval(elapsedTime, options.intervalUpdate);
    };

    $("body").elapsedTime(
        '.elapsedTime',
        'data-elapse_time',
        {
            lang: {
                years:   [
                    l('elt-years_0'), 
                    l('elt-years_1'), 
                    l('elt-years_2')
                ],
                months:  [
                    l('elt-months_0'), 
                    l('elt-months_1'), 
                    l('elt-months_2')
                ],
                days:    [
                    l('elt-days_0'),
                    l('elt-days_1'),
                    l('elt-days_2'),
                ],
                hours:   [
                    l('elt-hours_0'),
                    l('elt-hours_1'),
                    l('elt-hours_2'),
                ],
                minutes: [
                    l('elt-minutes_0'),
                    l('elt-minutes_1'),
                    l('elt-minutes_2'),
                ],
                seconds: [
                    l('elt-seconds_0'),
                    l('elt-seconds_1'),
                    l('elt-seconds_2'),
                ],
                end: l('elt-end'),
                freshly: l('elt-freshly'),
            }
        }
    );
})();

