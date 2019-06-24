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
        discription: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        expertise: ['lolbroek', 'tester'],
        targetAudience: ['Doelgroeep 1', 'Doelgrooep 2'],
        clientResults: [
          { 
            id: 1,
            name: 'Klant 1',
            data: {
              ROI: 123, // in percentage
              proceeds: 400, // in euro's
              margin: 34, // in percentage
              conversionRate: 23, // in percentage
              implementationTime: 24, // in work hours
              totalTime: 20, // in work days
              costs: 419 // in euro's
            }
          }, {
            id: 2,
            name: 'Klant 2',
            data: {
              ROI: 91, // in percentage
              proceeds: 300, // in euro's
              margin: 5, // in percentage
              conversionRate: 42, // in percentage
              implementationTime: 32, // in work hours
              totalTime: 25, // in work days
              costs: 387 // in euro's
            }
          }, {
            id: 3,
            name: 'klant 3',
            data: {
              ROI: 200, // in percentage
              proceeds: 200, // in euro's
              margin: 21, // in percentage
              conversionRate: 21, // in percentage
              implementationTime: 20, // in work hours
              totalTime: 30, // in work days
              costs: 374 // in euro's
            }
          }
        ]
      },
      { id: 2,
        title: 'Methodetje',
        category: 'Visibility',
        subCategory: ['Instagram'],
        discription: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        expertise: ['Designerjes', 'programmeur'],
        targetAudience: ['doelgroep', 'Doelgroepert 2'],
        clientResults: [
          { 
            id: 4,
            name: 'Klant 4',
            data: {
              ROI: 123, // in percentage
              proceeds: 400, // in euro's
              margin: 34, // in percentage
              conversionRate: 23, // in percentage
              implementationTime: 24, // in work hours
              totalTime: 20, // in work days
              costs: 419 // in euro's
            }
          }, {
            id: 5,
            name: 'Klant 5',
            data: {
              ROI: 91, // in percentage
              proceeds: 300, // in euro's
              margin: 5, // in percentage
              conversionRate: 42, // in percentage
              implementationTime: 32, // in work hours
              totalTime: 25, // in work days
              costs: 387 // in euro's
            }
          }, {
            id: 6,
            name: 'klant 6',
            data: {
              ROI: 200, // in percentage
              proceeds: 200, // in euro's
              margin: 21, // in percentage
              conversionRate: 21, // in percentage
              implementationTime: 20, // in work hours
              totalTime: 30, // in work days
              costs: 374 // in euro's
            }
          }
        ]
      },
      { id: 3,
        title: 'Nummertje 3',
        category: 'Focus',
        subCategory: ['Persona\'s'],
        discription: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        intro: 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, non commodo luctus.',
        expertise: ['direteur', 'marketing'],
        targetAudience: ['Doelgroepje', 'doelgroep'],
        clientResults: [
          {
            id: 7,
            name: 'Klant 7',
            data: {
              ROI: 123, // in percentage
              proceeds: 400, // in euro's
              margin: 34, // in percentage
              conversionRate: 23, // in percentage
              implementationTime: 24, // in work hours
              totalTime: 20, // in work days
              costs: 419 // in euro's
            }
          },
          {
            id: 8,
            name: 'Klant 7',
            data: {
              ROI: 123, // in percentage
              proceeds: 400, // in euro's
              margin: 34, // in percentage
              conversionRate: 23, // in percentage
              implementationTime: 24, // in work hours
              totalTime: 20, // in work days
              costs: 419 // in euro's
            }
          }, {
            name: 'Klant 8',
            data: {
              ROI: 91, // in percentage
              proceeds: 300, // in euro's
              margin: 5, // in percentage
              conversionRate: 42, // in percentage
              implementationTime: 32, // in work hours
              totalTime: 25, // in work days
              costs: 387 // in euro's
            }
          }, {
            id: 9,
            name: 'klant 9',
            data: {
              ROI: 200, // in percentage
              proceeds: 200, // in euro's
              margin: 21, // in percentage
              conversionRate: 21, // in percentage
              implementationTime: 20, // in work hours
              totalTime: 30, // in work days
              costs: 374 // in euro's
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
        var names = ['ROI','proceeds', 'margin', 'conversionRate','implementationTime','totalTime','costs']
        for(const name of names){ // Doe per methode, ROI en proceeds berekenen
          let divider = method.clientResults.length // Vraag aantal op in methode
          if(name == 'costs' || name == 'proceeds') {
            var decimalPlaces = 2;
          }else{
            var decimalPlaces = 0;
          }
          var sum = 0
          for(const result of method.clientResults){
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

    },
    timesUsed (state){
      for(const method of state.methods){
        method['timesUsed'] =  method.clientResults.length
      }
    }
  },
  actions: {
    // Als iemand een 'Nieuwe methode' toevoegt, wordt dat hier afgehandeld
  }
});

// axios
//   .get('http://methodbox.nl/api/methods')
//   .then(response => (store.state.methods = response.data))

store.commit('calculateAverages')
store.commit('timesUsed')

export default store