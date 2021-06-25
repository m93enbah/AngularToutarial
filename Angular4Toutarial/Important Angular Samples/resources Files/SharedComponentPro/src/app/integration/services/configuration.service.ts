import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getApiTypes() {
    return [
      { label: 'REST Api', value: 'rest' },
      { label: 'SOAP', value: 'soap' },
      { label: 'XML-RPC', value: 'xml' },
    ]
  }

  getAuthTypes() {
    return [
      { label: 'Bearer Token', value: 'bearer' },
      { label: 'OAuth 2', value: 'oauth_2' },
      { label: 'Basic Auth', value: 'basic_auth' },
    ]
  }
}
