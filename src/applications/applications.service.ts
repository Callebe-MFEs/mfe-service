import { Injectable } from "@decorators/di";
import { Application } from "./application";

import applications from "./applications.json";

@Injectable({ providedIn: "root" })
export class ApplicationsService {
  private applications: Application[] = applications.applications as Application[];

  listApplications(): Application[] {
    return this.applications;
  }

  addApplications(application: Application) {
    this.applications.push(application);
    return application;
  }

  removeApplication(id: number | string) {
    const index = this.applications.findIndex((app) => app.id == id);
    if (index >= 0) {
      this.applications.splice(index, 1);
    }
  }
}
