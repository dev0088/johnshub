import apiConfig from '../../config/api';

class AnalyticsAPI {
  static processResponse = (response, handleResponse) => {
    console.log('=== response: ', response);
    if(response.error) {
      console.log('=== error: ', response.error);
      handleResponse(response.error, true);
    }
    else {
      if (response){
        console.log('success: ', response);
        handleResponse(response, false);
      } else {
        console.log('=== error: ', response);
        handleResponse(response.error, true);
      }
    }
  }

  static processRequest = (url, method, data, handleResponse) => {
    let params = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (data) {
      params = {
        ...params,
        body: JSON.stringify(data)
      };
    }

    fetch(`${apiConfig.url}/${url}`, params)
      .then(response => response.json())
      .then(response => {
        this.processResponse(response, handleResponse);
      })
      .catch(error => {
        console.log('==== error: ', error);
        handleResponse(error, true);
      })
  }

  static getAverageDuration = (data, handleResponse) => {
    this.processRequest(`/analytics/rental_average_duration`, 'get', data, handleResponse);
  };

  static getTimesPerBattery = (data, handleResponse) => {
    this.processRequest(`/analytics/rental_average_duration`, 'get', data, handleResponse);
  };
  
  static getNumbersPerPlace = (data, handleResponse) => {
    this.processRequest(`/analytics/rental_numbers_per_place`, 'get', data, handleResponse);
  };
  
  static getNumbersPerStation = (data, handleResponse) => {
    this.processRequest(`/analytics/rental_numbers_per_station`, 'get', data, handleResponse);
  };
  
  static getUsagePerStationType = () => {
    this.processRequest(`/analytics/rental_usage_per_station_type`, 'get', data, handleResponse);
  };
}

export default AnalyticsAPI;