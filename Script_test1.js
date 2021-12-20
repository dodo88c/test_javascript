


for (let step = 0; step < 5; step++) {

  sleep(1000)  
  .then(() => document.querySelector("body > ui-layout > div > et-layout-main > div > div.container-level2.layout-sidenav-expanded.layout-sidenav-closed > div.container-level3 > div.page-content > div > ng-view > div > div.w-portfolio-table.portfolio-page-type1-content-body.portfolio-open-trades-inner.head > div > div > div.e-btn.light.i-ptc-action.edit-extended.dropdown-menu.ng-scope.ng-isolate-scope.open > div > div > trade-button > div").click();
  .then(() => sleep(1000);
  .then(() => document.querySelector("#open-position-view > div.execution-head > div.execution-head-buttons.ng-scope > button:nth-child(1)").click();
  .then(() => sleep(1000);
  .then(() => document.querySelector("#open-position-view > div.execution-head > div.head-buttons-ph > a").click();

}




