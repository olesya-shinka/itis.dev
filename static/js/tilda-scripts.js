function t_onReady(func) {
  if (document.readyState != "loading") {
    func();
  } else {
    document.addEventListener("DOMContentLoaded", func);
  }
}

function t_onFuncLoad(funcName, okFunc, time) {
  if (typeof window[funcName] === "function") {
    okFunc();
  } else {
    setTimeout(function () {
      t_onFuncLoad(funcName, okFunc, time || 100);
    }, time || 100);
  }
}

function t_throttle(fn, threshold, scope) {
  return function () {
    fn.apply(scope || this, arguments);
  };
}

function t396_init(e) {
  var i,
    t,
    n,
    o,
    r,
    a = document.getElementById("rec" + e),
    l = a ? a.querySelector(".t396") : null,
    d = a ? a.querySelector(".t396__artboard") : null;
  d &&
    (t396_initTNobj(e, d),
    t396__initOnlyScalable(),
    (r = t396_detectResolution(e)),
    (i = document.getElementById("allrecords")),
    t396_switchResolution(e, r),
    (t = "window" === t396_ab__getFieldValue(d, "upscale")),
    t396__setGlobalScaleVariables(e, r, t),
    t396_updateTNobj(e),
    t396_artboard_build("", e),
    (n = "ontouchend" in document),
    window.addEventListener("resize", function () {
      d.classList.add("t396_resizechange"),
        t396_waitForFinalEvent(
          function () {
            window.t396__isMobile || n
              ? document.documentElement.clientWidth !==
                  window.tn_window_width &&
                a &&
                t396_isBlockVisible(a) &&
                (t396_doResize(e), d.classList.remove("t396_resizechange"))
              : a &&
                t396_isBlockVisible(a) &&
                (t396_doResize(e), d.classList.remove("t396_resizechange"));
          },
          500,
          "resizeruniqueid" + e
        );
    }),
    window.addEventListener("orientationchange", function () {
      t396_waitForFinalEvent(
        function () {
          a && t396_isBlockVisible(a) && t396_doResize(e);
        },
        600,
        "orientationuniqueid" + e
      );
    }),
    window.addEventListener("load", function () {
      t396_allelems__renderView(d), t396_allgroups__renderView(d);
      var t = d ? window.getComputedStyle(d).getPropertyValue("overflow") : "";
      "function" == typeof t_lazyload_update &&
        "auto" === t &&
        d &&
        d.addEventListener(
          "scroll",
          t_throttle(function () {
            var t = i ? i.getAttribute("data-tilda-lazy") : null;
            ("y" !== window.lazy && "yes" !== t) ||
              t_onFuncLoad("t_lazyload_update", function () {
                t_lazyload_update();
              });
          }, 500)
        ),
        "" !== window.location.hash &&
          "visible" === t &&
          (d && (d.style.overflow = "hidden"),
          setTimeout(function () {
            d && (d.style.overflow = "visible");
          }, 1));
    }),
    window.tildaMembers &&
      "MutationObserver" in window &&
      (o = new MutationObserver(function (t) {
        t.forEach(function (t) {
          "attributes" === t.type &&
            "class" === t.attributeName &&
            t.target.classList.contains("tlk-courses_page") &&
            (t396_doResize(e), o.disconnect());
        });
      })).observe(document.body, { attributes: !0 }),
    document.querySelector(".t830") &&
      t_onReady(function () {
        ["t830__allrecords_padd", "t830__allrecords_padd-small"].some(function (
          t
        ) {
          return i.classList.contains(t);
        })
          ? t396_doResize(e)
          : i.addEventListener("allRecPaddingInit", function () {
              t396_doResize(e);
            });
      }),
    a &&
      l &&
      d &&
      "yes" === a.getAttribute("data-connect-with-tab") &&
      l.addEventListener("displayChanged", function () {
        t396_allelems__renderView(d),
          t396_allgroups__renderView(d),
          t396_doResize(e);
      }),
    setTimeout(function () {
      a &&
        a.closest("#allrecordstable") &&
        l &&
        d &&
        l.addEventListener("displayChanged", function () {
          t396_allelems__renderView(d),
            t396_allgroups__renderView(d),
            t396_doResize(e);
        });
    }, 1e3),
    (r = !!document.querySelector(".t635__textholder")),
    a &&
      r &&
      l &&
      d &&
      l.addEventListener("animationInited", function () {
        t396_allelems__renderView(d),
          t396_allgroups__renderView(d),
          t396_doResize(e);
      }),
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      l &&
      l.classList.add("t396_safari"),
    (r = i ? "edit" === i.getAttribute("data-tilda-mode") : null),
    t &&
      !r &&
      t_onFuncLoad("t396_scaleBlock", function () {
        t396_scaleBlock(e);
      }),
    r ||
      "y" !== t396_ab__getFieldValue(d, "fixed-need-js") ||
      t_onFuncLoad("t396__processFixedArtBoard", function () {
        t396__processFixedArtBoard(d);
      }),
    t396__processAbsoluteArtBoard(d),
    t396__processTopShift(d, e, !1));
}

