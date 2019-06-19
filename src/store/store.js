import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    methods: [
      { id: 1,
        title: 'test methode',
        category: 'Transfer',
        subCategory: ['Email'],
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        timesUsed: 6,
        expertise: ['lolbroek', 'tester'],
        doelgroep: ['Doelgroeep 1', 'Doelgrooep 2'],
        klantresultaten: [
          {
            naam: 'Klant 1',
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
            naam: 'Klant 2',
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
            naam: 'klant 3',
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
        category: 'Visibility',
        subCategory: ['Instagram'],
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        timesUsed: 6,
        expertise: ['Designerjes', 'programmeur'],
        doelgroep: ['doelgroep', 'Doelgroepert 2'],
        klantresultaten: [
          {
            naam: 'Klant 4',
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
            naam: 'Klant 5',
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
            naam: 'klant 6',
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
        category: 'Focus',
        subCategory: ['Persona\'s'],
        beschrijving: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        timesUsed: 6,
        expertise: ['direteur', 'marketing'],
        doelgroep: ['Doelgroepje', 'doelgroep'],
        klantresultaten: [
          {
            naam: 'Klant 7',
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
            naam: 'Klant 8',
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
            naam: 'klant 9',
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
    calculateAverages: function (state) {
      
      for(const method of state.methods){ // Loop door alle methodes heen
        var names = ['ROI','Opbrengsten', 'marge', 'conversieRatio','implementatietijd','doorlooptijd','kosten']
        for(const name of names){ // Doe per methode, ROI en opbrengsten berekenen
          let divider = method.klantresultaten.length // Vraag aantal op in methode
          if(name == 'Kosten' || name == 'Opbrengsten') {
            var decimalPlaces = 2;
          }else{
            var decimalPlaces = 0;
          }
          var sum = 0
          for(const result of method.klantresultaten){
            sum += result.data[name]
          }
          if (decimalPlaces > 0) {
              var value = sum / divider
              method['gem' + name] = parseFloat(value.toFixed(2))
              //let avg = '0'.repeat(decimalPlaces) + Math.round(sum / divider * Math.pow(10, decimalPlaces))
              //method[name] = parseFloat(avg.slice(0, decimalPlaces * -1) + '.' + avg.slice(decimalPlaces * -1))
          } else {
              // console.log(sum)
              method['gem' + name] = Math.round(sum / divider)
          }
        }
      }

    }
  },
  actions: {
    // Als iemand een 'Nieuwe methode' toevoegt, wordt dat hier afgehandeld
  }
});

store.commit('calculateAverages')

export default store