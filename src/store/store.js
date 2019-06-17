import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    methods: [
      { id: 1,
        title: 'test methode',
        category: 'transfer',
        subCategory: 'Email',
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed: 6,
        doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
        klantresultaten: [
          {
            naam: 'Klant',
            data: {
              ROI: 123, // in percentage
              Opbrengsten: 400, // in euro's
              marge: 34, // in percentage
              conversieRatio: 23, // in percentage
              implementatietijd: 24, // in work hours
              doorlooptijd: 20, // in work days
              kosten: 419 // in euro's
            }
          }, {
            naam: 'Klant',
            data: {
              ROI: 91, // in percentage
              Opbrengsten: 300, // in euro's
              marge: 5, // in percentage
              conversieRatio: 42, // in percentage
              implementatietijd: 32, // in work hours
              doorlooptijd: 25, // in work days
              kosten: 387 // in euro's
            }
          }, {
            naam: 'klant',
            data: {
              ROI: 200, // in percentage
              Opbrengsten: 200, // in euro's
              marge: 21, // in percentage
              conversieRatio: 21, // in percentage
              implementatietijd: 20, // in work hours
              doorlooptijd: 30, // in work days
              kosten: 374 // in euro's
            }
          }
        ]
      },
      { id: 2,
        title: 'Methodetje',
        category: 'visibility',
        subCategory: 'Instagram',
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed: 6,
        doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
        klantresultaten: [
          {
            naam: 'Klant',
            data: {
              ROI: 123, // in percentage
              Opbrengsten: 400, // in euro's
              marge: 34, // in percentage
              conversieRatio: 23, // in percentage
              implementatietijd: 24, // in work hours
              doorlooptijd: 20, // in work days
              kosten: 419 // in euro's
            }
          }, {
            naam: 'Klant',
            data: {
              ROI: 91, // in percentage
              Opbrengsten: 300, // in euro's
              marge: 5, // in percentage
              conversieRatio: 42, // in percentage
              implementatietijd: 32, // in work hours
              doorlooptijd: 25, // in work days
              kosten: 387 // in euro's
            }
          }, {
            naam: 'klant',
            data: {
              ROI: 200, // in percentage
              Opbrengsten: 200, // in euro's
              marge: 21, // in percentage
              conversieRatio: 21, // in percentage
              implementatietijd: 20, // in work hours
              doorlooptijd: 30, // in work days
              kosten: 374 // in euro's
            }
          }
        ]
      },
      { id: 3,
        title: 'Nummertje 3',
        category: 'focus',
        subCategory: 'Persona\'s',
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.',
        timesUsed: 6,
        doelgroep: ['Doelgroep 1', 'Doelgroep 2'],
        klantresultaten: [
          {
            naam: 'Klant',
            data: {
              ROI: 123, // in percentage
              Opbrengsten: 400, // in euro's
              marge: 34, // in percentage
              conversieRatio: 23, // in percentage
              implementatietijd: 24, // in work hours
              doorlooptijd: 20, // in work days
              kosten: 419 // in euro's
            }
          }, {
            naam: 'Klant',
            data: {
              ROI: 91, // in percentage
              Opbrengsten: 300, // in euro's
              marge: 5, // in percentage
              conversieRatio: 42, // in percentage
              implementatietijd: 32, // in work hours
              doorlooptijd: 25, // in work days
              kosten: 387 // in euro's
            }
          }, {
            naam: 'klant',
            data: {
              ROI: 200, // in percentage
              Opbrengsten: 200, // in euro's
              marge: 21, // in percentage
              conversieRatio: 21, // in percentage
              implementatietijd: 20, // in work hours
              doorlooptijd: 30, // in work days
              kosten: 374 // in euro's
            }
          }
        ]
      }
    ]  
  },
  getters: {
    // getAverage (state) {
    //   return state.methods.map(method => {
    //   })
    // }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementBy (state, payload) {
      state.count += payload.amount
    },
    // calculateAverages: function (state) {
      

    //   let sum = 0
    //   let results = this.$store.methods.klantresultaten
    //   console.log(this.$store.methods.klantresultaten)
    //   let divider = results.length
    //   for (let i = 0; i < divider; i++) sum += results[i][name]

    //   decimalPlaces = Math.floor(decimalPlaces || 0)
    //   if (decimalPlaces) {
    //       let avg = '0'.repeat(decimalPlaces) + Math.round(sum / divider * Math.pow(10, decimalPlaces))
    //       console.log(avg)
    //       return parseFloat(avg.slice(0, decimalPlaces * -1) + '.' + avg.slice(decimalPlaces * -1))
    //   } else {
    //       return Math.round(sum / divider)
    //   }
    // }
  },
  actions: {
    // Als iemand een 'Nieuwe methode' toevoegt, wordt dat hier afgehandeld
  }
});

store.commit('calculateAverages')

export default store