function t396_initialScale(t) {
  t = document.getElementById("rec" + t);
  if (t) {
    const artboard = t.querySelector(".t396__artboard");
    if (artboard) {
      const viewportWidth = document.documentElement.clientWidth;
      const breakpoints = artboard.getAttribute("data-artboard-screens")
        ? artboard
            .getAttribute("data-artboard-screens")
            .split(",")
            .map((x) => parseInt(x, 10))
        : [320, 480, 640, 960, 1200];
      const currentBreakpoint = breakpoints.reduce((prev, curr) =>
        curr <= viewportWidth ? curr : prev
      );

      const scale = parseFloat((viewportWidth / currentBreakpoint).toFixed(3));
      [
        artboard,
        artboard.querySelector(".t396__carrier"),
        artboard.querySelector(".t396__filter"),
      ]
        .filter(Boolean)
        .forEach((el) => {
          el.style.height =
            Math.floor(
              parseInt(artboard.getAttribute("data-artboard-height"), 10) *
                scale
            ) + "px";
        });

      t396_scaleInitial__getElementsToScale(artboard).forEach((el) => {
        el.style.zoom = scale;
      });
    }
  }
}

function t396_scaleInitial__getElementsToScale(t) {
  return Array.from(t.children).filter(
    (el) =>
      el.classList.contains("t396__elem") ||
      el.classList.contains("t396__group")
  );
}

