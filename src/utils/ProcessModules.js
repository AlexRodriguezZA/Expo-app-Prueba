
function filterArrayByModules(inputArray, modulesToInclude, invert = false) {
  return inputArray.filter((item) =>
    invert
      ? !modulesToInclude.includes(item.module)
      : modulesToInclude.includes(item.module)
  );
}

function addRoutesToItems(items) {
  return items.map((item) => ({
    ...item,
    routes: [],
  }));
}


function filterArrayByCondition(inputArray, condition) {
  return inputArray.filter((obj) =>
    obj.setting_module_config?.route.includes(condition)
  );
}

function addRoutesFromFilteredArray2(mainArray, filteredArray2) {
  return mainArray.map((item) => {
    if (
      item.module === "GENERAL" ||
      item.module === "DASHBOARD_TIME_ATTENDANCE"
    ) {
      const condition =
        item.module === "GENERAL"
          ? "config"
          : item.module === "DASHBOARD_TIME_ATTENDANCE"
          ? "Time"
          : "";

      const objectsToAdd = filterArrayByCondition(filteredArray2, condition);
      item.routes = [...item.routes, ...objectsToAdd];
    }

    return item;
  });
}


export function processModules(modulesArray) {
  const array = modulesArray.sort((a, b) => a.order - b.order);
  const filteredArray = array.filter((a) => a.is_render_mobile === 1);

  const modules = [
    "MYINTELLI",
    "GENERAL",
    "DASHBOARD_TIME_ATTENDANCE",
    "REPORT",
  ];

  const filteredResult = filterArrayByModules(filteredArray, modules);
  const invertedResult = filterArrayByModules(filteredArray, modules, true);


  //Agreamos el atributo "Routes: []"
  const resultWithRoutes = addRoutesToItems(filteredResult);
  const finalResult = addRoutesFromFilteredArray2(resultWithRoutes, invertedResult);


  return finalResult;
}
