"use strict";
(() => {
  // index.ts
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#navBtn");
    button.addEventListener("click", function() {
      const heading = document.querySelector("#heading");
      if (!heading)
        return;
      heading.textContent = "Built by file";
    });
  });
})();
//# sourceMappingURL=index.js.map
