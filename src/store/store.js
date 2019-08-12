import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import Axios from 'axios';

Vue.use(Vuex)

const URL = 'https://cors-anywhere.herokuapp.com/http://methodbox.nl/api/methods';

const store = new Vuex.Store({
  state: {
    methods: [],
    allMethods:[],
    presentationModus:    false,
    availableMethods:     null,
    loading:              true,
    minMax: {
      totalTime:          null,
      implementationTime: null,
      costs:              null
    },
    selected: {
      category:           [],
      totalTime:          null,
      implementationTime: null,
      costs:              null,
      targetAudience:     [],
      activeOrNoneActive: 'Actieve methoden',
      sortingOption:      'ROI_desc'
    },
    filterResults: {
      category:           null,
      totalTime:          null,
      implementationTime: null,
      costs:              null,
      targetAudience:     null
    }
  },
  getters: {
    // getAverage (state) {
    //   return state.methods.map(method => {
    //   })
    // }
  },
  mutations: {
    
    storeMethods (state, methods) {
      state.methods = methods
    },
    storeAllMethods (state, methods) {
      state.allMethods = methods
    },
    changeLoadingState (state, loading) {
    	state.loading = loading
    },
    changePresentationState (state) {
      
      state.presentationModus = state.presentationModus == true ? false : true
    },
    changeActiveState (state, status) {
    	state.selected.activeOrNoneActive = status
    },
    changeMethodSortingState (state, option) {
    	state.selected.sortingOption = option
    },
    filterArrayWithString (state, data) {
      state.selected[data.name] = data.value
      if (data.value && data.value.length) {
        state.filterResults[data.name] = state.allMethods.reduce(function(result, o) {
        
          if (data.value.indexOf(o[data.name]) === -1) result.push(o.id)
          return result
          
        }, [])
      } else {
       state.filterResults[data.name] = null
      }
      this.commit('filterMethods')
    },
    filterArrayWithArray (state, data) {
      state.selected[data.name] = data.value
      if (data.value && data.value.length) {
        state.filterResults[data.name] = state.allMethods.reduce(function(result, o) {
          if (!o[data.name] || !o[data.name].length || !o[data.name].some(v => data.value.indexOf(v) !== -1)) result.push(o.id)
          
          return result
        }, [])
      } else {
        state.filterResults[data.name] = null
      }
      this.commit('filterMethods')
    },
    filterMinMax (state, data) {
      state.selected[data.name] = data.value
      if (data.value) {

        state.filterResults[data.name] = state.allMethods.reduce(function(result, o) {
          if (o.clientResults && o.clientResults.length) {
            let avg = o.average[data.name]
            if (avg < data.value[0] || avg > data.value[1]) result.push(o.id)
          } else {
            // Laat resultaat onderaan resultatenlijst staan met een opacity van .8 ofzo
          }
          return result
        }, [])
      } else {
        state.filterResults[data.name] = null
      }
      this.commit('filterMethods')
    },
    filterMethods (state) {
      var finalFilters = []
      for (const result in state.filterResults) {
        var arr = state.filterResults[result]
        // console.log(arr)
        if (arr) finalFilters = finalFilters.concat(arr)
      }
      finalFilters = [...new Set(finalFilters)]
      state.methods = state.allMethods.filter(o => finalFilters.indexOf(o.id) === -1)
      
      this.commit('availableMethods')
    },
    calculateAverages (state) {
      for (const method of state.methods) { // Loop door alle methodes heen
        // console.log(JSON.stringify(method))
        var formatting = [{
          name: 'ROI'
        }, {
          name: 'proceeds',
          decimalPlaces: 2
        }, {
          name: 'margin'// Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
        }, {
          name: 'conversionRate'// Deze mag in de toekomst weg, hier moet in de back end iets voor worden aangepast
        }, {
          name: 'implementationTime'
        }, {
          name: 'totalTime'
        }, {
          name: 'costs',
          decimalPlaces: 2
        }]
        method.average = {}
        for (const obj of formatting) {
          const average = getAverageOfArray(method.clientResults.map(o => o.data[obj.name]), obj.decimalPlaces)
          if(!isNaN(average)){
          method.average[obj.name] = average
          }
          else{
            method.average[obj.name] = " "
          }
        }
      }
    },
    timesUsed (state) {
      for(const method of state.methods){
        method['timesUsed'] =  method.clientResults.length
      }
    },
    availableMethods (state) {

        state['availableMethods'] =  state.methods.length

    },
    getMinMax (state) {
      for (var minMax in state.minMax) {
        let arr = state.allMethods.reduce(function(result, o) {
          if (o.average[minMax]) result.push(o.average[minMax])
          return result
        }, [])
        state.minMax[minMax] = [Math.min(...arr), Math.max(...arr)]
        state.selected[minMax] = [Math.min(...arr), Math.max(...arr)]
      }
    }
  },
  actions: {
    loadData({commit}) {
    	Axios.get(URL).then((response) => {
        commit('storeMethods', response.data)
        commit('storeAllMethods', response.data)
        commit('calculateAverages')
        commit('timesUsed')
        commit('availableMethods')
        commit('getMinMax')
        commit('changeLoadingState', false)
    	})
    }
    // Als iemand een 'Nieuwe methode' toevoegt, wordt dat hier afgehandeld
  }
})

function getAverageOfArray (arr, decimalPlaces = 0) {
  let sum = 0
  for (const a of arr) sum += a
  let divider = arr.length
  let avg
  if (decimalPlaces) {
    avg = '0'.repeat(decimalPlaces) + Math.round(sum / divider * Math.pow(10, decimalPlaces))
    avg = parseFloat(avg.slice(0, decimalPlaces * -1) + '.' + avg.slice(decimalPlaces * -1), 10)
  } else {
    avg = Math.round(sum / divider)
  }
  return avg
}

// axios
//   .get('http://methodbox.nl/api/methods')
//   .then(response => (store.state.methods = response.data))


export default store