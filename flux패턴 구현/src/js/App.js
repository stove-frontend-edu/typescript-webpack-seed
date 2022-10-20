import { Component } from "./core/Component.js";
import { storeA } from "./storeA.js";

export class App extends Component {
  template() {
    return `
    <nav>
      <button id="coffee" class="cafe-menu">
        coffee
      </button>
      <button
        id="non coffee"
        class="cafe-menu"
      >
        non coffee
      </button>
      <button id="beverage" class="cafe-menu">
        beverage
      </button>
    </nav>
    <div>
    ${storeA.state.menu}
    </div>
    `;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector("nav").addEventListener("click", (e) => {
      const isNavButton = e.target.classList.contains("cafe-menu");
      if (isNavButton) {
        storeA.commit("SET_CAFEMENU", e.target.id);
      }
    });
  }
}
