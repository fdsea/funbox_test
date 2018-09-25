class CardsThings {
  constructor() {
    this.cards = [...document.querySelectorAll('.card')];
    this.disableDetecting();
    this.setValues();
    this.setActiveClass();
  }
  setActiveClass() {
    this.cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        card.classList.toggle('card--isActive');
        if(card.classList.contains('card--disabled')) {
          return false;
        }
        if(card.classList.contains('card--isActive')) {
          this.setCurrentInfo(card, 'selected');
        }else{
          this.setCurrentInfo(card, 'default');
        }
      });
    });
  }
  setValues() {
    this.cards.forEach(card => {
      let container = card.querySelector('.card__disable-info span');
      let content = card.querySelector('.card__subtitle').textContent;
      container.innerHTML = content;

      let c = card.querySelector('.card__selected-info');
      c.innerHTML = card.getAttribute('data-select');
    });
  }
  disableDetecting() {
    this.cards.forEach(card => {
      if(card.classList.contains('card--disabled')) {
        this.setCurrentInfo(card, 'disable');
      }
    });
  }
  setCurrentInfo(card, flag) {
    let def = card.querySelector('.card__default-info');
    let sel = card.querySelector('.card__selected-info');
    let dis = card.querySelector('.card__disable-info');
    if (flag === 'disable') {
      def.classList.add('card--hide-info');
      if(dis.classList.contains('card--hide-info')) {
        dis.classList.remove('card--hide-info');
      }
      sel.classList.add('card--hide-info');
    }
    else if(flag === 'default') {
      if(def.classList.contains('card--hide-info')) {
        def.classList.remove('card--hide-info');
      }
      sel.classList.add('card--hide-info');
      dis.classList.add('card--hide-info');
    }else if(flag === 'selected') {
      def.classList.add('card--hide-info');
      if(sel.classList.contains('card--hide-info')) {
        sel.classList.remove('card--hide-info');
      }
      dis.classList.add('card--hide-info');
    }
  }
}


module.exports = CardsThings;
