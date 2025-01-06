// Инициализация t396
function t396Init(id) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      window.t_onFuncLoad("t396_init", () => {
        t396_init(id);
      });
    });
  }
}

// Инициализация t_menuburger
function tMenuburgerInit(recid) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      window.t_onFuncLoad("t_menuburger_init", () => {
        const rec = document.querySelector("#rec" + recid);
        if (!rec) return;
        const burger = rec.querySelector(".t-menuburger");
        if (!burger) return;

        burger.addEventListener("click", () => {
          burger.classList.toggle("t-menuburger-opened");
        });

        const menu = rec.querySelector('[data-menu="yes"]');
        if (menu) {
          menu.addEventListener("clickedAnchorInTooltipMenu", () => {
            burger.classList.remove("t-menuburger-opened");
          });
        }
      });
    });
  }
}

// Инициализация t282 функций
function t282Functions(id) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      window.t_onFuncLoad("t282_showMenu", () => {
        t282_showMenu(id);
      });
      window.t_onFuncLoad("t282_changeSize", () => {
        t282_changeSize(id);
        window.addEventListener(
          "resize",
          t_throttle(() => t282_changeSize(id))
        );
      });
      window.t_onFuncLoad("t282_highlight", () => {
        t282_highlight();
      });
      window.t_onFuncLoad("t282_changeBgOpacityMenu", () => {
        t282_changeBgOpacityMenu(id);
        window.addEventListener(
          "scroll",
          t_throttle(() => t282_changeBgOpacityMenu(id))
        );
      });
    });
  }
}

// Установка активного элемента меню
function setActiveMenuItem() {
  if (process.client) {
    const url = document.location.pathname;
    const activeElem = document.querySelector(`[href="${url}"]`);
    if (activeElem) {
      activeElem.closest(".t396__elem").classList.add("active");
    }
  }
}

// Инициализация t396 для нескольких id
function t396InitMultiple(ids) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    ids.forEach((id) => {
      window.t_onReady(() => {
        window.t_onFuncLoad("t396_init", () => {
          t396_init(id);
        });
      });
    });
  }
}

// Инициализация t354 с прокруткой
function t354CheckPosition(id) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      setTimeout(() => {
        window.addEventListener(
          "scroll",
          t_throttle(() => {
            window.t_onFuncLoad("t354_checkPosition", () => {
              t354_checkPosition(id);
            });
          })
        );
      }, 500);
    });
  }
}

// Инициализация t585 (аккордеон)
function t585Init(id) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      window.t_onFuncLoad("t585_init", () => {
        t585_init(id);
      });
    });
  }
}

// Инициализация t367 (автоматическая настройка)
function t367AutoInit(id) {
  if (
    process.client &&
    typeof window.t_onReady === "function" &&
    typeof window.t_onFuncLoad === "function"
  ) {
    window.t_onReady(() => {
      window.t_onFuncLoad("t367_autoInit", () => {
        t367_autoInit(id);
      });
    });
  }
}

// jQuery скрипт для работы с аккордеоном и ZeroBlock
function initializeAccordionAndZeroBlock() {
  if (process.client) {
    $(document).ready(() => {
      const ZeroID = "#rec815754388"; // Zero
      const AccoRD = "#rec815997273"; // TX16N

      $('[href="#mainpic"]').addClass("mainpic");
      $(AccoRD).appendTo(".accordion");
      $(".accordion").closest(".tn-elem").addClass("accordion-wrapper");

      const ZeroBack = `${ZeroID} .t396__artboard , ${ZeroID} .t396__carrier , ${ZeroID} .t396__filter`;
      let oldheight = $(AccoRD + " .t585__opened")
        .siblings(".t585__content")
        .height();

      if ($(AccoRD + " .t585__header").hasClass("t585__opened")) {
        let cohnheight = $(AccoRD + " .t585__opened")
          .siblings(".t585__content")
          .height();
        setTimeout(() => {
          $(".mainpic")
            .closest(".tn-elem")
            .animate({ height: `+=${cohnheight}` }, 300);
          $(ZeroBack).animate({ height: `+=${cohnheight}` }, 0);
        }, 100);
      }

      $(AccoRD + " .t585__header").click(() => {
        setTimeout(() => {
          let cohnheight = 0;
          let movey = 0;
          $(AccoRD + " .t585__opened")
            .siblings(".t585__content")
            .each(function () {
              cohnheight += $(this).height();
            });
          if (cohnheight > oldheight) {
            movey = cohnheight - oldheight;
            $(".mainpic")
              .closest(".tn-elem")
              .animate({ height: `+=${movey}` }, 150)
              .promise()
              .done(() => {
                $(ZeroBack).animate({ height: `+=${movey}` }, 300);
              });
          } else {
            movey = oldheight - cohnheight;
            $(".mainpic")
              .closest(".tn-elem")
              .animate({ height: `-=${movey}` }, 150)
              .promise()
              .done(() => {
                $(ZeroBack).animate({ height: `-=${movey}` }, 300);
              });
          }
          oldheight = cohnheight;
        }, 250);
      });

      const target = document.querySelector(".accordion-wrapper");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "style") {
            $(AccoRD + " .t585__header").removeClass("t585__opened");
            oldheight = 0;
            $(AccoRD + " .t585__content").hide();
            $(ZeroBack).css("height", "");
          }
        });
      });

      observer.observe(target, { attributes: true });
    });
  }
}
export {
  setActiveMenuItem,
  t396Init,
  t354CheckPosition,
  t396InitMultiple,
  t585Init,
  t367AutoInit,
  initializeAccordionAndZeroBlock,tMenuburgerInit,t282Functions
};
