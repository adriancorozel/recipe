import { HttpClient } from '@angular/common/http';

export class BaseService {
  protected uriApiBase = 'http://localhost:5000/api';

  constructor(protected Http: HttpClient) {}
}
