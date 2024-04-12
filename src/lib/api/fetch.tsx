/**
 * fetch data
 * @param {String} url
 * @param {Object} options {headers, body}
 * @return {Promise<Response|{error}>}
 */
async function fetchData(url: string, options: any) {

  return await fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 401) {
          throw new Error('Request failed with statuts code 401');
        } else {
          throw new Error(`Request failed with status code ${response.status}`);
        }
      }
    })
    .catch(error => ({ error: error.message || 'An error occurred during the request' }));
}

/**
* fetch data en methode GET
* @param {String} url
* @param {String} token jwt token
* @returns {Promise} data or error
*/

export async function fetchGetData(url: string, token: string | null = null) {
  let options;
  
  if(token === null){
    options = {
      method: 'GET',
      mode: 'cors',
    };
  }else{
    options = {
      method: 'GET',
      headers: { 'authorization': 'Bearer ' + token, },
      mode: 'cors',
    };
  }

  return fetchData(url, options);
}

/**
* fetch data en methode POST
* @param {String} url
* @param {FormData} formData le formData que vous voulez envoyer
* @param {String} token jwt token
* @returns {promise} data or error
*/

export async function fetchPostData(url: string, formData: FormData, token: string | null = null) {
  let options;
  if (token !== null) {
    options = {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`,
      },
      body: formData,
      mode: 'cors',
    };
  } else {
    options = {
      method: 'POST',
      body: formData,
      mode: 'cors',
    };
  }

  return fetchData(url, options);
}

/**
* fetch data en methode PUT (pas encore implémenter)
* @param {String} url
* @param {String} token jwt token
* @returns {promise} data or error
*/
export async function fetchPutData(url: string, token: string | null = null) {
  // options à faire et la requête a envoyé
}

/**
* Effectue une requête DELETE
* @param {String} url - L'URL de la requête
* @param {String} token - Le jeton JWT, si nécessaire
* @returns {Promise} - Une promesse qui résout avec les données ou rejette avec une erreur
*/
export async function fetchDeleteData(url: string, token: string | null = null) {
  let header = token ? { 'Authorization': 'Bearer ' + token } : '';

  let options = {
    method: 'DELETE',
    headers: header,
    mode: 'cors',
  };

  return fetchData(url, options);
}