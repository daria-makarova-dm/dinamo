import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return {
      count: 23,
      type: 'cards',
      categories: {
        key: 'categories',
        items: [
          {
            id: 1,
            title: 'Верхняя одежда',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 2,
            title: 'Свитшоты и толстовки',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 3,
            title: 'Футболки и поло',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 4,
            title: 'Борюки и шорты',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 5,
            title: 'Спортивные костюмы',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 6,
            title: 'Аксессуары',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          },
          {
            id: 7,
            title: 'Обувь',
            items: [
              {
                id: 1,
                title: 'Футболки и олимпийки'
              },
              {
                id: 2,
                title: 'Штаны'
              },
              {
                id: 3,
                title: 'Комплекты'
              }
            ]
          }
        ]
      },
      selected: [], // key = categories-:id-:id, value = title
      forwhom: {
        key: 'forwhom',
        items: [
          {
            id: 1,
            title: 'Мужчины'
          },
          {
            id: 2,
            title: 'Женщины'
          },
          {
            id: 3,
            title: 'Дети'
          }
        ]
      },
      special: {
        key: 'special',
        items: [
          {
            id: 1,
            title: 'Со скидкой'
          },
          {
            id: 2,
            title: 'Новинки'
          },
          {
            id: 3,
            title: 'Хит'
          }
        ]
      },
      сollection: {
        key: 'сollection',
        items: [
          {
            id: 1,
            title: 'Игровая форма 2020/2021'
          },
          {
            id: 2,
            title: 'British Tour 1945'
          },
          {
            id: 3,
            title: 'Яшин'
          },
          {
            id: 4,
            title: 'Осень/зима 2020–2021'
          },
          {
            id: 5,
            title: 'Весна/лето 2020'
          },
          {
            id: 6,
            title: 'Что-то еще 1'
          },
          {
            id: 7,
            title: 'Что-то еще 2'
          },
          {
            id: 8,
            title: 'Что-то еще 3'
          }
        ]
      },
      clothingSize: {
        key: 'clothingSize',
        items: [
          {
            id: 1,
            title: 'XS'
          },
          {
            id: 2,
            title: 'S'
          },
          {
            id: 3,
            title: 'M'
          },
          {
            id: 4,
            title: 'L'
          },
          {
            id: 5,
            title: 'XL'
          },
          {
            id: 6,
            title: '46'
          },
          {
            id: 7,
            title: '48'
          },
          {
            id: 8,
            title: '50'
          },
          {
            id: 9,
            title: '52'
          },
          {
            id: 10,
            title: '54'
          }
        ]
      },
      shoeSize: {
        key: 'shoeSize',
        items: [
          {
            id: 1,
            title: '36'
          },
          {
            id: 2,
            title: '37'
          },
          {
            id: 3,
            title: '38'
          },
          {
            id: 4,
            title: '39'
          },
          {
            id: 5,
            title: '40'
          },
          {
            id: 6,
            title: '41'
          },
          {
            id: 7,
            title: '42'
          },
          {
            id: 8,
            title: '43'
          },
          {
            id: 9,
            title: '44'
          },
          {
            id: 10,
            title: '45'
          }
        ]
      },
      color: {
        key: 'color',
        items: [
          {
            id: 1,
            color: '000000'
          },
          {
            id: 2,
            color: '0959A1'
          },
          {
            id: 3,
            color: 'FFFFFF'
          },
          {
            id: 4,
            color: 'CE0013'
          },
          {
            id: 5,
            color: 'BDBDBD'
          },
          {
            id: 6,
            color: 'BFA069'
          }
        ]
      },
      price: {
        min: 100,
        max: 10000,
        currentMin: 1000,
        currentMax: 7500
      }
    }
  },
  getters,
  actions,
  mutations
}