function t396_getFieldValue(t, e, r, a) {
  const lastBreakpoint = a[a.length - 1];
  let value =
    r === lastBreakpoint
      ? t.getAttribute(`data-artboard-${e}`)
      : t.getAttribute(`data-artboard-${e}-res-${r}`);

  for (let i = 0; i < a.length; i++) {
    const bp = a[i];
    if (bp > r && !value) {
      value =
        bp === lastBreakpoint
          ? t.getAttribute(`data-artboard-${e}`)
          : t.getAttribute(`data-artboard-${e}-res-${bp}`);
      break;
    }
  }
  return value;
}
function t354_checkPosition(recid) {
  var rec = document.querySelector("#rec" + recid);
  if (!rec) return;
  var windowWidth = window.innerWidth;
  var screenMin = rec.getAttribute("data-screen-min");
  var screenMax = rec.getAttribute("data-screen-max");
  if (typeof screenMin === "string") {
    if (windowWidth < parseInt(screenMin, 10)) {
      return !0;
    }
  }
  if (typeof screenMax === "string") {
    if (windowWidth > parseInt(screenMax, 10)) {
      return !0;
    }
  }
  var openerLink = rec.querySelector(".t354__opener");
  if (!t354_isPopupRecVisible(openerLink)) return;
  var cookieName = openerLink.getAttribute("data-cookie-name");
  var cookieTime = openerLink.getAttribute("data-cookie-time");
  var cookieValue = "t354cookie";
  var multiplier = openerLink.getAttribute("data-trigger-position");
  var position = window.innerHeight * multiplier;
  var cookie = t354_readCookie(cookieName);
  var wrapperBlock = rec.querySelector(".t354");
  if (!wrapperBlock) return;
  if (cookie) {
    wrapperBlock.innerHTML = "";
  } else if (openerLink) {
    var scrollOffset = document.scrollingElement.scrollTop + position;
    var openerLinkOffset =
      openerLink.getBoundingClientRect().top + window.pageYOffset;
    if (scrollOffset >= openerLinkOffset) {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("click", !0, !1);
      openerLink.dispatchEvent(event);
      wrapperBlock.innerHTML = "";
      t354_createCookie(cookieName, cookieValue, cookieTime);
    }
  }
}
function t585_init(recId) {
  var rec = document.getElementById("rec" + recId);
  if (!rec) return;
  var accordion = rec.querySelectorAll(".t585__accordion")[0];
  var headers = rec.querySelectorAll(".t585__header");
  var undercuts = rec.querySelectorAll(".ql-undercut");
  var isLazy = document
    .getElementById("allrecords")
    .getAttribute("data-tilda-lazy");
  var accordionScroll;
  if (accordion) {
    accordionScroll = accordion.getAttribute("data-scroll-to-expanded");
    accordion = accordion.getAttribute("data-accordion");
  } else {
    accordion = "false";
    accordionScroll = "false";
  }
  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function () {
      var element = this;
      var container = element.nextElementSibling;
      var triggerButton = element.querySelector(".t585__trigger-button");
      var activeHeight = 0;
      var isAccordionDown = !1;
      if (triggerButton) {
        var isExpanded = triggerButton.getAttribute("aria-expanded") === "true";
        triggerButton.setAttribute("aria-expanded", !isExpanded);
        container.hidden = isExpanded;
      }
      if (element.classList.contains("t585__opened")) {
        element.classList.remove("t585__opened");
        t585_accordionHide(container);
      } else {
        if (accordionScroll === "true" && accordion === "true") {
          activeHeight = t585__getOldAction(rec);
          isAccordionDown = t585__getAccordionPosition(headers, element);
        }
        if (accordion === "true") t585_accordionAllHide(headers);
        element.classList.add("t585__opened");
        container.style.display = "block";
        var height = container.scrollHeight;
        container.style.maxHeight = "0px";
        setTimeout(function () {
          container.style.maxHeight = height + "px";
          if (accordionScroll === "true") {
            t585__calcHeight(element, container, activeHeight, isAccordionDown);
          }
        }, 0);
      }
      if (window.lazy === "y" || isLazy === "yes") {
        t_onFuncLoad("t_lazyload_update", function () {
          t_lazyload_update();
        });
      }
    });
  }
  for (var i = 0; i < undercuts.length; i++) {
    undercuts[i].addEventListener("click", function (event) {
      const target = event.target;
      const content = target.closest(".t585__content");
      const textBlock = target.closest(".t585__textwrapper");
      setTimeout(() => {
        content.style.maxHeight = textBlock.scrollHeight + "px";
      }, 0);
    });
  }
}
function t367_autoInit(recid) {
  var rec = document.querySelector("#rec" + recid);
  if (!rec) return;
  var screenMin = rec.getAttribute("data-screen-min");
  var screenMax = rec.getAttribute("data-screen-max");
  var windowWidth = window.innerWidth;
  if (typeof screenMin === "string") {
    if (windowWidth < parseInt(screenMin, 10)) {
      return !0;
    }
  }
  if (typeof screenMax === "string") {
    if (windowWidth > parseInt(screenMax, 10)) {
      return !0;
    }
  }
  var openerLink = rec.querySelector(".t367__opener");
  if (!t367_isPopupRecVisible(openerLink)) return;
  var linkhook = openerLink.getAttribute("href");
  if (!linkhook) return;
  var cookieName = openerLink.getAttribute("data-cookie-name");
  var cookieTime = openerLink.getAttribute("data-cookie-time");
  var cookieValue = "t367cookie";
  var cookie = t367_readCookie(cookieName);
  var timeout =
    parseInt(openerLink.getAttribute("data-trigger-time"), 10) * 1000;
  var wrapperBlock = rec.querySelector(".t367");
  if (!wrapperBlock) return;
  if (cookie) wrapperBlock.innerHTML = "";
  else if (openerLink) {
    setTimeout(function () {
      openerLink.click();
      wrapperBlock.innerHTML = "";
      t367_createCookie(cookieName, cookieValue, cookieTime);
    }, timeout);
  }
}
function t_menuburger_init(recid) {
  var rec = document.querySelector("#rec" + recid);
  if (!rec) return;
  var burger = rec.querySelector(".t-menuburger");
  if (!burger) return;
  var isSecondStyle = burger.classList.contains("t-menuburger_second");
  if (isSecondStyle && !window.isMobile && !("ontouchend" in document)) {
    burger.addEventListener("mouseenter", function () {
      if (burger.classList.contains("t-menuburger-opened")) return;
      burger.classList.remove("t-menuburger-unhovered");
      burger.classList.add("t-menuburger-hovered");
    });
    burger.addEventListener("mouseleave", function () {
      if (burger.classList.contains("t-menuburger-opened")) return;
      burger.classList.remove("t-menuburger-hovered");
      burger.classList.add("t-menuburger-unhovered");
      setTimeout(function () {
        burger.classList.remove("t-menuburger-unhovered");
      }, 300);
    });
  }
  burger.addEventListener("click", function () {
    if (
      !burger.closest(".tmenu-mobile") &&
      !burger.closest(".t450__burger_container") &&
      !burger.closest(".t466__container") &&
      !burger.closest(".t204__burger") &&
      !burger.closest(".t199__js__menu-toggler")
    ) {
      burger.classList.toggle("t-menuburger-opened");
      burger.classList.remove("t-menuburger-unhovered");
    }
  });
  var menu = rec.querySelector('[data-menu="yes"]');
  if (!menu) return;
  var menuLinks = menu.querySelectorAll(".t-menu__link-item");
  var submenuClassList = [
    "t978__menu-link_hook",
    "t978__tm-link",
    "t966__tm-link",
    "t794__tm-link",
    "t-menusub__target-link",
  ];
  Array.prototype.forEach.call(menuLinks, function (link) {
    link.addEventListener("click", function () {
      var isSubmenuHook = submenuClassList.some(function (submenuClass) {
        return link.classList.contains(submenuClass);
      });
      if (isSubmenuHook) return;
      burger.classList.remove("t-menuburger-opened");
    });
  });
  menu.addEventListener("clickedAnchorInTooltipMenu", function () {
    burger.classList.remove("t-menuburger-opened");
  });
}

export {
  t396_init,
  t_onReady,
  t_onFuncLoad,
  t_throttle,
  t396_initialScale,
  t396_scaleInitial__getElementsToScale,
  t396_getFieldValue,
  t354_checkPosition,
  t585_init,
  t367_autoInit,
  t_menuburger_init,
};
