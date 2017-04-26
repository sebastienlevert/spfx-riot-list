import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';
import * as riot from "riot/riot+compiler";

export class RiotClientSideWebPart<TProperties> extends BaseClientSideWebPart<TProperties> {

  protected get tagName(): string {
    throw new Error("This API needs to be overridden in the web part class");
  }

  protected get webPartOptions(): any {
    throw new Error("This API needs to be overridden in the web part class");
  }
  
  protected get rootComponentType(): any {
    throw new Error("This API needs to be overridden in the web part class");
  }

  public render(): void {
    this.domElement.innerHTML = `<${this.tagName}></${this.tagName}>`;
    riot.mount(this.domElement, this.tagName, this.webPartOptions);
  }
}