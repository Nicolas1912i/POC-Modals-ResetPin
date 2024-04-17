import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ManagerStepService} from './services/manager-step.service';
import { ModalCommunicationService } from './services/modal-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private managerStepService: ManagerStepService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private communicationService: ModalCommunicationService) {}

  @ViewChild('componentWrapper', { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  ngOnInit(): void {
    this.initSubscription();
  }

  private initSubscription(): void {
    this.communicationService.subscription.subscribe(x => {
      console.log('initSubscription', x);
      this.renderNextStep();
    });
  }

  startModalsFlow(): void {
    const component = this.managerStepService.startState;
    console.log('Current component is: ', component);
    this.renderComponent(component);
  }

  private renderNextStep() {
    this.managerStepService.next();
    const component = this.managerStepService.currentState;
    console.log('Current component', component);
    this.renderComponent(component);
  }

  private renderComponent(componentClass: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentWrapperRef = factory.create(this.componentContainer.injector);
    this.componentContainer.clear();
    this.componentContainer.insert(componentWrapperRef.hostView);
  }
}
